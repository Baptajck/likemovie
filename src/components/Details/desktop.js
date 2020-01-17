/* eslint-disable react/prefer-stateless-function */
/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';


import './details_desktop.scss';

const DesktopDetails = (props) => {
  const {
    title,
    // backdrop_path,
    // id,
    overview,
    poster_path,
    budget,
    vote_average,
    release_date,
    runtime,
    revenue,
    detailsVideos,
    detailsCrews,
    detailsCasts,
  } = props;


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
                      <h3 className="desktop_info_subtitle">Date de sortie :</h3>
                      <h3 className="desktop_info_subtitle">Durée :</h3>
                      <h3 className="desktop_info_subtitle">Budget :</h3>
                      <h3 className="desktop_info_subtitle">Recette :</h3>
                      <h3 className="desktop_info_subtitle">Genre :</h3>
                    </div>
                    <div className="desktop_info_column_left">
                      <p className="desktop_info_text">{release_date}</p>
                      <p className="desktop_info_text">{runtime} minutes</p>
                      <p className="desktop_info_text">${budget}</p>
                      <p className="desktop_info_text">${revenue}</p>
                      <div className="tags">
                        {/* {props.genres.map((a) => (
                          <p className="desktop_info_text">{a.name}</p>
                        ))} */}
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
        {
          detailsCrews.filter((c) => c.name !== '' && c.profile_path !== null)
            .slice(0, 5)
            .map(({
              credit_id, name, profile_path, job,
            }) => (
              <div key={credit_id} className="desktop_casting">
                <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${profile_path}`} className="desktop_casting_image" alt={`${name}`} />
                <h2 className="desktop_casting_actor"> {name}</h2>
                <h3 className="desktop_casting_name">{job}</h3>
              </div>
            ))
        }
      </div>
      <hr className="details_seperation" />
      {/* Acteurs */}
      <h2 className="desktop_casting_title">Acteurs / Actrices</h2>
      <div className="desktop_casting_section">
        {
          detailsCasts.filter((c) => c.name !== '' && c.profile_path !== null)
            .slice(0, 5)
            .map(({
              cast_id, name, profile_path, character,
            }) => (
              <div key={cast_id} className="desktop_casting">
                <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${profile_path}`} className="desktop_casting_image" alt={`${name}`} />
                <h2 className="desktop_casting_actor"> {name}</h2>
                <h3 className="desktop_casting_name">{character}</h3>
              </div>
            ))
        }
      </div>
      <hr className="details_seperation" />
      <div className="desktop_video" id="trailer">
        <h2 className="desktop_video_title">Bande-annonce</h2>
        <div className="desktop_video_link">
          {
            detailsVideos.slice(0, 1)
              .map(({ key }) => (
                <YouTube
                  videoId={key}
                  opts={optsDesktop}
                />
              ))
          }
        </div>
      </div>
    </div>
  );
};


DesktopDetails.propTypes = {
  title: PropTypes.string,
  // backdrop_path: PropTypes.string,
  // id: PropTypes.number,
  overview: PropTypes.string,
  poster_path: PropTypes.string,
  budget: PropTypes.number,
  vote_average: PropTypes.number,
  revenue: PropTypes.number,
  runtime: PropTypes.number,
  release_date: PropTypes.string,
  // genres: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     name: PropTypes.string,
  //   }),
  // ),
  detailsCrews: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      job: PropTypes.string,
      profile_path: PropTypes.string,
    }),
  ).isRequired,
  detailsCasts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      character: PropTypes.string,
      profile_path: PropTypes.string,
    }),
  ).isRequired,
  detailsVideos: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
    }),
  ).isRequired,
};

DesktopDetails.defaultProps = {
  title: '',
  // backdrop_path: '',
  // id: 0,
  overview: '',
  poster_path: '',
  budget: 0,
  vote_average: 0,
  revenue: 0,
  runtime: 0,
  release_date: '',
  // genres: {
  //   name: '',
  // },
};

export default DesktopDetails;
