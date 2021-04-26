import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { DetailsPage, HomePage } from '../components/pages';

export enum RoutesEnum {
  ROOT = '/',
  DETAILS_PAGE = '/details',
}

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={RoutesEnum.DETAILS_PAGE} component={DetailsPage} />
      <Route exact path={RoutesEnum.ROOT} component={HomePage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
