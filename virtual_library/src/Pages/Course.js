import React from 'react';
import '../Components/course.css';
import book from '../Assets/Asset/book.jpg';
import {HiDownload} from 'react-icons/hi';
import bgImg from "../Assets/Asset/anne-nygard-cA8VTQeHU0c-unsplash.jpg";
import Profiledp from '../Components/Profiledropdown/profiledp';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';

const Course = () => {
  return (
    <div>
        <Navbar/>

    <div className="hero" style={{background: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),
    url(${bgImg})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%'}}>
        <h1 className="hero_head">Semi-Conductor Devices</h1>
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
    
    <Footer/>
    {/* <div className='fo'>
    <footer class="footer-display">

      <div class="footer-left">
      <h3 >Virtual<span>library</span></h3>

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

  
  


    
    
    
    </div>
  )
}

export default Course;