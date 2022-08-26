import React, {useState, useEffect} from 'react';
import '../Components/course.css';
import book from '../Assets/Asset/book.jpg';
import {HiDownload} from 'react-icons/hi';
import bgImg from "../Assets/Asset/anne-nygard-cA8VTQeHU0c-unsplash.jpg";
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import {useParams } from 'react-router-dom';
import { CourseData} from '../Components/Data/coursesData';

const Course = () => {
    const [acor, setacor] = useState([]);

    const { id } = useParams()
    useEffect(()=>{
        var cour;
         cour = CourseData.filter((cor) => cor.id === id)
                  setacor(cour)
                       
        return () => {
          setacor('')
        }
      }, [id])

  return (
    <div>
        <Navbar/>

    <div className="hero" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),
    url(${bgImg})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%'}}>
        {/* <h1 className="hero_head">Semi-Conductor Devices</h1> */}
        {
                acor.length !== 0 ? <h1> <span style={{ fontSize: '80px', fontFamily: 'Poppins' }}>
                  {acor[0].name.toUpperCase()}
                </span></h1> : ""
              }
    </div>
    
    <div className="containers">
        <div className="slides">
            <h1 className="lect_head">Slides</h1>
            <div className="lect_slides">
                <div className="left_lect_block_4">
                    <div className="doc_icon_50x50"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="30px" height="30px">    <path d="M 6 2 C 4.9057453 2 4 2.9057453 4 4 L 4 20 C 4 21.094255 4.9057453 22 6 22 L 18 22 C 19.094255 22 20 21.094255 20 20 L 20 8 L 14 2 L 6 2 z M 6 4 L 13 4 L 13 9 L 18 9 L 18 20 L 6 20 L 6 4 z M 8 12 L 8 14 L 16 14 L 16 12 L 8 12 z M 8 16 L 8 18 L 16 18 L 16 16 L 8 16 z"/></svg></div>
                    <h3 className="lect_one">Lecture One</h3>
                </div>
               <div className="right_lect_block_4">
                    <a href="#"><HiDownload/></a>
               </div>
            </div>
    
            <div className="lect_slides">
                <div className="left_lect_block_4">
                    <div className="doc_icon_50x50"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="30px" height="30px">    <path d="M 6 2 C 4.9057453 2 4 2.9057453 4 4 L 4 20 C 4 21.094255 4.9057453 22 6 22 L 18 22 C 19.094255 22 20 21.094255 20 20 L 20 8 L 14 2 L 6 2 z M 6 4 L 13 4 L 13 9 L 18 9 L 18 20 L 6 20 L 6 4 z M 8 12 L 8 14 L 16 14 L 16 12 L 8 12 z M 8 16 L 8 18 L 16 18 L 16 16 L 8 16 z"/></svg></div>
                    <h3 className="lect_one">Lecture Two</h3>
                </div>
               <div className="right_lect_block_4">
                    <a href="#"><HiDownload/></a>
               </div>
            </div>
    
            <div className="lect_slides">
                <div className="left_lect_block_4">
                    <div className="doc_icon_50x50"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="30px" height="30px">    <path d="M 6 2 C 4.9057453 2 4 2.9057453 4 4 L 4 20 C 4 21.094255 4.9057453 22 6 22 L 18 22 C 19.094255 22 20 21.094255 20 20 L 20 8 L 14 2 L 6 2 z M 6 4 L 13 4 L 13 9 L 18 9 L 18 20 L 6 20 L 6 4 z M 8 12 L 8 14 L 16 14 L 16 12 L 8 12 z M 8 16 L 8 18 L 16 18 L 16 16 L 8 16 z"/></svg></div>
                    <h3 className="lect_one">Lecture Three</h3>
                </div>
               <div className="right_lect_block_4">
                    <a href="#"><HiDownload/></a>
               </div>
            </div>
    
            <div className="lect_slides">
                <div className="left_lect_block_4">
                    <div className="doc_icon_50x50"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="30px" height="30px">    <path d="M 6 2 C 4.9057453 2 4 2.9057453 4 4 L 4 20 C 4 21.094255 4.9057453 22 6 22 L 18 22 C 19.094255 22 20 21.094255 20 20 L 20 8 L 14 2 L 6 2 z M 6 4 L 13 4 L 13 9 L 18 9 L 18 20 L 6 20 L 6 4 z M 8 12 L 8 14 L 16 14 L 16 12 L 8 12 z M 8 16 L 8 18 L 16 18 L 16 16 L 8 16 z"/></svg></div>
                    <h3 className="lect_one">Lecture Four</h3>
                </div>
               <div className="right_lect_block_4">
                    <a href="#"><HiDownload/></a>
               </div>
            </div>

            <div className="lect_slides">
                <div className="left_lect_block_4">
                    <div className="doc_icon_50x50"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="30px" height="30px">    <path d="M 6 2 C 4.9057453 2 4 2.9057453 4 4 L 4 20 C 4 21.094255 4.9057453 22 6 22 L 18 22 C 19.094255 22 20 21.094255 20 20 L 20 8 L 14 2 L 6 2 z M 6 4 L 13 4 L 13 9 L 18 9 L 18 20 L 6 20 L 6 4 z M 8 12 L 8 14 L 16 14 L 16 12 L 8 12 z M 8 16 L 8 18 L 16 18 L 16 16 L 8 16 z"/></svg></div>
                    <h3 className="lect_one">Lecture Five</h3>
                </div>
               <div className="right_lect_block_4">
                    <a href="#"><HiDownload/></a>
               </div>
            </div>
    
            <div className="lect_slides">
                <div className="left_lect_block_4">
                    <div className="doc_icon_50x50"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="30px" height="30px">    <path d="M 6 2 C 4.9057453 2 4 2.9057453 4 4 L 4 20 C 4 21.094255 4.9057453 22 6 22 L 18 22 C 19.094255 22 20 21.094255 20 20 L 20 8 L 14 2 L 6 2 z M 6 4 L 13 4 L 13 9 L 18 9 L 18 20 L 6 20 L 6 4 z M 8 12 L 8 14 L 16 14 L 16 12 L 8 12 z M 8 16 L 8 18 L 16 18 L 16 16 L 8 16 z"/></svg></div>
                    <h3 className="lect_one">Lecture Six</h3>
                </div>
               <div className="right_lect_block_4">
                    <a href="#"><HiDownload/></a>
               </div>
            </div>
    
            <div className="lect_slides">
                <div className="left_lect_block_4">
                    <div className="doc_icon_50x50"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="30px" height="30px">    <path d="M 6 2 C 4.9057453 2 4 2.9057453 4 4 L 4 20 C 4 21.094255 4.9057453 22 6 22 L 18 22 C 19.094255 22 20 21.094255 20 20 L 20 8 L 14 2 L 6 2 z M 6 4 L 13 4 L 13 9 L 18 9 L 18 20 L 6 20 L 6 4 z M 8 12 L 8 14 L 16 14 L 16 12 L 8 12 z M 8 16 L 8 18 L 16 18 L 16 16 L 8 16 z"/></svg></div>
                    <h3 className="lect_one">Lecture Seven</h3>
                </div>
               <div className="right_lect_block_4">
                    <a href="#"><HiDownload/></a>
               </div>
            </div>
    
            <div className="lect_slides">
                <div className="left_lect_block_4">
                    <div className="doc_icon_50x50"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="30px" height="30px">    <path d="M 6 2 C 4.9057453 2 4 2.9057453 4 4 L 4 20 C 4 21.094255 4.9057453 22 6 22 L 18 22 C 19.094255 22 20 21.094255 20 20 L 20 8 L 14 2 L 6 2 z M 6 4 L 13 4 L 13 9 L 18 9 L 18 20 L 6 20 L 6 4 z M 8 12 L 8 14 L 16 14 L 16 12 L 8 12 z M 8 16 L 8 18 L 16 18 L 16 16 L 8 16 z"/></svg></div>
                    <h3 className="lect_one">Lecture Eight</h3>
                </div>
               <div className="right_lect_block_4">
                    <a href="#"><HiDownload/></a>
               </div>
            </div>
        </div>
    </div>
  

    <div className="ref_books">
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
    </div>


    <Footer/>
    
    
    </div>
  )
}

export default Course;