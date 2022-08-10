/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import Logo from './Assets/ACES2.png';

const Program = () => {
  return (
    <div>
      
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3">
      <div class="container">
        <div class="navbar-brand">Virtual<span style={{
          backgroundColor:'orange', 
          borderRadius: '8px',
          paddingBottom: '8px',
          paddingTop: '8px',
          padding: '1px 1px',
          fontSize: '20px'
        }}>Library</span></div> 
        <button class="navbar-toggler"
         type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navmenu">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navmenu">
         <ul class="navbar-nav ms-auto" >
            <li class="nav-item">
              <a href="#home" class="nav-link">Home</a>  
            </li>
            {/* <li class="nav-item">
                <a href="#search" class="nav-link">Search</a>  
              </li>
              <li class="nav-item">
                <a href="#questions" class="nav-link">Questions</a>  
              </li> */}
         </ul>   
        </div>
    </div>   
    </nav>


    <section class="bg-dark text-light p-5 text-center text-sm-start">
        <div class="container">
            <div class="d-sm-flex align-items-center 
            justify-content-between">
                <div>
                    <h1> <span class="text-warning">
                        COMPUTER ENGINEERING
                    </span></h1>
                    <p class="lead my-4">You don't need to go through  the stress of asking your colleagues for your course materials. Get all your engineering  course materials and tutorial video links right here !!   </p>
                    
                </div>
                {/* <img class="img-fluid d-none d-sm-block " src={Logo} alt=""></img> */}
                <img src={Logo} alt=""></img>
                
            </div>
        </div>
    </section>
    
    <div class="container">
        <div class="d-sm-flex align-items-center 
        justify-content-between ">
            <div>
                <h2>FIRST YEAR</h2> </div>

                <Dropdown>
                  <Dropdown.Toggle variant="secondary">
                    Select Year
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">
                      First Year
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      Second Year
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      Third Year
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      Fourth Year
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>                    
                  
                  </div>
    <div class="container py-4">
         <div class="d-sm-flex align-items-center 
        justify-content-between">
        <h3>First Semester</h3>
    </div>
         <ul class="list-group list-group-flush">
                    <li class="list-group-item">Applied Electricity</li>
                    <li class="list-group-item">Algebra</li>
                    <li class="list-group-item">Communication Skills</li>
                    <li class="list-group-item">Information Technology</li>
                    <li class="list-group-item">Ethics</li>
                  </ul>
     </div>
     <div class="container ">
      <div class="d-sm-flex align-items-center 
     justify-content-between">
     <h3>Second Semester</h3>
 </div>
      <ul class="list-group list-group-flush">
                 <li class="list-group-item">Applied Thermodynamics</li>
                 <li class="list-group-item">Electrical Machines</li>
                 <li class="list-group-item">Calculus with Several Variables</li>
                 <li class="list-group-item">C Programming</li>
                 <li class="list-group-item">CENG</li>
               </ul>
  </div>



  <footer>
    <div class="footer-top bg-dark footer-dark py-2 ">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            {/* <img src={Logo} alt="" class="logo" style={{width: '20', height: '20'}}></img> */}
          </div>
          <div class="col-md-4">
            <h5 class="text-white">For more information</h5>
            <ul class="list-unstyled">
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#questions">Questions</a></li>
                <li><a href="#home">Home</a></li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5 class="text-white">Other Programmes</h5>
            <ul class="list-unstyled">
                <li><a href='#'>Agricultural Engineering</a></li>
                  <li><a href='#'>Chemical Engineering</a></li>
                  <li><a href='#'>Civil Engineering</a></li>
                  <li><a href='#'>Geomatic Engineering (Geodetic Engineering)</a></li>
                  <li><a href='#'>Materials Engineering</a></li>
                  <li><a href='#'>Mechanical Engineering</a></li>
                  <li><a href='#'>Electrical & Electronic Engineering</a></li>
                  <li><a href='#'>Computer Engineering</a></li>
                  <li><a href='#'>Aerospace Engineering</a></li>
                  <li><a href='#'>Petroleum Engineering</a></li>
                  <li><a href='#'>Telecommunication Engineering</a></li>
                  <li><a href='#'>Geological Engineering</a></li>
                  <li><a href='#'>Biomedical Engineering</a></li>
                  <li><a href='#'>Petrochemical Engineering</a></li>
                  <li><a href='#'>Metallurgical Engineering</a></li>
            </ul></div>
        </div>
      </div>
    </div>
  </footer>
                  
                  
    {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script> */}



    </div>
    </div>
  )
}

export default Program