import axios from 'axios';
import {
  FETCH_TV,
  showFetchTv,
  FETCH_CREW,
  showFetchCrew,
  FETCH_CAST,
  showFetchCast,
  FETCH_VIDEO,
  showFetchVideo,
} from 'src/store/reducer/tv';

function fetchTV(store, id) {
  axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=d21d6f9a11307550b8fe09b60f3ee8ef&language=fr-FR`)
    .then((response) => {
      // console.log('Je suis le middleware', response);
      const save = showFetchTv(response.data);
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
      const save = showFetchCrew(response.data.crew);
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
      const save = showFetchCast(response.data.cast);
      store.dispatch(save);
    })
    .catch((error) => {
      console.error(error);
    });
}

function fetchVideo(store, id) {
  axios.get(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=d21d6f9a11307550b8fe09b60f3ee8ef&language=fr-FR`)
    .then((response) => {
      // console.log('Je suis middleware', response);
      const save = showFetchVideo(response.data.results);
      store.dispatch(save);
    })
    .catch((error) => {
      console.error(error);
    });
}

const detailsMiddleware = (store) => (next) => (action) => {
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


export default detailsMiddleware;
