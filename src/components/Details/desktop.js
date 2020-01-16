/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import { IoIosArrowRoundDown } from 'react-icons/io';

import './details_desktop.scss';

const DesktopDetails = ({
  title,
  backdrop_path,
  id,
  overview,
  poster_path,
  budget,
  vote_average }) => {
  const optsDesktop = {
    height: '366',
    width: '600',
    playerVars: {
      autoplay: 0,
    },
  };
  console.log('je suis les props de desktop', title, backdrop_path, id, overview, poster_path, vote_average);
  return (
    <div className="desktop_details">
      <div className="desktop_details_background_effect">
        <div className="desktop_details_custom_bg">
          <div className="desktop_details_presentation">
            <section className="desktop_details_presentation_infos">
              <div className="desktop_details_column_poster">
                <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster_path}`} className="desktop_header_image" alt="movie_poster" />
              </div>
              <div className="desktop_details_column_details">
                <h1 className="desktop_header_title">{title}</h1>
                <a className="desktop_header_trailer_button" href="#trailer" title="Regarder la bande-annonce">
                  <span className="details_arrow"><IoIosArrowRoundDown /></span>
                &nbsp; Voir la bande-annonce &nbsp;
                  <img className="desktop_header_trailer" src="https://img.icons8.com/color/48/000000/youtube-play.png" alt="" />
                </a>
                <div className="desktop_rating_background">
                  <h4 className="desktop_rating">{vote_average}</h4>
                </div>
                <h2 className="desktop_synopsis_title">Synopsis</h2>
                <p className="desktop_synopsis_text">{overview}</p>
                <h2 className="desktop_info_title">Informations</h2>
                <div className="desktop_info">
                  <div className="desktop_info_stats">
                    <div className="desktop_info_column">
                      <h3 className="desktop_info_subtitle">Statut :</h3>
                      <h3 className="desktop_info_subtitle">Durée :</h3>
                      <h3 className="desktop_info_subtitle">Budget :</h3>
                      <h3 className="desktop_info_subtitle">Recette :</h3>
                      <h3 className="desktop_info_subtitle">Genre :</h3>
                    </div>
                    <div className="desktop_info_column_left">
                      <p className="desktop_info_text">Sorti</p>
                      <p className="desktop_info_text">2h21</p>
                      <p className="desktop_info_text">${budget}</p>
                      <p className="desktop_info_text">$704,330,816.00</p>
                      <div className="tags">
                        <p className="desktop_info_text">Action</p>
                        <p className="desktop_info_text">Aventure</p>
                        <p className="desktop_info_text">Science-fiction</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      {/* Producteurs */}
      <h2 className="desktop_casting_title">Equipe technique</h2>
      <div className="desktop_casting_section">
        <div className="desktop_casting">
          <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/h0o12c399M5hTKWl0qdgwhaddNt.jpg" className="desktop_casting_image" alt="actor_image_Abrams" />
          <h2 className="desktop_casting_actor">J.J. Abrams</h2>
          <h3 className="desktop_casting_name">Screenplay, Director, Story</h3>
        </div>
        <div className="desktop_casting">
          <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/oljJKka3NTgiQhqhDs1SaCtcWMW.jpg" className="desktop_casting_image" alt="actor_image_Terrio" />
          <h2 className="desktop_casting_actor">Chris Terrio</h2>
          <h3 className="desktop_casting_name">Screenplay, Story</h3>
        </div>
        <div className="desktop_casting">
          <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/8qxin8urtFE0NqaZNFWOuV537bH.jpg" className="desktop_casting_image" alt="actor_image_Lucas" />
          <h2 className="desktop_casting_actor">George Lucas</h2>
          <h3 className="desktop_casting_name">Characters</h3>
        </div>
        <div className="desktop_casting">
          <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/k1VQLCP4RAAkuXZ5HWrdL1NQnWR.jpg" className="desktop_casting_image" alt="actor_image_Connolly" />
          <h2 className="desktop_casting_actor">Derek Connolly</h2>
          <h3 className="desktop_casting_name">Story</h3>
        </div>
        <div className="desktop_casting">
          <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/i0HBClPMPKn3aq8QeQqyThS67EK.jpg" className="desktop_casting_image" alt="actor_image_Carrie Fisher" />
          <h2 className="desktop_casting_actor">Colin Trevorrow</h2>
          <h3 className="desktop_casting_name">Story</h3>
        </div>
      </div>
      <hr className="details_seperation" />
      {/* Acteurs */}
      <h2 className="desktop_casting_title">Acteurs / Actrices</h2>
      <div className="desktop_casting_section">
        <div className="desktop_casting">
          <img src="https://image.tmdb.org/t/p/w138_and_h175_face/siYuX9LyL3Y8ngxNgurPtfMIWsQ.jpg" className="desktop_casting_image" alt="actor_image_Rey" />
          <h2 className="desktop_casting_actor">Daisy Ridley</h2>
          <h3 className="desktop_casting_name">Rey</h3>
        </div>
        <div className="desktop_casting">
          <img src="https://image.tmdb.org/t/p/w138_and_h175_face/idr2vphzhidyMGOp0ky6RqUMah8.jpg" className="desktop_casting_image" alt="actor_image_Finn" />
          <h2 className="desktop_casting_actor">John Boyega</h2>
          <h3 className="desktop_casting_name">Finn</h3>
        </div>
        <div className="desktop_casting">
          <img src="https://image.tmdb.org/t/p/w138_and_h175_face/cY6ail3ebXDx9FCoZMgVGAbmBus.jpg" className="desktop_casting_image" alt="actor_image_Poe" />
          <h2 className="desktop_casting_actor">Oscar Isaac</h2>
          <h3 className="desktop_casting_name">Poe Dameron</h3>
        </div>
        <div className="desktop_casting">
          <img src="https://image.tmdb.org/t/p/w138_and_h175_face/rsjwgpV2OukxOJ9HEiEyf4qu1vR.jpg" className="desktop_casting_image" alt="actor_image_Kylo Ren" />
          <h2 className="desktop_casting_actor">Adam Driver</h2>
          <h3 className="desktop_casting_name">Kylo Ren</h3>
        </div>
        <div className="desktop_casting">
          <img src="https://image.tmdb.org/t/p/w138_and_h175_face/rfJtncHewKVnHjqpIZvjn24ESeC.jpg" className="desktop_casting_image" alt="actor_image_Carrie Fisher" />
          <h2 className="desktop_casting_actor">Carrie Fisher</h2>
          <h3 className="desktop_casting_name">General Leia Organa</h3>
        </div>
      </div>
      <hr className="details_seperation" />
      <div className="desktop_video" id="trailer">
        <h2 className="desktop_video_title">Bande-annonce</h2>
        <div className="desktop_video_link">
          <YouTube
            videoId="bw1lOJ776y8"
            opts={optsDesktop}
          />
        </div>
      </div>
    </div>
  );
};

DesktopDetails.propTypes = {
  title: PropTypes.string.isRequired,
  backdrop_path: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  budget: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
};

export default DesktopDetails;
