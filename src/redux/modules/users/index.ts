import axios from 'axios';
import { Reducer } from 'redux';
import { StateObservable, ofType } from 'redux-observable';
import { Observable, from } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Action } from 'typesafe-actions';

import { State } from '../../types';

import { ACTION_TYPES, User, UserState } from './types';

const INITITAL_SATE: UserState = {
  users: [],
  loading: false,
  error: false,
  since: 0,
};

export const fetchUsers = (since: number) => ({
  type: ACTION_TYPES.FETCH_USER,
  payload: since,
});

export const fetchUsersSuccess = (payload: User[]) => ({
  type: ACTION_TYPES.SUCCESS,
  payload,
});

export const fetchUsersError = () => ({ type: ACTION_TYPES.ERROR });

const reducer: Reducer<UserState> = (state = INITITAL_SATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.SUCCESS:
      const newUsers = [...state.users];
      newUsers.push(...action.payload);
      return {
        ...state,
        users: newUsers,
        loading: true,
        since: state.since + 30,
      };
    case ACTION_TYPES.ERROR:
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
    ofType(ACTION_TYPES.FETCH_USER),
    mergeMap(() =>
      from(
        axios.get(
          `https://api.github.com/users?per_page=30&since=${state$.value.usersStore.since}`,
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
