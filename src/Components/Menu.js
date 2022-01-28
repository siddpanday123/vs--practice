import React from 'react';
import { Link } from 'react-router-dom';
import "./Menu.css"
const Menu = () => {
  return (
  <div>
    <Link to="/" className='home' > Controled form example</Link>
    <Link to="/UncForm" className='home'> Uncontroled form example</Link>

  </div>
  );
};

export default Menu;
