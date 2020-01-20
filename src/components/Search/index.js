/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import './search.scss';


class Search extends React.Component {
  componentDidMount() {
    const {
      fetchSearchTV, fetchSearchMovie,
    } = this.props;
    fetchSearchTV();
    fetchSearchMovie();
  }

  //  componentWillUnmount = (val) => {
  //    const {
  //      getFetchSearchTVs, getFetchSearchMovies,
  //    } = this.props;
  //    getFetchSearchTVs(val);
  //    getFetchSearchMovies(val);
  //  };

  onChangeHandler = (event) => {
    const { value } = event.target;
    const { changeValue, fetchSearchTV, fetchSearchMovie } = this.props;
    fetchSearchMovie(value);
    fetchSearchTV(value);
    changeValue(value);
  };


  render() {
    console.log(this.changeValue);
    const { changeValues } = this.props;
    return (
      <div className="container_search">
        <div className="choice">
          <h1 className="choice_title">Rechercher ...</h1>
          <li className="choice_list">
            <input type="radio" id="movie-radio" name="selector" />
            <label htmlFor="movie">un film</label>
            <input type="radio" id="tvShow-radio" name="selector" />
            <label className="test" htmlFor="tvShow">une série</label>
          </li>
          <div className="search">
            <div id="movie" className="search_movie">
              <h1 className="search_title">Rechercher un film</h1>
              <input value={changeValues} onChange={this.onChangeHandler} className="search_input" type="text" placeholder="Rechercher un film...." />
            </div>
            <div id="tvShow" className="search_tvshow">
              <h1 className="search_title">Rechercher une série</h1>
              <input value={changeValues} onChange={this.onChangeHandler} className="search_input" type="text" placeholder="Rechercher une série...." />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;

Search.propTypes = {
  fetchSearchTV: PropTypes.func.isRequired,
  fetchSearchMovie: PropTypes.func.isRequired,
  changeValue: PropTypes.func.isRequired,
  changeValues: PropTypes.string.isRequired,
};
