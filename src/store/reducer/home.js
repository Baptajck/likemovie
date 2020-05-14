/* eslint-disable camelcase */
// == Initial State
const initialState = {
  films: [],
  tvShows: [],
};

// == Types
export const GET_FILM = 'GET_FILM';
const SHOW_FILM = 'SHOW_FILM';

export const GET_TVSHOW = 'GET_TVSHOW';
const SHOW_TVSHOW = 'SHOW_TVSHOW';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_FILM:
      return {
        ...state,
        films: action.films,
      };

    case SHOW_TVSHOW:
      return {
        ...state,
        tvShows: action.tvShows,
      };
    default:
      return state;
  }
};

// == Action Creators
export const show_film = (films) => ({
  type: SHOW_FILM,
  films,
});

export const get_film = () => ({
  type: GET_FILM,
});

export const show_tvShow = (tvShows) => ({
  type: SHOW_TVSHOW,
  tvShows,
});

export const get_tvShow = () => ({
  type: GET_TVSHOW,
});

// == Selectors


// == Export
export default reducer;
