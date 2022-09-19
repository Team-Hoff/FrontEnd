
/* eslint-disable eqeqeq */
import React, { useState, useEffect } from 'react';
import '../Components/course.css';
import axios from "./utils/axios"
// import book from '../Assets/Asset/book.jpg';
import {HiDownload, HiEye} from 'react-icons/hi';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import GoBack from '../Components/GoBack/GoBack';
import {useParams, Navigate, useLocation } from 'react-router-dom';
import { BoxLoading, RollBoxLoading, LadderLoading, MeteorRainLoading, WindMillLoading } from 'react-loadingg';
import '../Components/loading.css'
// import CourseData from '../Components/Data/CourseData.json'



const Course = () => {
    const pos = Math.floor(Math.random()*5);
    const loaders = [<BoxLoading color="white"/>,<WindMillLoading color="white"/>,
    <MeteorRainLoading color="white"/>,
    <LadderLoading color="white"/>,<RollBoxLoading color="white"/>]

    const isAvailable = "No Course Material is available for this course";
    const  {pathname}  = useLocation();
    // const { id } = useParams();

    const [course, setcourse] = useState([]);
    const idm = pathname.slice(6);

    console.log(idm)

    useEffect (() => {
        axios.get(`/course/${idm}`)
        .then(res => {
          console.log(res.data)
          setcourse(res.data)
          
        })
        .catch(err=>{
          console.log(err)
        })
      }, [])

    //   console.log(course)
    // const courses = courses.filter((cor) => cor.id === id)
    // const course = courses.filter((cor) => `/home/${cor.IDM}/${cor.id}`=== pathname)
    const [loading, setLoading] = useState(false);

   

    const getFiles = (path, lecture_name) => {
        setLoading(true)
        const {ID, name, year, semester, ext} = path[0] ;
            axios({
                url: `/program/${ID}/${year}/${semester}/${name}/${lecture_name}`, 
                method: 'GET',
                responseType: 'blob', 
            }).then((response) => {
                const href = URL.createObjectURL(response.data);
                const link = document.createElement('a');
                link.href = href;
                link.setAttribute('download', `${lecture_name}.${ext}`); //or any other extension
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(`/program/${ID}/${year}/${semester}/${name}/${lecture_name}`);
                setLoading(false)
            }).catch(()=> {
                alert(`${lecture_name} is not available`)
                setLoading(false)
            });
    }

    const displayFile =  (path, lecture_name) => {
        setLoading(true)
        const {ID, name, year, semester, ext} = path[0] ;
        switch (ext) {
            case "pdf":
        axios({
            url: `/program/${ID}/${year}/${semester}/${name}/${lecture_name}`, 
            method: 'GET',
            responseType: 'blob', 
        }).then((response) => {
            setLoading(false)
            const file = new Blob([response.data], {type: `application/${ext}`})
            const href = URL.createObjectURL(file);
            window.open(href)
        }).catch(()=> {
            setLoading(false)
            alert(`${lecture_name} is not available`)
        })
    break;
    case "pptx":
                    alert("Cannot View powerpoint in browser for now, please download")
                    break;
                default:
                    break;
            }
    }




    
  
  return (course != "") ?  (
    <div>
         {loading ? (
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    ) :( <></>)
      }
        <Navbar/>


        <div className="hero" style={{ 
            backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${course.length !== 0 ? course[0].img: ""})`, 
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%'
            }}>

        {
                course.length !== 0 ? <h1> <span className='program_fonts'>
                  {course[0].name.toUpperCase()}
                </span></h1> : ""
              }

         </div>
         
     {(course[0].slides == "") ? <div style={{display:'flex'}}> 
                    <div className="containers"> 
                        <div style={{marginTop:'25px'}}><GoBack/></div>  
                        <div className='Available'>{isAvailable}</div>
                       </div> 
                    </div>
    : ( 
    <div style={{display:'flex'}}> 

    <div style={{marginTop:'25px'}}><GoBack/></div>  

    <div className="containers">
        <div className="slides">
            <h1 className="lect_head">Slides</h1>

            {course[0].slides.map((slide)=>
            
            <div className="lect_slides">
                <div className="left_lect_block_4">
                    <div className="doc_icon_50x50"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px">    
                        <path d="M 6 2 C 4.9057453 2 4 2.9057453 4 4 L 4 20 C 4 21.094255 4.9057453 22 6 22 L 18 22 C 19.094255 22 20 21.094255 20 20 L 20 8 L 14 2 L 6 2 z M 6 4 L 13 4 L 13 9 L 18 9 L 18 20 L 6 20 L 6 4 z M 8 12 L 8 14 L 16 14 L 16 12 L 8 12 z M 8 16 L 8 18 L 16 18 L 16 16 L 8 16 z" /></svg>
                    </div>
                    <h3 className="lect_one">{slide}</h3>
                    
                    {loaders[pos]}
                </div>
               <div className="right_lect_block_4">
                    
                    <span className='hov' onClick={() => { displayFile(course, `${slide}`) } }><HiEye /></span>
                    <span className='hov' onClick={() => { getFiles(course, `${slide}`); } }><HiDownload /></span>
                    
               </div>
            </div>
            )}
    
            
        </div>
    </div>
    </div>
    )}
    
   
  

    {/* <div className="ref_books">
        <h1 className="ref_book_head">Reference Books</h1>
        <div className="ref_bookss">
            <div className="ref_cov_page">
                <img src={book} alt="Reference Book Image" height="100px"></img>
                <h3 className="book_label">Book One</h3>
            </div>
            <div className="ref_cov_page">
                <img src={book} alt="Reference Book Image" height="100px"></img>
                <h3 className="book_label">Book One</h3>
            </div>
            <div className="ref_cov_page">
                <img src={book} alt="Reference Book Image" height="100px"></img>
                <h3 className="book_label">Book One</h3>
            </div>
           
        </div>

    </div>
    
    
    <h1 className="ref_book_head">Recommended videos</h1>
    <div className='recvid'>
    </div> */}


    <Footer/>
    
    
    </div>
    )
   :
     (
     <Navigate replace to="/404"/>
     )
}

export default Course;
