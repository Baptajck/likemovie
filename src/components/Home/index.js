import React from 'react';

import './home.scss';
import movies from '../../data/movie';
import shows from '../../data/show';

const Home = () => (
  <div className="home">
    <div className="cover_movies">
      <ul className="cover_movies_list">
        {
          movies.map((movie) => <li key={movie.id}><a className="cover_movies_list_link" href="">{movie.title}</a><img alt="cover" title="{movie.title}" src={movie.src} /></li>)
        }
      </ul>
    </div>
    <div className="cover_shows">
      <ul className="cover_shows_list">
        {
          shows.map((show) => <li key={show.id}><a className="cover_shows_list_link" href="">{show.title}</a><img alt="cover" title="{show.title}" src={show.src} /></li>)
        }
      </ul>
    </div>
  </div>
);

export default Home;
