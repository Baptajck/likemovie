/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import { IoIosArrowRoundDown } from 'react-icons/io';

import 'src/components/Details/movie.scss';

export default class TVShows extends React.Component {
  componentDidMount() {
    const {
      fetchTv, fetchCast, /* fetchCrew, */ fetchVideo, fetchGenresTv,
    } = this.props;
    fetchTv(this.test());
    fetchGenresTv(this.test());
    // fetchCrew(this.test());
    fetchCast(this.test());
    fetchVideo(this.test());
  }

  //  componentWillUnmount = () => {
  //    const {
  //      fetchTv, fetchCast, /* fetchCrew, */ fetchVideo,
  //    } = this.props;
  //    fetchTv(this.test());
  //    // fetchCrew(this.test());
  //    fetchCast(this.test());
  //    fetchVideo(this.test());
  //  };

  test = () => {
    const url = document.location.pathname;
    const a = url.split('/');
    const n = Number(a[2]);
    return n;
  };

  render() {
    const {
      tvShows, /* tvCrews */ tvCasts, tvVideos, tvGenres,
    } = this.props;

    const optsDesktop = {
      height: '366',
      width: '600',
      playerVars: {
        autoplay: 0,
      },
    };

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

    document.title = `${tvShows.name} | Likemovie`;

    return (
      <div>
        {/* FORMAT DESKTOP */}
        <div className="desktop_details">
          <div className="desktop_details_background_effect">
            <img className="desktop_details_background_effect_after" src={`https://image.tmdb.org/t/p/w1400_and_h450_face${tvShows.backdrop_path}`} alt="Image_de_fond" />
            <div className="desktop_details_custom_bg">
              <div className="desktop_details_presentation">
                <section className="desktop_details_presentation_infos">
                  <div className="desktop_details_column_poster">
                    <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${tvShows.poster_path}`} className="desktop_header_image" alt="movie_poster" />
                  </div>
                  <div className="desktop_details_column_details">
                    <h1 className="desktop_header_title">{tvShows.name}</h1>
                    <a className="desktop_header_trailer_button" href="#trailer" title="Regarder la bande-annonce">
                      <span className="details_arrow"><IoIosArrowRoundDown /></span>
                    &nbsp; Voir la bande-annonce &nbsp;
                      <img className="desktop_header_trailer" src="https://img.icons8.com/color/48/000000/youtube-play.png" alt="" />
                    </a>
                    <div className="desktop_rating_background">
                      <h4 className="desktop_rating">{tvShows.vote_average}</h4>
                    </div>
                    <h2 className="desktop_synopsis_title">Synopsis</h2>
                    <p className="desktop_synopsis_text">{tvShows.overview}</p>
                    <h2 className="desktop_info_title">Informations</h2>
                    <div className="desktop_info">
                      <div className="desktop_info_stats">
                        <div className="desktop_info_column">
                          <h3 className="desktop_info_subtitle">Sortie le :</h3>
                          <h3 className="desktop_info_subtitle">Episodes :</h3>
                          <h3 className="desktop_info_subtitle">Saisons :</h3>
                          <h3 className="desktop_info_subtitle">Genre :</h3>
                        </div>
                        <div className="desktop_info_column_left">
                          <p className="desktop_info_text">{tvShows.first_air_date}</p>
                          <p className="desktop_info_text">{tvShows.number_of_episodes}</p>
                          <p className="desktop_info_text">{tvShows.number_of_seasons}</p>
                          <div className="tags">
                            {
                              tvGenres.map(({ name, id }) => (
                                <p key={id} className="desktop_info_text">{name}</p>
                              ))
                            }
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
          {/* tvCrews !== 'undefined' && (
            <div>
              <h2 className="desktop_casting_title">Equipe technique</h2>
              <div className="desktop_casting_section">
                {
                  tvCrews.filter((c) => c.name !== '' && c.profile_path !== null)
                    .slice(0, 5)
                    .map(({
                      name, profile_path, job,
                    }) => (
                      <div className="desktop_casting">
                        <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${profile_path}`} className="desktop_casting_image" alt={`${name}`} />
                        <h2 className="desktop_casting_actor"> {name}</h2>
                        <h3 className="desktop_casting_name">{job}</h3>
                      </div>
                    ))
                }
              </div>
            </div>
          ) */}
          {/* Acteurs */}
          <h2 className="desktop_casting_title">Acteurs / Actrices</h2>
          <div className="desktop_casting_section">
            {
              tvCasts.filter((item) => item.name !== '' && item.profile_path !== null)
                .slice(0, 5)
                .map(({
                  id, name, profile_path, character,
                }) => (
                  <div key={id} className="desktop_casting">
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
                tvVideos.filter((item) => item.key !== '' && item.id !== null)
                  .slice(0, 1)
                  .map(({ key, id, iso_3166_1 }) => (
                    <div>
                      <YouTube
                        key={id}
                        videoId={key}
                        opts={optsDesktop}
                      />
                      <p className="desktop_language">Langue : {iso_3166_1}</p>
                    </div>
                  ))
              }
            </div>
          </div>
        </div>
        {/* FORMAT TABLETTE ET MOBILE */}
        <section className="mobile_layout_details">
          <header className="mobile_header">
            <div className="mobile_header_background">
              <img className="mobile_header_fond" src={`https://image.tmdb.org/t/p/w500${tvShows.backdrop_path}`} alt="Image_de_fond" />
              <img className="tablette_header_fond" src={`https://image.tmdb.org/t/p/w780${tvShows.backdrop_path}`} alt="Image_de_fond" />
            </div>
            <div className="mobile_header_image_wrapper">
              <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${tvShows.poster_path}`} className="mobile_header_image" alt="movie_poster" />
            </div>
            <div className="mobile_rating_background">
              <h4 className="mobile_rating">{tvShows.vote_average}</h4>
            </div>
            <a className="mobile_header_trailer_button" href="#trailer" title="Regarder la bande-annonce">
              <span className="details_arrow"><IoIosArrowRoundDown /></span>
              &nbsp; Voir la bande-annonce &nbsp;
              <img className="mobile_header_trailer" src="https://img.icons8.com/color/48/000000/youtube-play.png" alt="" />
            </a>
            <h1 className="mobile_header_title">
              {tvShows.name}
            </h1>
          </header>
          <main className="mobile">
            { /* Synopsis */ }
            <div className="mobile_synopsis">
              <h2 className="mobile_synopsis_title">Synopsis</h2>
              <p className="mobile_synopsis_text">{tvShows.overview}</p>
            </div>
            { /* Informations */ }
            <div className="mobile_info">
              <h2 className="mobile_info_title">Informations</h2>
              <div className="mobile_info_stats">
                <div className="mobile_info_column">
                  <h3 className="mobile_info_subtitle">Sortie le :</h3>
                  <h3 className="mobile_info_subtitle">Episodes :</h3>
                  <h3 className="mobile_info_subtitle">Saisons :</h3>
                  <h3 className="mobile_info_subtitle">Genre :</h3>
                </div>
                <div className="mobile_info_column_left">
                  <p className="mobile_info_text">{tvShows.first_air_date}</p>
                  <p className="mobile_info_text">{tvShows.number_of_episodes}</p>
                  <p className="mobile_info_text">{tvShows.number_of_seasons}</p>
                  <div className="tags">
                    {
                      tvGenres.map(({ name, id }) => (
                        <p key={id} className="mobile_info_text">{name}</p>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
            {/* Producteurs */}
            {/* tvCrews !== 'undefined' && (
              <div className="mobile_casting_bar animated fadeInLeft delay-3s">
                <h2 className="mobile_casting_title">Equipe technique</h2>
                {
                  tvCrews !== null && tvCrews.filter((item) => item.name !== '' && item.profile_path !== null)
                    .slice(0, 5)
                    .map(({
                      name, profile_path, job,
                    }) => (
                      <div className="mobile_casting">
                        <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${profile_path}`} className="mobile_casting_image" alt={name} />
                        <h2 className="mobile_casting_actor">{name}</h2>
                        <h3 className="mobile_casting_name">{job}</h3>
                      </div>
                    ))
                  }
              </div>
            ) */}
            { /* Acteurs */ }
            <div className="mobile_casting_bar">
              <h2 className="mobile_synopsis_title">Acteurs / Actrices</h2>
              {
                tvCasts.filter((item) => item.name !== '' && item.profile_path !== null)
                  .slice(0, 5)
                  .map(({
                    id, name, profile_path, character,
                  }) => (
                    <div key={id} className="mobile_casting">
                      <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${profile_path}`} className="mobile_casting_image" alt={name} />
                      <h2 className="mobile_casting_actor">{name}</h2>
                      <h3 className="mobile_casting_name">{character}</h3>
                    </div>
                  ))
                }
            </div>
            { /* Trailer */ }
            <div className="mobile_video_bar" id="trailer">
              <h2 className="mobile_info_title" id="trailer">Bande-annonce</h2>
              <div className="mobile_video_link">
                {
                  tvVideos.slice(0, 1)
                    .map(({ key, id, iso_3166_1 }) => (
                      <div>
                        <YouTube
                          key={id}
                          videoId={key}
                          opts={optsMobile}
                        />
                        <p className="desktop_language">Langue : {iso_3166_1}</p>
                      </div>
                    ))
                }
              </div>
              <div className="ipad_video_link">
                {
                  tvVideos.slice(0, 1)
                    .map(({ key, id, iso_3166_1 }) => (
                      <div>
                        <YouTube
                          key={id}
                          videoId={key}
                          opts={optsIpad}
                        />
                        <p className="desktop_language">Langue : {iso_3166_1}</p>
                      </div>
                    ))
                }
              </div>
            </div>
          </main>
        </section>
        <footer>
          <div className="footer">
            <p className="text_footer">Tu trouves pas ?? Va là dessus : <NavLink to="/search" className="link_footer">Rechercher</NavLink> &copy; - 2020</p>
          </div>
        </footer>
      </div>
    );
  }
}