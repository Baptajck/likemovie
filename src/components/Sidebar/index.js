/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import './sidebar.scss';

const Sidebar = () => (
  <>
    <div className="mobile_layout">
      <nav role="navigation">
        <label className="menu back">
          <input type="checkbox" />
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="30" />
            <path className="line--1" d="M0 40h62c18 0 18-20-17 5L31 55" />
            <path className="line--2" d="M0 50h80" />
            <path className="line--3" d="M0 60h62c18 0 18 20-17-5L31 45" />
          </svg>
          <nav className="sidebar_mobile">
            <ul className="sidebar_mobile_links">
              <li className="active"><a href="#">Accueil</a></li>
              <li className=""><a href="http://gamebook.tech">Recherche</a></li>
              <li className=""><a href="#">A propos</a></li>
              <li className=""><a href="#">Contact</a></li>
            </ul>
          </nav>
        </label>
      </nav>
    </div>
    <div className="classic_layout">
      <nav role="navigation">
        <div className="sidebar_classic">
          <nav className="sidebar_classic_links">
            <ul>
              <li className="active"><a href="#">Accueil</a></li>
              <li className=""><a href="#">Recherche</a></li>
              <li className=""><a href="#">A propos</a></li>
              <li className=""><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
      </nav>
    </div>
  </>
);

export default Sidebar;
