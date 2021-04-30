
import { Action } from 'typesafe-actions';
export interface User {
  readonly login: string;
  readonly id: number | 0;
  readonly node_id: string;
  readonly avatar_url: string;
  readonly gravatar_id: string;
  readonly url: string;
  readonly html_url: string;
  readonly followers_url: string;
  readonly following_url: string;
  readonly gists_url: string;
  readonly starred_url: string;
  readonly subscriptions_url: string;
  readonly organizations_url: string;
  readonly repos_url: string;
  readonly events_url: string;
  readonly received_events_url: string;
  readonly type: string;
  readonly site_admin: boolean;
}

export enum ActionTypes {
  FETCH_USERS = 'users/fetch',
  FETCH_USERS_LOADING = 'users/loading',
  FETCH_USERS_SUCCESS = 'users/sucess',
  FETCH_USERS_ERROR = 'users/error',
  SET_USERS = 'users/set',

  FETCH_USER_EVENTS= 'user-events/fetch',
  FETCH_USER_EVENTS_LOADING= 'user-events/loading',
  FETCH_USER_EVENTS_SUCCESS= 'user-events/success',
  FETCH_USER_EVENTS_ERROR= 'user-events/error',
  SET_USER_EVENTS= 'user-events/set',

  FETCH_USER_REPOS= 'user-repos/fetch',
  FETCH_USER_REPOS_LOADING= 'user-repos/loading',
  FETCH_USER_REPOS_SUCCESS= 'user-repos/success',
  FETCH_USER_REPOS_ERROR= 'user-repos/error',
  SET_USER_REPOS= 'user-repos/set',

}
export interface ActionUser {
  user?: string;
}

export type FetchUsersActions = ActionUser & Action<string>;

export interface FetchUsersSuccess { users: User[]; }

export interface UserEvent {
  action: string;
  avatarUrl: string;
  createdAt: string;
  id: string;
  login: string;
  pullUrl: string;
  repoName: string;
  type: string;
}
export interface UserRepo {
  id: string;
  name: string;
}
export interface UserRepos {
  repositories: UserRepo[];
  count: number;
}

export interface UserState {
  readonly users: User[];
  readonly userLoading: boolean;
  readonly userError: boolean;

  readonly since: number;
  readonly selectUser: User;

  readonly userEvents: UserEvent[];
  readonly userEventsLoading: boolean;
  readonly userEventsError: boolean;

  readonly userRepos: UserRepos;
  readonly userReposLoading: boolean;
  readonly userReposError: boolean;
}
