import axios from 'axios';
import { StateObservable, ofType } from 'redux-observable';
import { Observable, from, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { State } from '../../types';

import { fetchUsersError, fetchUsersEventsSuccess, fetchUsersSuccess } from './actions';
import { ActionTypes, FetchUserEventActions, FetchUsersActions, UserEvent } from './types';

export const fetchUserEpic = (
  action$: Observable<FetchUsersActions>,
  state$: StateObservable<State>,
) =>
  action$.pipe(
    ofType(ActionTypes.FETCH_USERS),
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
        map(response => fetchUsersSuccess({ users: response.data })),
          catchError(() => fetchUsersError),
      ),
    ),
  );

const buildUserEvent = (data: any): UserEvent[] => {
  if (!data || !data.length) { return []; }
  const userEvents: UserEvent[] = [];
  data.forEach((item: any) => {
    if (!Boolean(item?.type === 'PullRequestReviewEvent')) { return; }
    userEvents.push({
        action: item?.payload?.action,
        avatarUrl: item?.avatar_url,
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
  action$: Observable<FetchUserEventActions>,
) =>
  action$.pipe(
    ofType(ActionTypes.FETCH_USER_EVENTS),
    mergeMap(action =>
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
  );
