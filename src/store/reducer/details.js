/* eslint-disable camelcase */
// == Initial State
const initialState = {
  detailsMovies: [],
};

// == Types
export const GET_FETCH_MOVIE = 'GET_FETCH_MOVIE';
const SHOW_FETCH_MOVIE = 'SHOW_FETCH_MOVIE';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_FETCH_MOVIE:
      return {
        ...state,
        detailsMovies: action.detailsMovies,
      };

    default:
      return state;
  }
};

// == Action Creators
export const showFetchMovie = (detailsMovies) => ({
  type: SHOW_FETCH_MOVIE,
  detailsMovies,
});

export const getFetchMovie = (id) => ({
  type: GET_FETCH_MOVIE,
  id,
});


// == Selectors


// == Export
export default reducer;
