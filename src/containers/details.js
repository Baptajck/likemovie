/* eslint-disable camelcase */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Details from 'src/components/Details';

// Action Creators
import {
  getFetchMovie,
  getFetchCrew,
  getFetchCast,
  getFetchVideo,
} from 'src/store/reducer/details';


/* === State (données) === */

const mapStateToProps = (state) => {
  // console.log('Je suis container', ownProps);
  return {
    detailsMovies: state.details.detailsMovies,
    detailsCrews: state.details.detailsCrews,
    detailsCasts: state.details.detailsCasts,
    detailsVideos: state.details.detailsVideos,
  };
};

/* === Actions === */

const mapDispatchToProps = (dispatch) => ({
  getFetchCrew: (id) => {
    dispatch(getFetchCrew(id));
  },
  getFetchMovie: (id) => {
    dispatch(getFetchMovie(id));
  },
  getFetchCast: (id) => {
    dispatch(getFetchCast(id));
  },
  getFetchVideo: (id) => {
    dispatch(getFetchVideo(id));
  },
});

// Container
const DetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details);

// == Export
export default DetailsContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/
