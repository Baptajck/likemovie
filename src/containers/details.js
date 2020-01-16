// /* eslint-disable camelcase */
// // == Import : npm
// import { connect } from 'react-redux';

// // == Import : local
// import Details from 'src/components/Details';

// // Action Creators
// import { get_details_movie } from 'src/store/reducer/details';

// /* === State (données) === */

// const mapStateToProps = (state) => ({
//   detailsMovies: state.details.detailsMovies,
// });

// /* === Actions === */

// const mapDispatchToProps = (dispatch) => ({
//   get_details_movie: () => {
//     dispatch(get_details_movie());
//   },
// });

// // Container
// const HomeContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Details);

// // == Export
// export default HomeContainer;

// /* = export à la volée
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Example);
// */
