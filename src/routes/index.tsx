import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./routes";

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path={routes.ROOT}>Hello World!</Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
