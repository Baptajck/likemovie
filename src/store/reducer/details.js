// == Initial State
const initialState = {
  detailsMovies: [],
  detailsCrews: [],
  detailsCasts: [],
  detailsVideos: [],
};

// == Types
export const GET_FETCH_MOVIE = 'GET_FETCH_MOVIE';
const SHOW_FETCH_MOVIE = 'SHOW_FETCH_MOVIE';

export const GET_FETCH_CREW = 'GET_FETCH_CREW';
const SHOW_FETCH_CREW = 'SHOW_FETCH_CREW';

export const GET_FETCH_CAST = 'GET_FETCH_CAST';
const SHOW_FETCH_CAST = 'SHOW_FETCH_CAST';

export const GET_FETCH_VIDEO = 'GET_FETCH_VIDEO';
const SHOW_FETCH_VIDEO = 'SHOW_FETCH_VIDEO';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_FETCH_MOVIE:
      return {
        ...state,
        detailsMovies: action.detailsMovies,
      };

    case SHOW_FETCH_CREW:
      return {
        ...state,
        detailsCrews: action.detailsCrews,
      };

    case SHOW_FETCH_CAST:
      return {
        ...state,
        detailsCasts: action.detailsCasts,
      };

    case SHOW_FETCH_VIDEO:
      return {
        ...state,
        detailsVideos: action.detailsVideos,
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

export const showFetchCrew = (detailsCrews) => ({
  type: SHOW_FETCH_CREW,
  detailsCrews,
});

export const getFetchCrew = (id) => ({
  type: GET_FETCH_CREW,
  id,
});

export const showFetchCast = (detailsCasts) => ({
  type: SHOW_FETCH_CAST,
  detailsCasts,
});

export const getFetchCast = (id) => ({
  type: GET_FETCH_CAST,
  id,
});

export const showFetchVideo = (detailsVideos) => ({
  type: SHOW_FETCH_VIDEO,
  detailsVideos,
});

export const getFetchVideo = (id) => ({
  type: GET_FETCH_VIDEO,
  id,
});

// == Selectors


// == Export
export default reducer;
