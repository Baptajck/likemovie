// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';
import Home from 'src/components/Home';
import Sidebar from 'src/components/Sidebar';

// == Composant
const App = () => (
  <div id="app">
    <Sidebar />
    <Home />
  </div>
);

// == Export
export default App;
