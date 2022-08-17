import React from 'react';
import './Navbar.css';
import Profiledp from '../Profiledropdown/profiledp';

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
                  <li className="nav-links"><a href='/home'>Home</a></li>
                  <li className="nav-links"><a href='#'>About</a></li>
                  <li className="nav-links"><a href='#'>Help</a></li>
                  <Profiledp/>
              </ul>
            
          </div>
       </nav>
    </div>
  )
}

export default Navbar