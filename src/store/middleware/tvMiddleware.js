import axios from 'axios';
import {
  FETCH_TV,
  showFetchTV,
  FETCH_CREW,
  showFetchCrewTV,
  FETCH_CAST,
  showFetchCastTV,
  FETCH_VIDEO,
  showFetchVideoTV,
} from 'src/store/reducer/tv';

function fetchTV(store, id) {
  axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=d21d6f9a11307550b8fe09b60f3ee8ef&language=fr-FR`)
    .then((response) => {
      // console.log('Je suis le middleware', response);
      const save = showFetchTV(response.data);
      store.dispatch(save);
    })
    .catch((error) => {
      console.error(error);
    });
}

function fetchCrew(store, id) {
  axios.get(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=d21d6f9a11307550b8fe09b60f3ee8ef&language=fr-FR`)
    .then((response) => {
      // console.log('Je suis middleware', response);
      const save = showFetchCrewTV(response.data.crew);
      store.dispatch(save);
    })
    .catch((error) => {
      console.error(error);
    });
}

function fetchCast(store, id) {
  axios.get(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=d21d6f9a11307550b8fe09b60f3ee8ef&language=fr-FR`)
    .then((response) => {
      // console.log('Je suis middleware', response);
      const save = showFetchCastTV(response.data.cast);
      store.dispatch(save);
    })
    .catch((error) => {
      console.error(error);
    });
}

function fetchVideo(store, id) {
  axios.get(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=d21d6f9a11307550b8fe09b60f3ee8ef`)
    .then((response) => {
      // console.log('Je suis middleware', response);
      const save = showFetchVideoTV(response.data.results);
      store.dispatch(save);
    })
    .catch((error) => {
      console.error(error);
    });
}

const tvMiddleware = (store) => (next) => (action) => {
  // console.log('Je suis le middleware - Action', action);
  switch (action.type) {
    case FETCH_TV: {
      fetchTV(store, action.id);
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
