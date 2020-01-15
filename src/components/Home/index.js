/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './home.scss';

class Home extends React.Component {
  componentDidMount() {
    const { get_film, get_tvShow } = this.props;
    get_film();
    get_tvShow();
  }

  render() {
    const { films, tvShows } = this.props;
    return (
      <div>
        <div className="home">
          {/* SECTION MOVIES */}
          <div className="title_category_movies">
            <h1 className="title_category">Films</h1>
            <span className="title_category_comment">(en salle)</span>
          </div>
          <div className="section">
            <ul className="cover_movies">
              <ul className="cover_movies_list">
                {
                  films.map(({ id, title, poster_path }) => (
                    <div key={id} className="container_movie">
                      <li className="cover_list">
                        <NavLink to="/details">
                          <img className="cover_img" alt="cover" title={title} src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
                          <h2 className="title_image">{title}</h2>
                        </NavLink>
                      </li>
                    </div>
                  ))
                }
              </ul>
            </ul>
          </div>
          {/* SECTION SHOWS */}
          <div className="title_category_shows">
            <h1 className="title_category">Séries</h1>
            <span className="title_category_comment">(populaires)</span>
          </div>
          <div className="section">
            <div className="cover_shows">
              <ul className="cover_shows_list">
                {
                  tvShows.map(({ id, name, poster_path }) => (
                    <div key={id} className="container_movie">
                      <NavLink to="/details">
                        <li className="cover_list">
                          <img className="cover_img" alt="cover" title={name} src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
                          <h2 className="title_image">{name}</h2>
                        </li>
                      </NavLink>
                    </div>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
        <footer>
          <div className="footer">
            <p className="text_footer">Tu trouves pas ?? Va là dessus : <a href="#" className="link_footer">Rechercher</a> &copy; - 2020</p>
          </div>
        </footer>
      </div>
    );
  }
}

Home.propTypes = {
  get_film: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      poster_path: PropTypes.string,
    }),
  ).isRequired,

  get_tvShow: PropTypes.func.isRequired,
  tvShows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      poster_path: PropTypes.string,
    }),
  ).isRequired,
};

export default Home;
