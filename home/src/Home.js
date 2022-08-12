import React from 'react';
import './home.css';
import Searchbar from './components/Searchbar/Searchbar';

const Home = () => {
  return (
    <div>
      <nav class="nav-main">
        <div class="navbar">
          <div class="logo-image"></div>
            <div class="logo"><h1 class="my_logo">
                <span style={{fontSize:'20px'}}>Virtual</span> <span class="library">Library</span>
            </h1></div>
            <ul class="nav_list">
                <li class="nav-links"><a href='#'>Help</a></li>
            </ul>
        </div>
      </nav>

      <section style={{backgroundColor:'black'}}>
        <div class="container">
            <div class="d-sm-flex align-items-center 
            justify-content-between">
                <div>
                    <h1 style={{textAlign:'center'}}> <span class="text-warning">
                        WELCOME TO THE COE VIRTUAL LIBRARY
                    </span></h1>
                    <p style={{color:'white', textAlign:'center'}}>You don't need to go through  the stress of asking your colleagues for your course materials. Get all your engineering  course materials and tutorial video links right here !!</p>      
                </div>              
            </div>
            <Searchbar/>
        </div>
    </section>

    <div>


    </div>

      

  </div>
  )
}

export default Home