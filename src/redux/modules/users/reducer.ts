import axios from 'axios';
import { Reducer } from 'redux';
import { StateObservable, ofType } from 'redux-observable';
import { Observable, from } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Action } from 'typesafe-actions';

import { State } from '../../types';

import { ActionTypes, User, UserState } from './types';

const INITITAL_SATE: UserState = {
  error: false,
  loading: false,
  since: 0,
  users: [],
};

export const fetchUsers = () => ({ type: ActionTypes.FETCH_USER });

export const fetchUsersSuccess = (payload: User[]) => ({
  payload,
  type: ActionTypes.SUCCESS,
});

export const fetchUsersError = () => ({ type: ActionTypes.ERROR });

const reducer: Reducer<UserState> = (state = INITITAL_SATE, action) => {
  switch (action.type) {
    case ActionTypes.SUCCESS:
      const newUsers = [...state.users];
      newUsers.push(...action.payload);

      return {
        ...state,
        loading: true,
        since: state.since + 30,
        users: newUsers,
      };
    case ActionTypes.ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;

export const fetchUserEpic = (
  action$: Observable<Action>,
  state$: StateObservable<State>,
): Observable<Action> =>
  action$.pipe(
    ofType(ActionTypes.FETCH_USER),
    mergeMap(() =>
      from(
        axios.get(
          `https://api.github.com/users?per_page=30&since=${state$?.value?.usersStore?.since}`,
          {
            headers: {
              Authorization: 'Bearer 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',
            },
          },
        ),
      ).pipe(
        map(response => fetchUsersSuccess(response.data)),
        catchError(() => fetchUsersError),
      ),
    ),
  );
