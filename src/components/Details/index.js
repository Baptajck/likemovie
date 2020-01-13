import React from 'react';
import YouTube from 'react-youtube';
import { NavLink } from 'react-router-dom';

import './details.scss';

const Details = () => {
  const opts = {
    height: '183',
    width: '300',
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <>
      { /* Version Mobile */ }
      <section className="mobile_layout_details">
        <header className="mobile_header">
          <div className="mobile_header_background">
            <div className="mobile_header_cover">
              <p className="mobile_header_rating">78%</p>
              <a type="button" className="mobile_header_trailer">Regarder le trailer</a>
            </div>
          </div>
          <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/w1fqnG3W2xqCPTvjdPJTcfPMYH1.jpg" className="mobile_header_image" alt="movie_poster" />
          <h1 className="mobile_header_title">
            Star Wars: Le poster moche de la force
          </h1>
        </header>
        <main className="mobile">
          { /* Synopsis */ }
          <div className="mobile_synopsis animated fadeInLeft delay-1s">
            <h2 className="mobile_synopsis_title">Synopsis</h2>
            <p className="mobile_synopsis_text">La conclusion de la saga Skywalker. De nouvelles légendes vont naître dans cette bataille épique pour la liberté.</p>
          </div>
          { /* Informations */ }
          <div className="mobile_info animated fadeInRight delay-2s">
            <h2 className="mobile_info_title">Informations</h2>
            <div className="mobile_info_stats">
              <div className="mobile_info_column">
                <h3 className="mobile_info_subtitle">Statut :</h3>
                <h3 className="mobile_info_subtitle">Durée :</h3>
                <h3 className="mobile_info_subtitle">Budget :</h3>
                <h3 className="mobile_info_subtitle">Recette :</h3>
                <h3 className="mobile_info_subtitle">Genre :</h3>
              </div>
              <div className="mobile_info_column_left">
                <p className="mobile_info_text">Sorti</p>
                <p className="mobile_info_text">2h21</p>
                <p className="mobile_info_text">$250,000,000.00</p>
                <p className="mobile_info_text">$704,330,816.00</p>
                <div className="tags">
                  <p className="mobile_info_text">Action</p>
                  <p className="mobile_info_text">Aventure</p>
                  <p className="mobile_info_text">Science-fiction</p>
                </div>
              </div>
            </div>
          </div>
          { /* Casting */ }
          <div className="mobile_casting_bar animated fadeInLeft delay-3s">
            <h2 className="mobile_casting_title">Casting</h2>
            <div className="mobile_casting">
              <img src="https://image.tmdb.org/t/p/w138_and_h175_face/siYuX9LyL3Y8ngxNgurPtfMIWsQ.jpg" className="mobile_casting_image" alt="actor_image_Rey" />
              <h2 className="mobile_casting_actor">Daisy Ridley</h2>
              <h3 className="mobile_casting_name">Rey</h3>
            </div>
            <div className="mobile_casting">
              <img src="https://image.tmdb.org/t/p/w138_and_h175_face/idr2vphzhidyMGOp0ky6RqUMah8.jpg" className="mobile_casting_image" alt="actor_image_Finn" />
              <h2 className="mobile_casting_actor">John Boyega</h2>
              <h3 className="mobile_casting_name">Finn</h3>
            </div>
            <div className="mobile_casting">
              <img src="https://image.tmdb.org/t/p/w138_and_h175_face/cY6ail3ebXDx9FCoZMgVGAbmBus.jpg" className="mobile_casting_image" alt="actor_image_Poe" />
              <h2 className="mobile_casting_actor">Oscar Isaac</h2>
              <h3 className="mobile_casting_name">Poe Dameron</h3>
            </div>
            <div className="mobile_casting">
              <img src="https://image.tmdb.org/t/p/w138_and_h175_face/rsjwgpV2OukxOJ9HEiEyf4qu1vR.jpg" className="mobile_casting_image" alt="actor_image_Kylo Ren" />
              <h2 className="mobile_casting_actor">Adam Driver</h2>
              <h3 className="mobile_casting_name">Kylo Ren</h3>
            </div>
            <div className="mobile_casting">
              <img src="https://image.tmdb.org/t/p/w138_and_h175_face/rfJtncHewKVnHjqpIZvjn24ESeC.jpg" className="mobile_casting_image" alt="actor_image_Carrie Fisher" />
              <h2 className="mobile_casting_actor">Carrie Fisher</h2>
              <h3 className="mobile_casting_name">General Leia Organa</h3>
            </div>
          </div>
          { /* Trailer */ }
          <div className="mobile_video animated fadeInRight delay-4s">
            <h2 className="mobile_video_title">Bande-annonce</h2>
            <div className="mobile_video_link">
              <YouTube
                videoId="bw1lOJ776y8"
                opts={opts}
              />
            </div>
          </div>
        </main>
      </section>
      <footer>
        <div className="footer">
          <p className="text_footer">Tu trouves pas ?? Va là dessus : <NavLink to="/search" className="link_footer">Rechercher</NavLink> &copy; - 2019</p>
        </div>
      </footer>
      { /* Version Desktop */ }
    </>
  );
};

export default Details;
