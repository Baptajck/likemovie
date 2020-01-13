import React from 'react';
import { NavLink } from 'react-router-dom';


import Mobile from 'src/components/Details/mobile';
import Desktop from 'src/components/Details/desktop';

const Details = () => (
  <div>
    <Mobile />
    <Desktop />
    <footer>
      <div className="footer">
        <p className="text_footer">Tu trouves pas ?? Va là dessus : <NavLink to="/search" className="link_footer">Rechercher</NavLink> &copy; - 2019</p>
      </div>
    </footer>
  </div>
);


export default Details;
