import { Store as ReduxStore, compose } from 'redux';

declare global {
  interface Store {}

  interface Window {
    store?: ReduxStore<Store>;

    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
