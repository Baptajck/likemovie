import React from 'react';
import YouTube from 'react-youtube';
import { IoIosArrowRoundDown } from 'react-icons/io';

import './details_mobile.scss';

const MobileDetails = () => {
  const optsMobile = {
    height: '183',
    width: '300',
    playerVars: {
      autoplay: 0,
    },
  };

  const optsIpad = {
    height: '366',
    width: '550',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <section className="mobile_layout_details">
      <header className="mobile_header">
        <div className="mobile_header_background">
          <div className="mobile_header_cover"> </div>
        </div>
        <div className="mobile_header_image_wrapper">
          <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/db32LaOibwEliAmSL2jjDF6oDdj.jpg" className="mobile_header_image" alt="movie_poster" />
        </div>
        <div className="mobile_rating_background">
          <h4 className="mobile_rating">3</h4>
        </div>
        <a className="mobile_header_trailer_button" href="#trailer" title="Regarder la bande-annonce">
          <span className="details_arrow"><IoIosArrowRoundDown /></span>
          &nbsp; Voir la bande-annonce &nbsp;
          <img className="mobile_header_trailer" src="https://img.icons8.com/color/48/000000/youtube-play.png" alt="" />
        </a>
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
        {/* Producteurs */}
        <div className="mobile_casting_bar animated fadeInLeft delay-3s">
          <h2 className="mobile_casting_title">Equipe technique</h2>
          <div className="mobile_casting">
            <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/h0o12c399M5hTKWl0qdgwhaddNt.jpg" className="mobile_casting_image" alt="actor_image_Abrams" />
            <h2 className="mobile_casting_actor">J.J. Abrams</h2>
            <h3 className="mobile_casting_name">Screenplay, Director, Story</h3>
          </div>
          <div className="mobile_casting">
            <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/oljJKka3NTgiQhqhDs1SaCtcWMW.jpg" className="mobile_casting_image" alt="actor_image_Terrio" />
            <h2 className="mobile_casting_actor">Chris Terrio</h2>
            <h3 className="mobile_casting_name">Screenplay, Story</h3>
          </div>
          <div className="mobile_casting">
            <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/8qxin8urtFE0NqaZNFWOuV537bH.jpg" className="mobile_casting_image" alt="actor_image_Lucas" />
            <h2 className="mobile_casting_actor">George Lucas</h2>
            <h3 className="mobile_casting_name">Characters</h3>
          </div>
          <div className="mobile_casting">
            <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/k1VQLCP4RAAkuXZ5HWrdL1NQnWR.jpg" className="mobile_casting_image" alt="actor_image_Connolly" />
            <h2 className="mobile_casting_actor">Derek Connolly</h2>
            <h3 className="mobile_casting_name">Story</h3>
          </div>
          <div className="mobile_casting">
            <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/i0HBClPMPKn3aq8QeQqyThS67EK.jpg" className="mobile_casting_image" alt="actor_image_Carrie Fisher" />
            <h2 className="mobile_casting_actor">Colin Trevorrow</h2>
            <h3 className="mobile_casting_name">Story</h3>
          </div>
        </div>
        { /* Acteurs */ }
        <div className="mobile_casting_bar animated fadeInRight delay-4s">
          <h2 className="mobile_info_title">Acteurs / Actrices</h2>
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
        <div className="mobile_video animated fadeInLeft delay-5s">
          <h2 className="mobile_casting_title" id="trailer">Bande-annonce</h2>
          <div className="mobile_video_link">
            <YouTube
              videoId="bw1lOJ776y8"
              opts={optsMobile}
            />
          </div>
          <div className="ipad_video_link">
            <YouTube
              videoId="bw1lOJ776y8"
              opts={optsIpad}
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default MobileDetails;
