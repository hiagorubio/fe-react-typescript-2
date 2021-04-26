import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Theme from './config/Theme';
import store from './redux/store';
import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <Theme>
      <Routes />
    </Theme>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot !== undefined) {
  module.hot.accept();
}
