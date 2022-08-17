import React from 'react';
import './Footer.css';

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
        <i class="fa fa-map-marker"></i>
        <p><span>KNUST</span>
            KUMASI</p>
    </div>

    <div>
        <i class="fa fa-phone"></i>
        <p>+233 552726588</p>
    </div>
    <div>
        <i class="fa fa-envelope"></i>
        <p><a href="teamHoff@gmail.com">teamHoff@gmail.com</a></p>
    </div>
</div>
<div class="footer-right">
    <br/>
    <br/>
    <div class="footer-icons">
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-instagram"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-youtube"></i></a>
    </div>
    
</div>

</footer>

</div>
    </div>
  )
}

export default Footer