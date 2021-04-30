import { ActionTypes, FetchUsersSuccess, User, UserEvent, UserRepos } from './types';

/**
 * User Actions
 */
export const fetchUsers = () => ({ type: ActionTypes.FETCH_USERS });

export const fetchUsersSuccess = ({ users }: FetchUsersSuccess) => ({
  payload: { users },
  type: ActionTypes.FETCH_USERS_SUCCESS,
});

export const fetchUsersError = () => ({ type: ActionTypes.FETCH_USERS_ERROR });

export const setUser = (payload: User) => ({ payload, type: ActionTypes.SET_USERS });

/**
 * User Events Actions
 */

export const fetchUserEvents = (user: string) => ({ user, type: ActionTypes.FETCH_USER_EVENTS });

export const fetchUsersEventsSuccess = (userEvents: UserEvent[]) => ({
  payload:  userEvents,
  type: ActionTypes.FETCH_USER_EVENTS_SUCCESS,
});

export const fetchUsersEventsError = () => ({ type: ActionTypes.FETCH_USER_EVENTS_ERROR });

export const setUserEvents = (payload: User) => ({ payload, type: ActionTypes.SET_USER_EVENTS });

/**
 * User Repos Actions
 */

export const fetchUserRepos = (user: string) => ({ user, type: ActionTypes.FETCH_USER_REPOS });

export const fetchUsersReposSuccess = (userEvents: UserRepos) => ({
  payload:  userEvents,
  type: ActionTypes.FETCH_USER_REPOS_SUCCESS,
});