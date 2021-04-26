import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import usersStore, { fetchUserEpic } from './users';

export const rootEpic = combineEpics(fetchUserEpic);

export const rootReducer = combineReducers({ usersStore });
