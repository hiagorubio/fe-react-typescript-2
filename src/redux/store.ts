import {
  Store as ReduxStore,
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { persistStore } from 'redux-persist';
import { Action } from 'typesafe-actions';

import { rootEpic, rootReducer } from './modules';
import { State } from './types';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware<Action<string>, Action<string>, State>();
const enhancer = composeEnhancers(applyMiddleware(epicMiddleware));

const store: ReduxStore<Store> = createStore(rootReducer, enhancer);

if (module.hot !== undefined) {
  module.hot.accept(() => {
    const nextRootReducer = combineReducers<Store>({ rootReducer });
    store.replaceReducer(nextRootReducer);
  });
}
epicMiddleware.run(rootEpic);

export const persistor = persistStore(store);

export default store;
