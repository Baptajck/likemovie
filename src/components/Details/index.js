/* eslint-disable react/prefer-stateless-function */
/* eslint-disable camelcase */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Mobile from 'src/components/Details/mobile';
import Desktop from 'src/components/Details/desktop';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

// import * as Actions from 'src/store/middleware/detailsMiddleware';

export default class Details extends React.Component {
  componentDidMount() {
    const { getFetchMovie } = this.props;
    getFetchMovie(512200);
  }

  render() {
    console.log('Je suis les props', this.props);
    // console.log(this.props.detailsMovies.title);
    // console.log('Je suis le state', this.state);

    const { detailsMovies } = this.props;
    return (
      <div>
        <Mobile />
        <Desktop {...detailsMovies} />
        <footer>
          <div className="footer">
            <p className="text_footer">Tu trouves pas ?? Va là dessus : <NavLink to="/search" className="link_footer">Rechercher</NavLink> &copy; - 2019</p>
          </div>
        </footer>
      </div>
    );
  }
}


Details.propTypes = {
  getFetchMovie: PropTypes.func.isRequired,
};
