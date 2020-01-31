// == Import : npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';


// == Import : local
import './app.scss';
import ScrollToTop from 'src/components/ScrollToTop';
import Home from 'src/containers/home';
import Sidebar from 'src/components/Sidebar';
import Details from 'src/containers/details';
import Error from 'src/components/Error';
import TVShow from 'src/containers/tv';
import Search from 'src/containers/search';
import Contact from 'src/components/Contact';
import Team from 'src/components/Team';

// == Composant
const App = () => (
  <div id="app">
    <ScrollToTop />
    <Switch>
      <Route path="/movie/:id/:slug">
        <Sidebar />
        <Details />
      </Route>
      <Route path="/tv/:id/:slug">
        <Sidebar />
        <TVShow />
      </Route>
      <Route exact path="/search">
        <Sidebar />
        <Search />
      </Route>
      <Route exact path="/team">
        <Sidebar />
        <Team />
      </Route>
      <Route exact path="/contact">
        <Sidebar />
        <Contact />
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
export default App;
