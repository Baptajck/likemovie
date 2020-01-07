import React from 'react';

import './home.scss';
import movies from '../../data/movie';
import shows from '../../data/show';

const Home = () => (
  <>
    <div className="home">
      {/* SECTION MOVIES */}
      <div className="title_category_movies">
        <h1 className="title_category">Films</h1>
      </div>
      <div className="section">
        <div className="cover_movies">
          <ul className="cover_movies_list">
            {
              movies.map((movie) => (
                <div className="container_movie">
                  <li key={movie.id} className="cover_list">
                    <img className="cover_img" alt="cover" title={movie.title} src={movie.src} />
                    <h2 className="title_image">{movie.title}</h2>
                  </li>
                </div>
              ))
            }
          </ul>
        </div>
      </div>
      {/* SECTION SHOWS */}
      <div className="title_category_shows">
        <h1 className="title_category">Séries</h1>
      </div>
      <div className="section">
        <div className="cover_shows">
          <ul className="cover_shows_list">
            {
              shows.map((show) => (
                <div className="container_movie">
                  <li key={show.id} className="cover_list">
                    <img className="cover_img" alt="cover" title={show.title} src={show.src} />
                    <h2 className="title_image">{show.title}</h2>
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
        <p className="text_footer">Tu trouves pas ?? Va là dessus : <a href="#" className="link_footer">Rechercher</a> &copy; - 2019</p>
      </div>
    </footer>
  </>
);

export default Home;
