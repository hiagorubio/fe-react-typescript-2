import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { HomePage } from '../components/pages';

import routes from './routes';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path={routes.ROOT} component={HomePage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
