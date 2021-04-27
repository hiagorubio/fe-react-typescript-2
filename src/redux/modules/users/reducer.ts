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
  selectUser: {
    avatar_url: '',
    events_url: '',
    followers_url: '',
    following_url: '',
    gists_url: '',
    gravatar_id: '',
    html_url: '',
    id: undefined,
    login: '',
    node_id: '',
    organizations_url: '',
    received_events_url: '',
    repos_url: '',
    site_admin: false,
    starred_url: '',
    subscriptions_url: '',
    type: '',
    url: '',
  },
  since: 0,
  users: [],
};

export const fetchUsers = () => ({ type: ActionTypes.FETCH_USER });

export const fetchUsersSuccess = (payload: User[]) => ({
  payload,
  type: ActionTypes.SUCCESS,
});

export const fetchUsersError = () => ({ type: ActionTypes.ERROR });

export const setUser = (payload: User) => ({ payload, type: ActionTypes.SET_USER });

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
    case ActionTypes.SET_USER:
      return {
        ...state,
        selectUser: action.payload,
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
