import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Theme from './config/Theme';
import store, { persistor } from './redux/store';
import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Theme>
        <Routes />
      </Theme>
    </PersistGate>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot !== undefined) {
  module.hot.accept();
}
