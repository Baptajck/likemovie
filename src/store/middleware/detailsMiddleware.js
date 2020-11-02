/* eslint-disable import/extensions */
import axios from 'axios';
import {
  GET_FETCH_MOVIE,
  showFetchMovie,
  FETCH_GENRES_MOVIE,
  showFetchGenresMovie,
  GET_FETCH_CREW,
  showFetchCrew,
  GET_FETCH_CAST,
  showFetchCast,
  GET_FETCH_VIDEO,
  showFetchVideo,
} from 'src/store/reducer/details';

import API_KEY from './config.js';

const keyApi = API_KEY;

function getFetchMovie(store, id) {
  axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=d21d6f9a11307550b8fe09b60f3ee8ef&language=fr-FR`)
    .then((response) => {
      const save = showFetchMovie(response.data);
      store.dispatch(save);
    })
    .catch((error) => {
      // console.error(error);
    });
}

function fetchGenresMovie(store, id) {
  axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${keyApi}&language=fr-FR`)
    .then((response) => {
      // console.log('Je suis le middleware', response.data.genres);
      const save = showFetchGenresMovie(response.data.genres);
      store.dispatch(save);
    })
    .catch((error) => {
      // console.error(error);
    });
}

function getFetchCrew(store, id) {
  axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=d21d6f9a11307550b8fe09b60f3ee8ef`)
    .then((response) => {
      // console.log('Je suis middleware', response);
      const save = showFetchCrew(response.data.crew);
      store.dispatch(save);
    })
    .catch((error) => {
      // console.error(error);
    });
}

function getFetchCast(store, id) {
  axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=d21d6f9a11307550b8fe09b60f3ee8ef`)
    .then((response) => {
      // console.log('Je suis middleware', response);
      const save = showFetchCast(response.data.cast);
      store.dispatch(save);
    })
    .catch((error) => {
      // console.error(error);
    });
}

function getFetchVideo(store, id) {
  axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=d21d6f9a11307550b8fe09b60f3ee8ef&language=fr-FR`)
    .then((response) => {
      // console.log('Je suis middleware', response);
      const save = showFetchVideo(response.data.results);
      store.dispatch(save);
    })
    .catch((error) => {
      // console.error(error);
    });
}

const detailsMiddleware = (store) => (next) => (action) => {
  // console.log('Je suis le middleware', action);
  switch (action.type) {
    case GET_FETCH_CREW: {
      getFetchCrew(store, action.id);
      break;
    }
    case FETCH_GENRES_MOVIE: {
      fetchGenresMovie(store, action.id);
      break;
    }
    case GET_FETCH_MOVIE: {
      getFetchMovie(store, action.id);
      break;
    }
    case GET_FETCH_CAST: {
      getFetchCast(store, action.id);
      break;
    }
    case GET_FETCH_VIDEO: {
      getFetchVideo(store, action.id);
      break;
    }
    default:
      next(action);
  }
};


export default detailsMiddleware;
