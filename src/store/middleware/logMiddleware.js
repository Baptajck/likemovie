// const logMiddleware = (store) => (next) => (action) => {
//   console.log('Je suis le middleware, et je laisse passer cette action: ', action);
//   next(action);
//   // // POUR EXEMPLE: Requetes avec Axios
//   // // Je dois réagir uniquement à certains types d'action
//   // switch (action.type) {
//   //   case FETCH_QQCHOSE:
//   //     axios.get(url)
//   //       .then(response => {
//   //         // Ici tu sais que tu as obtenu avec succès ta réponse
//   //         // Tu peux la récupérer dans response.data
//   //         const { data } = response.
//   //         // Il faut ensuite informer le reducer des nouvelles données reçues
//   //         store.dispatch(receivedQqchose(data));
//   //       })
//   //       .catch()
//   //   default:
//   //      next(action);
//   // }
// };

// export default logMiddleware;


// function getFetchMovie(store, id) {
// try {
// axios.defaults.withCredentials = true;
// const response = axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=d21d6f9a11307550b8fe09b60f3ee8ef&language=fr-FR`)
//   console.log('Je suis response', response);
//   const save = showFetchMovie(response.data);
//   store.dispatch(save);
// }
// catch (err) {
//   console.error(err);
// }
