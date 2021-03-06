// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Search from 'src/components/Search';

// Action Creators
import {
  fetchSearchMovie,
  fetchSearchTV,
  changeValue,
  changePages,
} from 'src/store/reducer/search';


/* === State (données) === */

const mapStateToProps = (state) => {
  // console.log('Je suis container', state);
  return {
    searchMovies: state.search.searchMovies,
    searchTVs: state.search.searchTVs,
    changeValues: state.search.changeValue,
    error: state.search.error,
    pages: state.search.pages,
  };
};

/* === Actions === */

const mapDispatchToProps = (dispatch) => ({
  fetchSearchMovie: (val) => {
    dispatch(fetchSearchMovie(val));
  },
  fetchSearchTV: (val) => {
    dispatch(fetchSearchTV(val));
  },
  changeValue: (value) => {
    dispatch(changeValue(value));
  },
  changePages: () => {
    dispatch(changePages());
  },
});

// Container
const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);

// == Export
export default SearchContainer;
