/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import Logo from '../Assets/Programs/ACES2.png';
import '../Components/program.css';
import Profiledp from '../Components/Profiledropdown/profiledp';
import Folder from '../Components/Profiledropdown/folder.png';
import { firstSem, secondSem } from '../Components/coursesdata/coursesData';


const Program = () => {
  
  return (
    <div>
      <nav class="nav-main">
        <div class="navbars">
          <div style={{ display: 'flex' }}>
            <div class="logo-image"></div>
            <div class="logo"><h1 class="my_logos">
              <span style={{ fontSize: '20px' }}>Virtual</span> <span class="library">Library</span>
            </h1></div>
          </div>
          <ul class="nav_list">
            <li class="nav-links"><a href='/home'>Home</a></li>
            <li class="nav-links"><a href='#'>About</a></li>
            <li class="nav-links"><a href='#'>Help</a></li>
            <Profiledp />
          </ul>

        </div>
      </nav>
      


      <section class='below_navs'>
        <div>
          <div class="d-sm-flex align-items-center 
            justify-content-between" style={{ minHeight: '20vw' }}>
            <div>
              <h1> <span>
                COMPUTER ENGINEERING
              </span></h1>
              {/* <p style={{color:'white'}}>You don't need to go through  the stress of asking your colleagues for your course materials. Get all your engineering  course materials and tutorial video links right here !!   </p> */}

            </div>
            {/* <img class="img-fluid d-none d-sm-block " src={Logo} alt=""></img> */}
            {/* <img class="logos" src={Logo} alt=""></img> */}

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
        <div class="links">
          <div class="container py-4">
            <div class="d-sm-flex align-items-center 
                        justify-content-between">
              <h3>First Semester</h3>
            </div>
           
            <ul class="list-group list-group-flush">
            {
              firstSem.map((cor) => (
                <li key={cor.id} class="list-group-item"><img class="folders" src={Folder} alt=""></img><a href="#"> {cor.name}</a> </li>
              ))
            }
              {/* <li class="list-group-item"><img class="folders" src={Folder} alt=""></img><a href="#"> Applied Electricity</a> </li>
              <li class="list-group-item"><img class="folders" src={Folder} alt=""></img><a href="#"> Algebra</a> </li>
              <li class="list-group-item"><img class="folders" src={Folder} alt=""></img><a href="#"> Communication Skills</a> </li>
              <li class="list-group-item"><img class="folders" src={Folder} alt=""></img><a href="#"> Information </a> </li>
              <li class="list-group-item"><img class="folders" src={Folder} alt=""></img><a href="#"> Ethics</a> </li> */}

            </ul>
          </div>
          <div class="container ">
            <div class="d-sm-flex align-items-center 
                    justify-content-between">
              <h3>Second Semester</h3>
            </div>
            <ul class="list-group list-group-flush">
            {
              secondSem.map((cor) => (
                <li key={cor.id} class="list-group-item"><img class="folders" src={Folder} alt=""></img><a href="#"> {cor.name}</a> </li>
              ))
            }
              {/* <li class="list-group-item"><img class="folders" src={Folder} alt=""></img><a href="#"> Applied Thermodynamics</a> </li>
              <li class="list-group-item"><img class="folders" src={Folder} alt=""></img><a href="#"> Electrical Machines</a> </li>
              <li class="list-group-item"><img class="folders" src={Folder} alt=""></img><a href="#"> Calculus with Several Variables</a> </li>
              <li class="list-group-item"><img class="folders" src={Folder} alt=""></img><a href="#"> C Programming</a> </li>
              <li class="list-group-item"><img class="folders" src={Folder} alt=""></img><a href="#"> CENG</a> </li>
              <li class="list-group-item"><img class="folders" src={Folder} alt=""></img><a href="/home/program/course"> Semiconductor Devices</a> </li> */}
            </ul>
          </div>
        </div>


      </div>
        <div class="foot">
          <footer>
            <h3>Engineering Programmes</h3>
            <div className='footer-programmes'>
              <div>
                <div><a href='#'>Computer engineering</a></div>
                <div><a href='#'>Biomedical engineering</a></div>
                <div><a href='#'>Telecommunication engineering</a></div>
                <div><a href='#'>Electrical engineering</a></div>
                <div><a href='#'>Civil engineering</a></div>
              </div>
              <div>
                <div><a href='#'>Metallurgical engineering</a></div>
                <div><a href='#'>Mechanical engineering</a></div>
                <div><a href='#'>Geological engineering</a></div>
                <div><a href='#'> Geomatic engineering</a></div>
                <div><a href='#'>Automobile engineering</a></div>
              </div>
              <div>
                <div><a href='#'>Aerospace engineering</a></div>
                <div><a href='#'>Materials engineering</a></div>
                <div><a href='#'>Petrochemical engineering</a></div>
                <div><a href='#'>Petroleum engineering</a></div>
                <div><a href='#'>Industrial engineering</a></div>
              </div>
            </div><hr />
            <div className='footer-info'>
              <div>
                <a href="#">About us </a>
              </div>
              <div>
                <a href="#">Contact</a>
              </div>
              <div>
                <a href="#">Questions</a>
              </div>

            </div>
          </footer>
        </div>
    </div>
  )
}

export default Program