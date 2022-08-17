import React from 'react';
import '../Components/home.css';
import Searchbar from '../Components/Searchbar/Searchbar';
import BookData from '../Components/Searchbar/Data.json';
import Programcard from '../Components/Programcard';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';



const Home = () => {

  return (
    <div className="Everything">

        <Navbar/>
      
      {/* <nav className="nav-main">
        <div className="navbar">
          <div style={{display:'flex'}}>
          <div className="logo-image"></div>
            <div className="logo"><h1 className="my_logos">
                <span>Virtual</span><span className="librarys">Library</span>
                
            </h1></div>
            </div>
              <ul className="nav_list">
                  <li className="nav-links"><a href='#'>About</a></li>
                  <li className="nav-links"><a href='#'>Help</a></li>
                  <Profiledp/>
              </ul>
            
          </div>
       </nav> */}


      <section className="below_nav">
        <div className="container">
            <div className="d-sm-flex align-items-center 
            justify-content-between">
                <div>
                    <h1 style={{textAlign:'center', paddingTop:'30px'}}> <span className="text-warning">
                        WELCOME TO THE CoE VIRTUAL LIBRARY
                    </span></h1>
                    <p style={{color:'white', textAlign:'center'}}>You don't need to go through  the stress of asking your colleagues for your course materials. Get all your engineering  course materials and tutorial video links right here !!</p>      
                    <div className="searchb"><Searchbar placeholder="Search for course..." data={BookData}/></div>
                </div>              
            </div>
        </div>
    </section>

     <div>

      <Programcard/>
      

    </div>

    {/* <div className='fo'>
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

</div> */}
    <Footer/>

  </div>
  )
}

export default Home;