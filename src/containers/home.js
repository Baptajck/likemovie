/* eslint-disable camelcase */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Home from 'src/components/Home';

// Action Creators
import { get_film, get_tvShow } from 'src/store/reducer';

/* === State (données) === */

const mapStateToProps = (state) => ({
  films: state.films,
  tvShows: state.tvShows,
});

/* === Actions === */

const mapDispatchToProps = (dispatch) => ({
  get_film: () => {
    dispatch(get_film());
  },
  get_tvShow: () => {
    dispatch(get_tvShow());
  },
});

// Container
const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

// == Export
export default HomeContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/
