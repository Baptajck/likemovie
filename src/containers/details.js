/* eslint-disable camelcase */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Details from 'src/components/Details';

// Action Creators
import { getFetchMovie } from 'src/store/reducer/details';

/* === State (données) === */

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    detailsMovies: state.details.detailsMovies,
  };
};

/* === Actions === */

const mapDispatchToProps = (dispatch) => ({
  getFetchMovie: (id) => {
    dispatch(getFetchMovie(id));
  },
});

// Container
const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details);

// == Export
export default HomeContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/
