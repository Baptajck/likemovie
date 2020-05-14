/* eslint-disable camelcase */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Sidebar from 'src/components/Sidebar';

// Action Creators
// import {  } from 'src/store/reducer/home';

/* === State (données) === */

const mapStateToProps = (state) => ({
  test: state.sidebar.test,
});

/* === Actions === */

const mapDispatchToProps = () => ({});

// Container
const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);

// == Export
export default HomeContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/
