/* eslint-disable import/extensions */
import axios from 'axios';
import {
  FETCH_TV,
  showFetchTV,
  FETCH_GENRES_TV,
  showFetchGenresTV,
  FETCH_CREW,
  showFetchCrewTV,
  FETCH_CAST,
  showFetchCastTV,
  FETCH_VIDEO,
  showFetchVideoTV,
} from 'src/store/reducer/tv';

import API_KEY from './config.js';

const keyApi = API_KEY;

function fetchTV(store, id) {
  axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${keyApi}&language=fr-FR`)
    .then((response) => {
      // console.log('Je suis le middleware', response);
      const save = showFetchTV(response.data);
      store.dispatch(save);
    })
    .catch((error) => {
      // console.error(error);
    });
}

function fetchGenresTV(store, id) {
  axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${keyApi}&language=fr-FR`)
    .then((response) => {
      // console.log('Je suis le middleware', response.data.genres);
      const save = showFetchGenresTV(response.data.genres);
      store.dispatch(save);
    })
    .catch((error) => {
      // console.error(error);
    });
}

function fetchCrew(store, id) {
  axios.get(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${keyApi}&language=fr-FR`)
    .then((response) => {
      // console.log('Je suis middleware', response);
      const save = showFetchCrewTV(response.data.crew);
      store.dispatch(save);
    })
    .catch((error) => {
      // console.error(error);
    });
}

function fetchCast(store, id) {
  axios.get(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${keyApi}&language=fr-FR`)
    .then((response) => {
      // console.log('Je suis middleware', response);
      const save = showFetchCastTV(response.data.cast);
      store.dispatch(save);
    })
    .catch((error) => {
      // console.error(error);
    });
}

function fetchVideo(store, id) {
  axios.get(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${keyApi}`)
    .then((response) => {
      // console.log('Je suis middleware', response);
      const save = showFetchVideoTV(response.data.results);
      store.dispatch(save);
    })
    .catch((error) => {
      // console.error(error);
    });
}

const tvMiddleware = (store) => (next) => (action) => {
  // console.log('Je suis le middleware - Action', action);
  switch (action.type) {
    case FETCH_TV: {
      fetchTV(store, action.id);
      break;
    }
    case FETCH_GENRES_TV: {
      fetchGenresTV(store, action.id);
      break;
    }
    case FETCH_CREW: {
      fetchCrew(store, action.id);
      break;
    }
    case FETCH_CAST: {
      fetchCast(store, action.id);
      break;
    }
    case FETCH_VIDEO: {
      fetchVideo(store, action.id);
      break;
    }
    default:
      next(action);
  }
};


export default tvMiddleware;
