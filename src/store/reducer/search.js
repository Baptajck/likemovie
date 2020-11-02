// == Initial State
const initialState = {
  searchMovies: [],
  searchTVs: [],
  changeValues: '',
  error: [],
  pages: 1,
};

// == Types
export const FETCH_SEARCH_MOVIE = 'FETCH_SEARCH_MOVIE';
const SHOW_FETCH_SEARCH_MOVIE = 'SHOW_FETCH_SEARCH_MOVIE';

export const FETCH_SEARCH_TV = 'FETCH_SEARCH_TV';
const SHOW_FETCH_SEARCH_TV = 'SHOW_FETCH_SEARCH_TV';

export const SEARCH_ERROR = 'SEARCH_ERROR';
const SEARCH_ERROR_CANCEL = 'SEARCH_ERROR_CANCEL';

export const FETCH_PAGES = 'FETCH_PAGES';
const SHOW_FETCH_PAGES = 'SHOW_FETCH_PAGES';

const CHANGE_VALUE = 'CHANGE_VALUE';

const CHANGE_PAGES = 'CHANGE_PAGES';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEARCH_ERROR_CANCEL:
      return {
        ...state,
        error: [],
      };

    case SHOW_FETCH_PAGES:
      return {
        ...state,
        pages: action.pages,
      };

    case CHANGE_PAGES:
      return {
        ...state,
        pages: state.pages + 1,
      };

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
export const changePages = () => ({
  type: CHANGE_PAGES,
});

export const showFetchSearchPages = (pages) => ({
  type: SHOW_FETCH_PAGES,
  pages,
});

// export const fetchSearchPages = (val) => ({
//   type: FETCH_PAGES,
//   val,
// });

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

export const searchError = () => ({
  type: SEARCH_ERROR,
});

export const searchErrorCancel = () => ({
  type: SEARCH_ERROR_CANCEL,
});

// == Selectors


// == Export
export default reducer;
