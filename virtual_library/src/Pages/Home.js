import React, {useState} from 'react';
import '../Components/home.css';
import Searchbar from '../Components/Searchbar/Searchbar';
import BookData from '../Components/Searchbar/Data.json';
import Profiledp from '../Components/Profiledropdown/profiledp';
import {TextLink} from '../Components/Style';
import Programcard from '../Components/Programcard';




const Home = () => {

  return (
    <div class="Everything">
      
      <nav class="nav-main">
        <div class="navbar">
          <div style={{display:'flex'}}>
          <div class="logo-image"></div>
            <div class="logo"><h1 class="my_logo">
                <span style={{fontSize:'20px'}}>Virtual</span> <span class="library">Library</span>
            </h1></div>
            </div>
              <ul class="nav_list">
                  <li class="nav-links"><a href='#'>About</a></li>
                  <li class="nav-links"><a href='#'>Help</a></li>
                  <Profiledp/>
              </ul>
            
          </div>
       </nav>


      <section class="below_nav">
        <div class="container">
            <div class="d-sm-flex align-items-center 
            justify-content-between">
                <div>
                    <h1 style={{textAlign:'center', paddingTop:'30px'}}> <span class="text-warning">
                        WELCOME TO THE CoE VIRTUAL LIBRARY
                    </span></h1>
                    <p style={{color:'white', textAlign:'center'}}>You don't need to go through  the stress of asking your colleagues for your course materials. Get all your engineering  course materials and tutorial video links right here !!</p>      
                    <div class="searchb"><Searchbar placeholder="Search for course..." data={BookData}/></div>
                </div>              
            </div>
        </div>
    </section>

     <div>

      {/* <TextLink to="/program" onClick={()=>{window.location.href="/program"}}>Program</TextLink> */}

      <Programcard/>
    </div>


    

  </div>
  )
}

export default Home;