// == Import : npm
import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

// == Import : local
import './app.scss';
import Home from 'src/containers/home';
import Sidebar from 'src/components/Sidebar';
import { Details } from 'src/components/Details';
import Error from 'src/components/Error';

// == Composant
const App = () => (
  <div id="app">
    <Switch>
      <Route path="/details/:id/:slug">
        <Sidebar />
        <Details />
      </Route>
      <Route exact path="/likemovie">
        <Sidebar />
        <Home />
      </Route>
      <Route path="*">
        <Error />
      </Route>
    </Switch>
  </div>
);

// == Export
export default withRouter(App);
