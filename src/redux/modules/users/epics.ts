import axios from 'axios';
import { StateObservable, ofType } from 'redux-observable';
import { Observable, concat, from, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import { State } from '../../types';

import { fetchUserEventsLoading,
  fetchUserReposLoading,
  fetchUsersEventsSuccess,
  fetchUsersLoading,
  fetchUsersReposSuccess,
  fetchUsersSuccess,
} from './actions';
import { ActionTypes, FetchUsersActions, UserEvent, UserRepos } from './types';

export const fetchUserEpic = (
  action$: Observable<FetchUsersActions>,
  state$: StateObservable<State>,
) =>
  action$.pipe(
    ofType(ActionTypes.FETCH_USERS),
    switchMap(() => concat(
    of(fetchUsersLoading()),
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
          map(response => fetchUsersSuccess({ users: response.data })),
          catchError(() => of({
            type: ActionTypes.FETCH_USERS_ERROR,
          })),
        ),
      )),
  );

const buildUserEvent = (data: any): UserEvent[] => {
  if (!data || !data.length) { return []; }
  const userEvents: UserEvent[] = [];
  data.forEach((item: any) => {
    if (!Boolean(item?.type === 'PullRequestReviewEvent')) { return; }
    userEvents.push({
        action: item?.payload?.action,
        avatarUrl: item?.actor?.avatar_url,
        createdAt: item?.created_at,
        id: item?.id,
        login: item?.actor?.login,
        pullUrl: item?.payload?.pull_request?.html_url,
        repoName: item?.repo.name,
        type: item?.type,
      });
    });

  return userEvents;
};

export const fetchUserEventEpic = (
  action$: Observable<FetchUsersActions>,
) =>
  action$.pipe(
    ofType(ActionTypes.FETCH_USER_EVENTS),
    switchMap(action => concat(
      of(fetchUserEventsLoading()),
      from(
        axios.get(
            `https://api.github.com/users/${action.user}/events/public`,
          {
            headers: {
              Authorization: 'Bearer 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',
            },
          },
        ),
      ).pipe(
        map(response => fetchUsersEventsSuccess(buildUserEvent(response.data))),
          catchError(() => of({
            type: ActionTypes.FETCH_USER_EVENTS_ERROR,
          })),
      ),
    ),
    ),
  );

const buildUserRepos = (data: any): UserRepos => {
   if (!data || !data.length) { return ({ count: 0, repositories: [] }); }

   return({
    count: data.length,
    repositories : data.map((item: any) => ({
        id: item?.id,
        name: item?.name,
       }),
    ),
  });
};

export const fetchUserReposEpic = (
  action$: Observable<FetchUsersActions>,
) =>
  action$.pipe(
    ofType(ActionTypes.FETCH_USER_REPOS),
    mergeMap(action => concat(
      of(fetchUserReposLoading()),
      from(
        axios.get(
            `https://api.github.com/users/${action.user}/repos`,
          {
            headers: {
              Authorization: 'Bearer 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',
            },
          },
        ),
      ).pipe(
        map(response => fetchUsersReposSuccess(buildUserRepos(response.data))),
          catchError(() => of({
            type: ActionTypes.FETCH_USER_REPOS_ERROR,
          })),
      ),
    ),
    ),
  );
