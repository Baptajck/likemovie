// == Initial State
const initialState = {
  tvShows: [],
  tvCrews: [],
  tvCasts: [],
  tvVideos: [],
};

// == Types
export const FETCH_TV = 'FETCH_TV';
const SHOW_FETCH_TV = 'SHOW_FETCH_TV';

export const FETCH_CREW = 'FETCH_CREW';
const SHOW_FETCH_CREW = 'SHOW_FETCH_CREW';

export const FETCH_CAST = 'FETCH_CAST';
const SHOW_FETCH_CAST = 'SHOW_FETCH_CAST';

export const FETCH_VIDEO = 'FETCH_VIDEO';
const SHOW_FETCH_VIDEO = 'SHOW_FETCH_VIDEO';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_FETCH_TV:
      return {
        ...state,
        tvShows: action.tvShows,
      };

    case SHOW_FETCH_CREW:
      return {
        ...state,
        tvCrews: action.tvCrews,
      };

    case SHOW_FETCH_CAST:
      return {
        ...state,
        tvCasts: action.tvCasts,
      };

    case SHOW_FETCH_VIDEO:
      return {
        ...state,
        tvVideos: action.tvVideos,
      };

    default:
      return state;
  }
};

// == Action Creators
export const showFetchTv = (tvShows) => ({
  type: SHOW_FETCH_TV,
  tvShows,
});

export const fetchTv = (id) => ({
  type: FETCH_TV,
  id,
});

export const showFetchCrew = (tvCrews) => ({
  type: SHOW_FETCH_CREW,
  tvCrews,
});

export const fetchCrew = (id) => ({
  type: FETCH_CREW,
  id,
});

export const showFetchCast = (tvCasts) => ({
  type: SHOW_FETCH_CAST,
  tvCasts,
});

export const fetchCast = (id) => ({
  type: FETCH_CAST,
  id,
});

export const showFetchVideo = (tvVideos) => ({
  type: SHOW_FETCH_VIDEO,
  tvVideos,
});

export const fetchVideo = (id) => ({
  type: FETCH_VIDEO,
  id,
});

// == Selectors


// == Export
export default reducer;
