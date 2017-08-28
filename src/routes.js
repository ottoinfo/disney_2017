import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import LayoutRoute from '_components/LayoutRoute';
import AppContainer from '_containers/App';

import AppView from '_views/App';
import NotFoundView from '_views/NotFound';

export const desktop = (
  <div>
    <Switch>
      <LayoutRoute path='/app' layout={AppContainer} component={AppView} title='App' />
      <Route exact path='/' render={() => ( <Redirect to="/app" push /> )} />
      <LayoutRoute layout={AppContainer} component={NotFoundView} title='Not Found' />
    </Switch>
  </div>
);
