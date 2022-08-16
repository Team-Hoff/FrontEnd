import React from 'react';
import './profiledp.css';
import edit from './edit.png'
import logout from './logout.png';
import settings from './settings.jpg';
import user from './user.png';
import user2 from './f2.png';

function profiledp() {

    const menuToggle=()=>{
        const toggleMenu = document.querySelector('.menu');
        toggleMenu.classList.toggle('active')}
  return (
    <div>
        <div class="action">
        <div class="profile" onClick={menuToggle}> 
            <img src={user2} alt=""></img>
        </div>
        <div class="menu">
            <h3>Welcome<br/><span>SINE</span></h3>
            <ul>
                <li><img src={user} alt="" class="resize"></img><a href="#">My Profile</a></li>
                <li><img src={edit} alt="" class="resize"></img><a href="#">Edit Profile</a></li>
                <li><img src={settings} alt="" class="resize"></img><a href="#">Settings</a></li>
                <li><img src={logout} alt="" class="resize" style={{marginBottom:'10px'}}></img><a href="#">Log out</a></li>
            </ul>
        </div>
    </div>
   
    </div>
  )
}

export default profiledp;