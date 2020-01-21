/* eslint-disable camelcase */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import TVShow from 'src/components/TVShow';

// Action Creators
import {
  fetchTv,
  fetchGenresTv,
  fetchCrew,
  fetchCast,
  fetchVideo,
} from 'src/store/reducer/tv';


/* === State (données) === */

const mapStateToProps = (state) => {
  // console.log('Je suis container', state);
  return {
    tvShows: state.tv.tvShows,
    tvGenres: state.tv.tvGenres,
    tvCrews: state.tv.tvCrews,
    tvCasts: state.tv.tvCasts,
    tvVideos: state.tv.tvVideos,
  };
};

/* === Actions === */

const mapDispatchToProps = (dispatch) => ({
  fetchTv: (id) => {
    dispatch(fetchTv(id));
  },
  fetchGenresTv: (id) => {
    dispatch(fetchGenresTv(id));
  },
  fetchCrew: (id) => {
    dispatch(fetchCrew(id));
  },
  fetchCast: (id) => {
    dispatch(fetchCast(id));
  },
  fetchVideo: (id) => {
    dispatch(fetchVideo(id));
  },
});

// Container
const TVShowContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TVShow);

// == Export
export default TVShowContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/
