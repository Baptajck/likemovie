/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './search.scss';
import { getSlugByName } from 'src/utils/selectors';


class Search extends React.Component {
  onChangeHandlerMovie = (event) => {
    const { value } = event.target;
    const { changeValue, fetchSearchMovie } = this.props;
    if (value.length >= 1) {
      fetchSearchMovie(value);
      changeValue(value);
    }
    else {
      fetchSearchMovie();
    }
  };

    onChangeHandlerTV = (event) => {
      const { value } = event.target;
      const { changeValue, fetchSearchTV } = this.props;
      if (value.length >= 1) {
        fetchSearchTV(value);
        changeValue(value);
      }
      else {
        fetchSearchTV();
      }
    };

    truncStr = (string, limit) => (string.length > limit
      ? `${string
        .trim()
        .substring(0, limit - 3)
        .trim()}...`
      : string);


    render() {
      const { searchMovies, searchTVs } = this.props;
      document.title = 'Rechercher | Likemovie';
      return (
        <div className="container_search">
          <div className="choice">
            {/* <h1 className="choice_title">Rechercher ...</h1>
            <li className="choice_list">
              <input type="radio" id="movie-radio" name="selector" />
              <label htmlFor="movie">un film</label>
              <input type="radio" id="tvShow-radio" name="selector" />
              <label className="test" htmlFor="tvShow">une série</label>
            </li> */}
            <div className="search">
              <div id="movie" className="search_movie">
                <h1 className="search_title">Rechercher un film</h1>
                <input onChange={this.onChangeHandlerMovie} className="search_input" type="text" placeholder="Rechercher un film...." />
              </div>

              <div id="tvShow" className="search_tvshow">
                <h1 className="search_title">Rechercher une série</h1>
                <input onChange={this.onChangeHandlerTV} className="search_input" type="text" placeholder="Rechercher une série...." />
              </div>
              <ul className="section_card">
                {/* CARD MOVIES */}
                {
                  searchMovies.filter((item) => item.title !== '' && item.title !== 'UNdefined' && item.poster_path !== null)
                    .slice(0, 20)
                    .map(({ id, title, poster_path }) => (
                      <li key={id} className="card">
                        <NavLink to={`/movie/${id}/${getSlugByName(title)}`}>
                          <img className="card_image" src={`http://image.tmdb.org/t/p/w185${poster_path}`} alt="" />
                          <h1 className="card_title">{this.truncStr(title, 20)}</h1>
                        </NavLink>
                      </li>
                    ))
                }
                {/* CARD TV */}
                {
                searchTVs.filter((item) => item.name !== '' && item.name !== 'Head Case' && item.poster_path !== null)
                  .slice(0, 20)
                  .map(({ id, name, poster_path }) => (
                    <li key={id} className="card">
                      <NavLink to={`/tv/${id}/${getSlugByName(name)}`}>
                        <img className="card_image" src={`http://image.tmdb.org/t/p/w185${poster_path}`} alt="" />
                        <h1 className="card_title">{this.truncStr(name, 20)}</h1>
                      </NavLink>
                    </li>
                  ))
                }
              </ul>
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
  // changeValues: PropTypes.string.isRequired,
};
