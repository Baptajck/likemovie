/* eslint-disable react/prefer-stateless-function */
/* eslint-disable camelcase */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Mobile from 'src/components/Details/mobile';
import Desktop from 'src/components/Details/desktop';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from 'src/store/middleware/detailsMiddleware';

export class Details extends React.Component {
  componentDidMount() {
    const { fetchMovie } = this.props.actions;
    fetchMovie();
  }

  render() {
    console.log('Je suis les props', this.props);
    console.log('Je suis le state', this.state);
    console.log('Je suis la function', this.fetchMovie(200));
    return (
      <div>
        <Mobile />
        <Desktop />
        <footer>
          <div className="footer">
            <p className="text_footer">Tu trouves pas ?? Va là dessus : <NavLink to="/search" className="link_footer">Rechercher</NavLink> &copy; - 2019</p>
          </div>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  detailsMovies: state.details.detailsMovies,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details);

Details.propTypes = {
  fetchMovie: PropTypes.func.isRequired,
};



// test = (id) => {
//     axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
//       params: {
//         // id,
//         api_key: 'd21d6f9a11307550b8fe09b60f3ee8ef',
//         language: 'fr-FR',
//         iso_3166_1: 'FR',
//         english_name: 'France',
//         page: 1,
//       },
//     })
//       .then((response) => {
//         console.log('Je suis axios', response);
//         // const save = show_details_movie(response.data);
//         const persons = response.data;
//         this.setState({ persons });
//         // store.dispatch(save);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };
