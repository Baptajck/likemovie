/* eslint-disable camelcase */
import axios from 'axios';
import { GET_FILM, show_film, GET_TVSHOW, show_tvShow } from 'src/store/reducer';

const homeMiddleware = (store) => (next) => (action) => {
  // console.log('Je suis le middleware, et je laisse passer cette action: ', action);
  next(action);
  // POUR EXEMPLE: Requetes avec Axios
  // Je dois réagir uniquement à certains types d'action

  switch (action.type) {
    case GET_FILM:
      axios.get('https://api.themoviedb.org/3/movie/now_playing', {
        params: {
          api_key: 'd21d6f9a11307550b8fe09b60f3ee8ef',
          language: 'fr-FR',
          iso_3166_1: 'FR',
          english_name: 'France',
        },
      })
        .then((response) => {
          // console.log(response);
          const save = show_film(response.data.results);
          store.dispatch(save);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {

        });
      break;

    case GET_TVSHOW:
      axios.get('https://api.themoviedb.org/3/tv/popular', {
        params: {
          api_key: 'd21d6f9a11307550b8fe09b60f3ee8ef',
          language: 'fr-FR',
          iso_3166_1: 'FR',
          english_name: 'France',
        },
      })
        .then((response) => {
          console.log(response);
          const save = show_tvShow(response.data.results);
          store.dispatch(save);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {

        });
      break;
    default:
      next(action);
  }
};
export default homeMiddleware;
