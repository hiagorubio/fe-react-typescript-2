import { Reducer } from 'redux';

import { ActionTypes, UserState } from './types';

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
  userEvents: [],
  users: [],
};

const reducer: Reducer<UserState> = (state = INITITAL_SATE, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_USERS_SUCCESS:
      const newUsers = [...state.users];
      newUsers.push(...action.payload.users);

      return {
        ...state,
        loading: true,
        since: state.since + 30,
        users: newUsers,
      };
    case ActionTypes.FETCH_USERS_ERROR:

      return {
        ...state,
        error: true,
        loading: false,
      };
    case ActionTypes.SET_USERS:
      return {
        ...state,
        selectUser: action.payload,
      };

    case ActionTypes.FETCH_USER_EVENTS_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        userEvents: action.payload,
      };

    case ActionTypes.FETCH_USER_EVENTS_ERROR:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};

export default reducer;
