import React from 'react';
import './Navbar.css';
import Profiledp from '../Profiledropdown/profiledp';
import { Link,useNavigate } from 'react-router-dom';

function NavbarGoback() {
  const history = useNavigate();

  return (
    <div>
        <nav className="nav-main">
        <div className="navbar">
          <div style={{display:'flex'}}>

          <button onClick={()=> history(-1) }  className='go-back'>Back</button>
          
          <div className="logo-image"></div>
            <div><h1>
                <span className='virtual'>Virtual</span><span className="librarys">Library</span>
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

export default NavbarGoback