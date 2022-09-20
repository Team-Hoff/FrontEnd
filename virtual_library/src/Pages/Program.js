/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import axios from './utils/axios';
import '../Components/program.css';
import Folder from '../Components/Profiledropdown/folder.png';
import { ProgramData } from '../Components/Data/programData';
import { Link, useParams, Navigate} from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import { useEffect } from 'react';
import GoBack from '../Components/GoBack/GoBack';
import '../Components/loading.css'

const Program = () => {
  const [courseQuery, setcourseQuery] = useState(Number(1));
  const [course, setcourse] = useState([]);
  const [apro, setapro] = useState([]);
  const [loading, setLoading] = useState(true);

  const  {id } = useParams()
  const prog = ProgramData.filter((pro) => pro.id === id)

  useEffect(() => {
    setapro(prog)

    return () => {
      setapro('')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

    useEffect (() => {
    axios.get(`/course/${id}`)
    .then(res => {
      // console.log(res.data)
      setcourse(res.data)
      setLoading(false)
      
    })
    .catch(err=>{
      console.log(err)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const cour = course.filter((cor) => cor.IDM === id)


  if(loading ){
    return (
    <div>
        <div className="loader-container">
            <div className="spinner"></div>
        </div>
    </div>
    )
}
  // eslint-disable-next-line eqeqeq
  return (prog != "") ? (
    <div>
      <Navbar />

      <section className='below_navs' style={{

        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${apro.length !== 0 ? apro[0].pic: ""})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }}>


        <div>
          <div className="d-sm-flex align-items-center 
            justify-content-between" style={{ minHeight: '20vw' }}>
            <div>
              {
                apro.length !== 0 ? <h1> <span className='program_font'>
                  {apro[0].name.toUpperCase()}
                </span></h1> : ""
              }


            </div>


          </div>
        </div>
      </section>

       <div style={{display:'flex'}}>
       <div style={{marginTop:'25px', width: '60px'}}><GoBack/></div>      
      

      <div className="container">
        <div className="d-sm-flex align-items-center 
        justify-content-between " style={{ paddingTop: '30px' }}>
          <div>
          
            <h2>{
              Number(courseQuery) === 1 ? "LEVEL 100" : Number(courseQuery) === 2 ? "LEVEL 200" : Number(courseQuery) === 3 ? "LEVEL 300" : Number(courseQuery) === 4 ? "LEVEL 400" : ""
            }</h2> </div>

          <div>
            <select onChange={(event) => setcourseQuery(event.target.value)}>
              {/* <option value='' hidden >
                SELECT YEAR
              </option> */}
              <option value={1}>
                LEVEL 100
              </option>
              <option value={2}>
                LEVEL 200
              </option>
              <option value={3} >
                LEVEL 300
              </option>
              <option value={4} >
                LEVEL 400
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
                cour.filter((course) => {
                  if (Number(course.year) === Number(courseQuery) && (Number(course.semester === 1))) return course
                  return ''
                }).map((course) => (
                  <li key={course.id} className="list-group-item"><img className="folders" src={Folder} alt="folder"></img> <Link to={`/home/${id}/${course.id}`} >{course.name}</Link> </li>
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
                cour.filter((course) => {
                  if (Number(course.year) === Number(courseQuery) && (Number(course.semester === 2))) return course
                  return ''
                }).map((course) => (
                  <li key={course.id} className="list-group-item"><img className="folders" src={Folder} alt="folder"></img> <Link to={`/home/${id}/${course.id}`} >{course.name}</Link> </li>
                ))
              }
            </ul>
          </div>
        </div>


      </div>
      </div>
      <Footer />
    </div>
  )
  :(
    <Navigate replace to="/404"/>
  )
}

export default Program