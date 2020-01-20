// == Initial State
const initialState = {
  searchMovies: [],
  searchTVs: [],
  changeValues: '',
};

// == Types
export const FETCH_SEARCH_MOVIE = 'FETCH_SEARCH_MOVIE';
const SHOW_FETCH_SEARCH_MOVIE = 'SHOW_FETCH_SEARCH_MOVIE';

export const FETCH_SEARCH_TV = 'FETCH_SEARCH_TV';
const SHOW_FETCH_SEARCH_TV = 'SHOW_FETCH_SEARCH_TV';

const CHANGE_VALUE = 'CHANGE_VALUE';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_FETCH_SEARCH_MOVIE:
      return {
        ...state,
        searchMovies: action.searchMovies,
      };

    case SHOW_FETCH_SEARCH_TV:
      return {
        ...state,
        searchTVs: action.searchTVs,
      };

    case CHANGE_VALUE:
      return {
        ...state,
        changeValues: action.value,
      };

    default:
      return state;
  }
};

// == Action Creators
export const showFetchSearchMovie = (searchMovies) => ({
  type: SHOW_FETCH_SEARCH_MOVIE,
  searchMovies,
});

export const fetchSearchMovie = (val) => ({
  type: FETCH_SEARCH_MOVIE,
  val,
});

export const showFetchSearchTV = (searchTVs) => ({
  type: SHOW_FETCH_SEARCH_TV,
  searchTVs,
});

export const fetchSearchTV = (val) => ({
  type: FETCH_SEARCH_TV,
  val,
});

export const changeValue = (value) => ({
  type: CHANGE_VALUE,
  value, // value: value,
});

// == Selectors


// == Export
export default reducer;
