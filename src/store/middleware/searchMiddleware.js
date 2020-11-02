/* eslint-disable import/extensions */
import axios from 'axios';
import {
  FETCH_SEARCH_MOVIE,
  showFetchSearchMovie,
  FETCH_SEARCH_TV,
  showFetchSearchTV,
  showFetchSearchPages,
  // searchErrorCancel,
} from 'src/store/reducer/search';

import API_KEY from './config.js';

const keyApi = API_KEY;

function fetchSearchMovie(store, val) {
  const state = store.getState();
  const { pages } = state.search;
  if (val !== '') {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${keyApi}&language=fr-FR&query=${val}&page=${pages}&include_adult=false`)
      .then((response) => {
      // console.log('Je suis le middleware movie', response.dat);
        const page = showFetchSearchPages(response.data.page);
        const result = showFetchSearchMovie(response.data.results);
        store.dispatch(page);
        store.dispatch(result);
      })
      .catch((error) => {
        // console.error(error.constructor);
      });
  }
}

function fetchSearchTV(store, val) {
  // if (val !== '') {
  axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${keyApi}&language=fr-FR&query=${val}&page=1`)
    .then((response) => {
      // console.log('Je suis middleware show', response);
      const save = showFetchSearchTV(response.data.results);
      store.dispatch(save);
    })
    .catch((error) => {
      // if (error.response.status === 422) {
      //   const save = searchErrorCancel();
      //   store.dispatch(save);
      // }
      // console.error(error);
      // console.log(error.response);
    });
  // }
}

const searchMiddleware = (store) => (next) => (action) => {
  // console.log('Je suis le middleware - Action', action);
  switch (action.type) {
    case FETCH_SEARCH_MOVIE: {
      fetchSearchMovie(store, action.val);
      break;
    }
    case FETCH_SEARCH_TV: {
      fetchSearchTV(store, action.val);
      break;
    }
    default:
      next(action);
  }
};


export default searchMiddleware;
