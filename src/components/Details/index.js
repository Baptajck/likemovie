import React from 'react';

import './details.scss';

const Details = () => (
  <>
    { /* Version Mobile */ }
    <article className="mobile_layout_details">
      <header className="mobile_header">
        <div className="mobile_header_background">
          <div className="mobile_header_cover">
            <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/w1fqnG3W2xqCPTvjdPJTcfPMYH1.jpg" className="image_details" alt="movie_poster" />
            <h1 className="mobile_header_title">
                Star Wars: Le poster moche de la force
            </h1>
            <div className="mobile_header_rating">78%</div>
            <button type="button" className="mobile_header_trailer">Voir bande-annonce</button>
          </div>
        </div>
      </header>
      <main className="mobile_body">
        <h2 className="mobile_synopsis_title">Synopsis</h2>
        <p className="mobile_synopsis_text">La conclusion de la saga Skywalker. De nouvelles légendes vont naître dans cette bataille épique pour la liberté.</p>
        <h2 className="mobile_info_title">Informations</h2>
        <h3 className="mobile_statut_title">Statut</h3>
        <p className="mobile_statut_text">Sorti</p>
        <h3 className="mobile_runtime_title">Durée</h3>
        <p className="mobile_runtime_text">2h21</p>
        <h3 className="mobile_budget_title">Budget</h3>
        <p className="mobile_bugdet_text">$250,000,000.00</p>
        <h3 className="mobile_revenue_title">Recette</h3>
        <p className="mobile_revenue_text">$704,330,816.00</p>
        <h3 className="mobile_genre_title">Genre</h3>
        <p className="mobile_genre_text">Action</p>
        <p className="mobile_genre_text">Aventure</p>
        <p className="mobile_genre_text">Science-fiction</p>
      </main>
    </article>
    { /* Version Desktop */ }
  </>
);

export default Details;
