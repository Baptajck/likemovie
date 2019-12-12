import React from 'react';

import './home.scss';
import movies from '../../data/movie';
import shows from '../../data/show';

const Home = () => (
  <div className="home">
    <h1 className="title_category">Liste de films</h1>
    <div className="cover_movies">
      <ul className="cover_movies_list">
        {
          movies.map((movie) => <li key={movie.id} className="cover_list"><img className="cover_img" alt="cover" title="{movie.title}" src={movie.src} /></li>)
        }
      </ul>
    </div>
    <h1 className="title_category">Liste de séries</h1>
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
