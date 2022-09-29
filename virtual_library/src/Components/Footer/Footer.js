import React from 'react';
import './Footer.css';
import {FaEnvelopeSquare, FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaMapMarked, FaPhone, FaTwitterSquare, FaYoutubeSquare} from 'react-icons/fa';


function Footer() {
  return (
    <div>
        <div className='fo'>
    <footer className="footer-display">

      <div className="footer-left">
      <h1>Virtual<span>Library</span></h1>

    <p className="footer-links">
        
    </p>

    <p className="footer-library-name">Copyright © 2022 <strong>Team Hoff</strong> All rights reserved</p>
</div>

<div className="footer-center">
    <div style={{paddingBottom:'5px'}}>
        <FaMapMarked style={{backgroundColor:'white'}}/>
        <p>COE 3, KNUST</p>
    </div>

    <div style={{paddingBottom:'5px'}}>
        <FaPhone style={{backgroundColor:'white'}}/>
        <p>+233 552726588</p>
    </div>
    <div style={{paddingBottom:'5px'}}>
        <FaEnvelopeSquare style={{backgroundColor:'white'}}/>
        <p>hoffteam59@gmail.com</p>
    </div>
</div>
<div className="footer-right">
    <br/>
    <br/>
    <div className="footer-icons">
        <a href="https://www.facebook.com/"><FaFacebookSquare/></a>
        <a href="https://www.instagram.com/"><FaInstagramSquare/></a>
        <a href="https://www.linkedin.com/"><FaLinkedin/></a>
        <a href="https://twitter.com/"><FaTwitterSquare/></a>
        <a href="https://www.youtube.com/"><FaYoutubeSquare/></a>
    </div>
    
</div>

</footer>

</div>
    </div>
  )
}

export default Footer