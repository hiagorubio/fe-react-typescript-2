import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { fetchUserEpic, fetchUserEventEpic, fetchUserReposEpic } from './users/epics';
import usersStore from './users/reducer';

export const rootEpic = combineEpics(fetchUserEpic, fetchUserEventEpic, fetchUserReposEpic);

export const rootReducer = combineReducers({
   usersStore: persistReducer({ key: 'usersStore', storage }, usersStore),
});
