import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./redux/store";
import Routes from "./routes";
import Theme from "./config/Theme";

const App = () => (
  <Provider store={store}>
    <Theme>
      <Routes />
    </Theme>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot !== undefined) {
  module.hot.accept();
}
