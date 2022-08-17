/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Logo from '../../Assets/Programs/ACES2.png';
import bgimg from '../../Assets/BackgroundPics/comp.png';
import '../../Components/program.css';
import Profiledp from '../../Components/Profiledropdown/profiledp';
import Folder from '../../Components/Profiledropdown/folder.png';
import { COE } from '../../Components/coursesdata/coursesData';
import { Link } from 'react-router-dom';


const Program = () => {
  const [courseQuery, setcourseQuery] = useState(Number(1))
  console.log(courseQuery)
  return (
    <div>
      <nav className="nav-main">
        <div className="navbars">
          <div style={{ display: 'flex' }}>
            <div className="logo-image"></div>
            <div className="logo"><h1 className="my_logos">
              <span style={{ fontSize: '20px' }}>Virtual</span> <span className="library">Library</span>
            </h1></div>
          </div>
          <ul className="nav_list">
            <li className="nav-links"><a href='/home'>Home</a></li>
            <li className="nav-links"><a href='#'>About</a></li>
            <li className="nav-links"><a href='#'>Help</a></li>
            <Profiledp />
          </ul>

        </div>
      </nav>



      <section className='below_navs' style={{background: `linear-gradient(0deg, rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${bgimg})`, backgroundRepeat: 'no-repeat',
    backgroundSize:'100% 100%'}}>
        <div>
          <div className="d-sm-flex align-items-center 
            justify-content-between" style={{ minHeight: '20vw' }}>
            <div>
              <h1> <span style={{fontSize:'80px'}}>
                COMPUTER ENGINEERING
              </span></h1>
              {/* <p style={{color:'white'}}>You don't need to go through  the stress of asking your colleagues for your course materials. Get all your engineering  course materials and tutorial video links right here !!   </p> */}

            </div>
            {/* <img className="img-fluid d-none d-sm-block " src={Logo} alt=""></img> */}
            {/* <img className="logos" src={Logo} alt=""></img> */}

          </div>
        </div>
      </section>

      <div className="container">
        <div className="d-sm-flex align-items-center 
        justify-content-between ">
          <div>
            <h2>{
              Number(courseQuery) === 1 ? "YEAR ONE" : Number(courseQuery) === 2 ? "YEAR TWO" : Number(courseQuery) === 3 ? "YEAR THREE" : Number(courseQuery) === 4 ? "YEAR FOUR" :""
              }</h2> </div>

          <div>
          <select onChange={(event) => setcourseQuery(event.target.value)}>
            <option value='' hidden >
              Select year
            </option>
            <option value={1}>
              YEAR ONE
            </option>
            <option value={2}>
              YEAR TWO
            </option>
            <option value={3} >
              YEAR THREE
            </option>
            <option value={4} >
              YEAR FOUR
            </option>
          </select>
          </div>

        </div>
        <div className="links">
          <div className="container py-4">
            <div className="d-sm-flex align-items-center 
                        justify-content-between">
              <h3>FIRST SEMESTER</h3>
            </div>

            <ul className="list-group list-group-flush">

              {
                COE.filter((course) => {
                  if (Number(course.year) === Number(courseQuery) && (Number(course.semester=== 1))) return course
                  return ''
                }).map((course) => (
                  <li key={course.id} className="list-group-item"><img className="folders" src={Folder} alt=""></img> <Link to={`/home/computer/${course.id}`} onClick={()=>{window.location.href=`/home/computer/${course.id}`}}>{course.name}</Link> </li>
                ))
              }
            </ul>
          </div>
          <div className="container ">
            <div className="d-sm-flex align-items-center 
                    justify-content-between">
              <h3>SECOND SEMESTER</h3>
            </div>
            <ul className="list-group list-group-flush">
            {
                COE.filter((course) => {
                  if (Number(course.year) === Number(courseQuery) && (Number(course.semester=== 2))) return course
                  return ''
                }).map((course) => (
                  <li key={course.id} className="list-group-item"><img className="folders" src={Folder} alt=""></img> <Link to={`/home/program/${course.id}`} onClick={()=>{window.location.href=`/home/program/${course.id}`}}>{course.name}</Link> </li>
                ))
              }
            </ul>
          </div>
        </div>


      </div>
      <div className="foot">
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