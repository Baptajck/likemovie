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

export const FETCH_CREW = 'FETCH_CREW_TV';
const SHOW_FETCH_CREW_TV = 'SHOW_FETCH_CREW_TV';

export const FETCH_CAST = 'FETCH_CAST_TV';
const SHOW_FETCH_CAST_TV = 'SHOW_FETCH_CAST_TV';

export const FETCH_VIDEO = 'FETCH_VIDEO_TV';
const SHOW_FETCH_VIDEO_TV = 'SHOW_FETCH_VIDEO_TV';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_FETCH_TV:
      return {
        ...state,
        tvShows: action.tvShows,
      };

    case SHOW_FETCH_CREW_TV:
      return {
        ...state,
        tvCrews: action.tvCrews,
      };

    case SHOW_FETCH_CAST_TV:
      return {
        ...state,
        tvCasts: action.tvCasts,
      };

    case SHOW_FETCH_VIDEO_TV:
      return {
        ...state,
        tvVideos: action.tvVideos,
      };

    default:
      return state;
  }
};

// == Action Creators
export const showFetchTV = (tvShows) => ({
  type: SHOW_FETCH_TV,
  tvShows,
});

export const fetchTv = (id) => ({
  type: FETCH_TV,
  id,
});

export const showFetchCrewTV = (tvCrews) => ({
  type: SHOW_FETCH_CREW_TV,
  tvCrews,
});

export const fetchCrew = (id) => ({
  type: FETCH_CREW,
  id,
});

export const showFetchCastTV = (tvCasts) => ({
  type: SHOW_FETCH_CAST_TV,
  tvCasts,
});

export const fetchCast = (id) => ({
  type: FETCH_CAST,
  id,
});

export const showFetchVideoTV = (tvVideos) => ({
  type: SHOW_FETCH_VIDEO_TV,
  tvVideos,
});

export const fetchVideo = (id) => ({
  type: FETCH_VIDEO,
  id,
});

// == Selectors


// == Export
export default reducer;
