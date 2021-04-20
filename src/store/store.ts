import {
  Store as ReduxStore,
  combineReducers,
  createStore,
  compose,
} from "redux";

import { root } from "../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers();

const store: ReduxStore<Store> = createStore(root, enhancer);

if (module.hot !== undefined) {
  module.hot.accept(() => {
    const nextRootReducer = combineReducers<Store>({
      ...require("../reducers/root").default,
    });

    store.replaceReducer(nextRootReducer);
  });
}

export default store;
