// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import reducer from 'src/store/reducer/index';
import homeMiddleware from './middleware/homeMiddleware';
import detailsMiddleware from './middleware/detailsMiddleware';
import tvMiddleware from './middleware/tvMiddleware';
import searchMiddleware from './middleware/searchMiddleware';

// == Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const enhancers = applyMiddleware(
//   homeMiddleware,
//   detailsMiddleware,
//   tvMiddleware,
//   searchMiddleware,
// );

const enhancers = composeEnhancers(
  applyMiddleware(
    homeMiddleware,
    detailsMiddleware,
    tvMiddleware,
    searchMiddleware,
  ),
);

const store = createStore(
  reducer,
  // preloadedState,
  enhancers,
);

// == Export
export default store;
