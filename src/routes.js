import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import LayoutRoute from '_components/LayoutRoute';
import AppContainer from '_containers/App';

import Movies from '_containers/Movies';
import MovieDetails from '_containers/MovieDetails';
import NotFoundView from '_views/NotFound';

export const desktop = (
  <div>
    <Switch>
      <LayoutRoute path='/movie/:slug' layout={AppContainer} component={MovieDetails} title='Movie Details' />
      <LayoutRoute exact path='/movies' layout={AppContainer} component={Movies} title='Movies' />
      <Route exact path='/' render={() => ( <Redirect to="/movies" push /> )} />
      <LayoutRoute layout={AppContainer} component={NotFoundView} title='Not Found' />
    </Switch>
  </div>
);
