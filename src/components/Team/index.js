// Import : Npm
import React from 'react';
import { FaLinkedin, FaTwitterSquare, FaGithubSquare } from 'react-icons/fa';

// Import : local
import './team.scss';

const Team = () => (
  <div className="team_background">
    <div className="team_container">
      <div className="team_column left">
        <div className="team_title">
          <span>Notre</span>
          <span>équipe</span>
        </div>
        <div className="team_info">Pour garder un œil averti sur les séries et films qui sont d'actualité, nous avons concocter ce petit site en React, qui tire toutes ses infos de l'api <a className="team_info_links" target="_blank" rel=" noopener noreferrer" href="http://https://www.themoviedb.org/">TheMovieDB</a>, notre site est herbégé sur GitHub. On espère que vous apprécierez la visite.</div>
      </div>
      <div className="team_column right">
        <div className="team_member">
          <div className="team_member_title">Baptiste</div>
          <img src="https://i.imgur.com/8Cm8NTl.jpg" alt="avatar_baptiste" className="team_member_photo" />
          <div className="team_member_text">Skateur du dimanche, codeur la semaine. Son motto "Y a pas de raison que ça ne marche pas là&nbsp;!". Amoureux du front, en plein découverte romantique avec le back, il lorgne sur Symfony.
          </div>
          <div className="team_member_links">
            <a title="Linkedin" className="linkedin" target="_blank" rel=" noopener noreferrer" href="https://www.linkedin.com/in/baptiste-parville" alt="linkedin_baptiste"> <FaLinkedin /> </a>
            <a title="Twitter" className="twitter" target="_blank" rel=" noopener noreferrer" href="https://twitter.com/baptjacky" alt="twitter_baptiste"> <FaTwitterSquare /> </a>
            <a title="GitHub" className="github" target="_blank" rel=" noopener noreferrer" href="https://github.com/Baptajck" alt="github_baptiste"> <FaGithubSquare /> </a>
          </div>
        </div>
        <div className="team_member">
          <div className="team_member_title">Christian</div>
          <img src="https://i.imgur.com/IPIz3Sf.jpg" alt="avatar_christian" className="team_member_photo" />
          <div className="team_member_text">Aime se cacher dans des bambous pour se retrouver en osmose avec la terre, son motto "Me dit pas que j'ai encore fait une faute de frappe dans le ClassName&nbsp;?!" fait fureur après 2h de debug. En train de se réconcilier avec PHP 7.
          </div>
          <div className="team_member_links">
            <a title="Linkedin" className="linkedin" target="_blank" rel=" noopener noreferrer" href="https://www.linkedin.com/in/christianbourgeoisdev" alt="linkedin_christian"> <FaLinkedin /> </a>
            <a title="Twitter" className="twitter" target="_blank" rel=" noopener noreferrer" href="https://twitter.com/DStrangecode" alt="twitter_christian"> <FaTwitterSquare /> </a>
            <a title="GitHub" className="github" target="_blank" rel=" noopener noreferrer" href="https://github.com/TaLoche" alt="github_christian"> <FaGithubSquare /> </a>
          </div>
        </div>
      </div>
    </div>
  </div>

);


// Export
export default Team;
