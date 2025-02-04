import React from 'react';
import {Link} from "react-router-dom";
import './Navbar.css';

function Navbar() {

  return (
  <div id="nav_bar_div">
    <ul>
      <li><Link to="/Home">Home</Link></li>
      <li><Link to="/About">About</Link></li>
      <li><Link to="/Countdown">Countdown</Link></li>
      <li className="account"><Link to="/User">User</Link></li>
    </ul>
  </div>
 );
}

export default Navbar;
