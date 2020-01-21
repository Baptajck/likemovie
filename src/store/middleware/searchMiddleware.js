import axios from 'axios';
import {
  FETCH_SEARCH_MOVIE,
  showFetchSearchMovie,
  FETCH_SEARCH_TV,
  showFetchSearchTV,
} from 'src/store/reducer/search';

const keyApi = 'd21d6f9a11307550b8fe09b60f3ee8ef';

function fetchSearchMovie(store, val) {
  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${keyApi}&language=fr-FR&query=${val}&page=1&include_adult=false`)
    .then((response) => {
      // console.log('Je suis le middleware movie', response);
      const save = showFetchSearchMovie(response.data.results);
      store.dispatch(save);
    })
    .catch((error) => {
      console.error(error);
    });
}

function fetchSearchTV(store, val) {
  axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${keyApi}&language=fr-FR&query=${val}&page=1`)
    .then((response) => {
      // console.log('Je suis middleware show', response);
      const save = showFetchSearchTV(response.data.results);
      store.dispatch(save);
    })
    .catch((error) => {
      console.error(error);
    });
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
