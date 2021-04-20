import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store';

const App = () => (
  <Provider store={store}>
    <div>Hello World!</div>
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

if (module.hot !== undefined) {
  module.hot.accept();
}
