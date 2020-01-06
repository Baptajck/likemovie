// == Import : npm
import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

// == Import : local
import './app.scss';
import Home from 'src/components/Home';
import Sidebar from 'src/components/Sidebar';
import Error from 'src/components/Error';

// == Composant
const App = () => (
  <div id="app">
    <Switch>
      <Route exact path="/">
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
export default App;
