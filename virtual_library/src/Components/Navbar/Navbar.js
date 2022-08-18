import React from 'react';
import './Navbar.css';
import Profiledp from '../Profiledropdown/profiledp';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <nav className="nav-main">
        <div className="navbar">
          <div style={{display:'flex'}}>
          <div className="logo-image"></div>
            <div className="logo"><h1 className="my_logos">
                <span>Virtual</span><span className="librarys">Library</span>
                
            </h1></div>
            </div>
              <ul className="nav_list">
                  <li className="nav-links"><Link to='/home'>Home</Link></li>
                  <li className="nav-links"><Link to='#'>About</Link></li>
                  <li className="nav-links"><Link to='#'>Help</Link></li>
                  <Profiledp/>
              </ul>
            
          </div>
       </nav>
    </div>
  )
}

export default Navbar