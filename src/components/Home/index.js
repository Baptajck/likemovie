import React from 'react';

import './home.scss';
import movies from '../../data/movie';
import shows from '../../data/show';

const Home = () => (
  <div className="home">
    <div className="title">
      <h1 className="title_category">Films</h1>
    </div>
    <div className="cover_movies">
      <ul className="cover_movies_list">
        {
          movies.map((movie) => <li key={movie.id} className="cover_list"><img className="cover_img" alt="cover" title="{movie.title}" src={movie.src} /></li>)
        }
      </ul>
    </div>
    <div className="title">
      <h1 className="title_category">Séries</h1>
    </div>
    <div className="cover_shows">
      <ul className="cover_shows_list">
        {
          shows.map((show) => <li key={show.id} className="cover_list"><img className="cover_img" alt="cover" title="{show.title}" src={show.src} /></li>)
        }
      </ul>
    </div>
  </div>
);

export default Home;
