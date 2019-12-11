// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';
import Home from 'src/components/Home';
import Sidebar from 'src/components/Sidebar';
import Error from 'src/components/Error';

// == Composant
const App = () => (
  <div id="app">
    <Sidebar />
    <Home />
    {/* <Error /> */}
  </div>
);

// == Export
export default App;
