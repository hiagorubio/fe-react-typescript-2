import { Reducer } from 'redux';

import { ActionTypes, UserState } from './types';

const INITITAL_SATE: UserState = {
  selectUser: {
    avatar_url: '',
    events_url: '',
    followers_url: '',
    following_url: '',
    gists_url: '',
    gravatar_id: '',
    html_url: '',
    id: 0,
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
  userError: false,
  userEvents: [],
  userEventsError: false,
  userEventsLoading: false,
  userLoading: false,
  userRepos: {
    count: 0,
    repositories: [],
  },
  userReposError: false,
  userReposLoading: false,
  users: [],
};

const reducer: Reducer<UserState> = (state = INITITAL_SATE, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_USERS_LOADING:

      return {
        ...state,
        userLoading: true,
      };

    case ActionTypes.FETCH_USERS_SUCCESS:
      const newUsers = [...state.users];
      newUsers.push(...action.payload.users);

      return {
        ...state,
        since: state.since + 30,
        userError: false,
        userLoading: true,
        users: newUsers,
      };

    case ActionTypes.FETCH_USERS_ERROR:

      return {
        ...state,
        userError: true,
        userLoading: false,
      };
    case ActionTypes.SET_USERS:
      return {
        ...state,
        selectUser: action.payload,
      };

    case ActionTypes.FETCH_USER_EVENTS_LOADING:

      return {
        ...state,
        userEventsLoading: true,
      };

    case ActionTypes.FETCH_USER_EVENTS_SUCCESS:
      return {
        ...state,
        userEvents: action.payload,
        userEventsError: false,
        userEventsLoading: false,
      };

    case ActionTypes.FETCH_USER_EVENTS_ERROR:
      return {
        ...state,
        userEventsError: true,
        userEventsLoading: false,
      };

    case ActionTypes.FETCH_USER_REPOS_LOADING:

      return {
        ...state,
        userReposLoading: true,
      };

    case ActionTypes.FETCH_USER_REPOS_SUCCESS:
      return {
        ...state,
        userRepos: action.payload,
        userReposError: false,
        userReposLoading: false,
      };

    case ActionTypes.FETCH_USER_REPOS_ERROR:
      return {
        ...state,
        userReposError: true,
        userReposLoading: false,
      };

    case ActionTypes.SET_USER_REPOS:
      return {
        ...state,
        userRepos: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
