/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Logo from '../../Assets/Programs/ACES2.png';
import bgimg from '../../Assets/BackgroundPics/elec.png';
import '../../Components/program.css';
import Folder from '../../Components/Profiledropdown/folder.png';
import {ELEESA} from '../../Components/coursesdata/coursesData';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';


const Program = () => {
  const [courseQuery, setcourseQuery] = useState(Number(1))
  console.log(courseQuery)
  return (
    <div>
      <Navbar/>

      <section className='below_navs' style={{background: `linear-gradient(0deg, rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${bgimg})`, backgroundRepeat: 'no-repeat',
    backgroundSize:'100% 100%'}}>
        <div>
          <div className="d-sm-flex align-items-center 
            justify-content-between" style={{ minHeight: '20vw' }}>
            <div>
              <h1> <span style={{fontSize:'80px'}}>
                ELECTRICAL ENGINEERING
              </span></h1>
            </div>
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
                ELEESA.filter((course) => {
                  if (Number(course.year) === Number(courseQuery) && (Number(course.semester=== 1))) return course
                  return ''
                }).map((course) => (
                  <li key={course.id} className="list-group-item"><img className="folders" src={Folder} alt=""></img> <Link to={`/home/electrical/${course.id}`} onClick={()=>{window.location.href=`/home/electrical/${course.id}`}}>{course.name}</Link> </li>
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
                ELEESA.filter((course) => {
                  if (Number(course.year) === Number(courseQuery) && (Number(course.semester=== 2))) return course
                  return ''
                }).map((course) => (
                  <li key={course.id} className="list-group-item"><img className="folders" src={Folder} alt=""></img> <Link to={`/home/electrical/${course.id}`} onClick={()=>{window.location.href=`/home/electrical/${course.id}`}}>{course.name}</Link> </li>
                ))
              }
            </ul>
          </div>
        </div>


      </div>
     <Footer/>
    </div>
  )
}

export default Program