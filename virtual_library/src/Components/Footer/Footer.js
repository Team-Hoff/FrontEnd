import React from 'react';
import './Footer.css';
import {FaEnvelopeSquare, FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaMapMarked, FaPhone, FaTwitterSquare, FaYoutubeSquare} from 'react-icons/fa';


function Footer() {
  return (
    <div>
        <div className='fo'>
    <footer class="footer-display">

      <div class="footer-left">
      <h1>Virtual<span>Library</span></h1>

    <p class="footer-links">
        
    </p>

    <p class="footer-library-name">Copyright © 2022 <strong>Team Hoff</strong> All rights reserved</p>
</div>

<div class="footer-center">
    <div>
        <FaMapMarked style={{backgroundColor:'white'}}/>
        <p><span>KNUST</span>
            KUMASI</p>
    </div>

    <div>
        <FaPhone style={{backgroundColor:'white'}}/>
        <p>+233 552726588</p>
    </div>
    <div>
        <FaEnvelopeSquare style={{backgroundColor:'white'}}/>
        <p><a href="#" target='_blank'>teamHoff@gmail.com</a></p>
    </div>
</div>
<div class="footer-right">
    <br/>
    <br/>
    <div class="footer-icons">
        <a href="https://www.facebook.com/" target='_blank'><FaFacebookSquare/></a>
        <a href="https://www.instagram.com/" target='_blank'><FaInstagramSquare/></a>
        <a href="https://www.linkedin.com/" target='_blank'><FaLinkedin/></a>
        <a href="https://twitter.com/" target='_blank'><FaTwitterSquare/></a>
        <a href="https://www.youtube.com/" target='_blank'><FaYoutubeSquare/></a>
    </div>
    
</div>

</footer>

</div>
    </div>
  )
}

export default Footer