import React from 'react';
import './profiledp.css';
import edit from './edit.png'
import logout from './logout.png';
import settings from './settings.jpg';
import user from './user.png';
import user2 from './f2.png';
import { Link } from 'react-router-dom';

function profiledp() {

    const menuToggle=()=>{
        const toggleMenu = document.querySelector('.menu');
        toggleMenu.classList.toggle('active')}
  return (
    <div>
        <div className="action">
        <div className="profile" onClick={menuToggle}> 
            <img src={user2} alt=""></img>
        </div>
        <div className="menu">
            <h3>Welcome<br/><span>SINE</span></h3>
            <ul>
                <li><img src={user} alt="" className="resize"></img><Link to="#">My Profile</Link></li>
                <li><img src={edit} alt="" className="resize"></img><Link to="#">Edit Profile</Link></li>
                <li><img src={settings} alt="" className="resize"></img><Link to="#">Settings</Link></li>
                <li><img src={logout} alt="" className="resize" style={{marginBottom:'10px'}}></img><Link to="/">Log out</Link></li>
            </ul>
        </div>
    </div>
   
    </div>
  )
}

export default profiledp;