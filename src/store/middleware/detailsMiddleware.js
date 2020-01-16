import axios from 'axios';
import { GET_FETCH_MOVIE, showFetchMovie } from 'src/store/reducer/details';

function getFetchMovie(store, id) {
  // try {
  // axios.defaults.withCredentials = true;
  // const response = axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=d21d6f9a11307550b8fe09b60f3ee8ef&language=fr-FR`)
  axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=d21d6f9a11307550b8fe09b60f3ee8ef&language=fr-FR`)
    .then((response) => {
      // console.log('Je suis reponse', response);
      const save = showFetchMovie(response.data);
      store.dispatch(save);
    })
    .catch((error) => {
      console.error(error);
    });
  //   console.log('Je suis response', response);
  //   const save = showFetchMovie(response.data);
  //   store.dispatch(save);
  // }
  // catch (err) {
  //   console.error(err);
  // }
}

const detailsMiddleware = (store) => (next) => (action) => {
  // console.log('Je suis le middleware', action);
  switch (action.type) {
    case GET_FETCH_MOVIE: {
      getFetchMovie(store, action.id);
      break;
    }
    default:
      next(action);
  }
};


export default detailsMiddleware;
