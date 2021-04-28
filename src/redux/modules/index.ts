import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import usersStore, { fetchUserEpic } from './users/reducer';

export const rootEpic = combineEpics(fetchUserEpic);

export const rootReducer = combineReducers({
   usersStore: persistReducer({ key: 'usersStore', storage }, usersStore),
});
