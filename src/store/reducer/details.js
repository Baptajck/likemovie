/* eslint-disable camelcase */
import type from 'src/store/types/type';
// == Initial State
const initialState = {
  detailsMovies: [],
};

// == Types
// export const GET_FETCH_MOVIE = 'GET_FETCH_MOVIE';
// const FETCH_MOVIE = 'FETCH_MOVIE';

// == Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_MOVIE:
      return {
        ...state,
        detailsMovies: action.detailsMovies,
      };

    default:
      return state;
  }
};

// == Action Creators
// export const show_details_movie = (detailsMovies) => ({
//   type: FETCH_MOVIE,
//   detailsMovies,
// });

// export const get_details_movie = () => ({
//   type: GET_FETCH_MOVIE,
// });


// == Selectors


// == Export
export default reducer;
