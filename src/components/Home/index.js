/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './home.scss';
import { getSlugByName, colorRating, truncStr } from 'src/utils/selectors';

class Home extends React.Component {
  componentDidMount() {
    const { get_film, get_tvShow } = this.props;
    setTimeout(() => {
      get_film();
      get_tvShow();
    }, 500);
  }

  componentWillUnmount() {
    const { get_film, get_tvShow } = this.props;
    get_film();
    get_tvShow();
  }

  render() {
    const { films, tvShows } = this.props;
    document.title = 'Likemovie';
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
                  films.filter((c) => c.title !== '' && c.poster_path !== null)
                    .map(({
                      id, title, poster_path, vote_average,
                    }) => (
                      <div key={id} id={`movie-${id}`} className="container_movie">
                        <li className="cover_list">
                          <NavLink to={`/movie/${id}/${getSlugByName(title)}`}>
                            <img className="cover_img" alt="cover" title={title} src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
                            <h2 className="title_image">{truncStr(title, 30)}</h2>
                          </NavLink>
                          {/* <div className="home_rating_background home_rating_background_medium home_rating_background_bad"> */}
                          <div className={`home_rating_background ${colorRating(vote_average)}`}>
                            <h4 className="home_rating">{Math.round((vote_average / 10) * 100)}<sup>%</sup></h4>
                          </div>
                        </li>
                      </div>
                    ))
                }
              </ul>
            </ul>
          </div>
          <hr className="home_seperation" />
          {/* SECTION SHOWS */}
          <div className="title_category_shows">
            <h1 className="title_category">Séries</h1>
            <span className="title_category_comment">(populaires)</span>
          </div>
          <div className="section">
            <div className="cover_shows">
              <ul className="cover_shows_list">
                {
                  tvShows.filter((c) => c.name !== '' && c.poster_path !== null)
                    .map(({
                      id, name, poster_path, vote_average,
                    }) => (
                      <div key={id} className="container_movie">
                        <li className="cover_list">
                          <NavLink to={`/tv/${id}/${getSlugByName(name)}`}>
                            <img className="cover_img" alt="cover" title={name} src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
                            <h2 className="title_image">{truncStr(name, 30)}</h2>
                          </NavLink>
                          <div className={`home_rating_background ${colorRating(vote_average)}`}>
                            <h4 className="home_rating">{Math.round((vote_average / 10) * 100)}<sup>%</sup></h4>
                          </div>
                        </li>
                      </div>
                    ))
                }
              </ul>
            </div>
          </div>
        </div>
        <footer>
          <div className="footer">
            <p className="text_footer">Tu trouves pas ?? Va là dessus : <NavLink to="/search" className="link_footer">Rechercher</NavLink> &copy; - 2020</p>
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
      name: PropTypes.string,
      poster_path: PropTypes.string,
    }),
  ).isRequired,
};

export default Home;
