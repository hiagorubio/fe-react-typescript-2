import {
  Store as ReduxStore,
  combineReducers,
  createStore,
  compose,
  applyMiddleware,
} from "redux";
import { createEpicMiddleware } from "redux-observable";

import { rootReducer, rootEpic } from "./modules";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware();
const enhancer = composeEnhancers(applyMiddleware(epicMiddleware));

const store: ReduxStore<Store> = createStore(rootReducer, enhancer);

if (module.hot !== undefined) {
  module.hot.accept(() => {
    const nextRootReducer = combineReducers<Store>({ rootReducer });
    store.replaceReducer(nextRootReducer);
  });
}
epicMiddleware.run(rootEpic);

export default store;
