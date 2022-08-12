import React from 'react';
import './course.css';
import book from './Asset/book.jpg';
import video from './Asset/anne-nygard-cA8VTQeHU0c-unsplash.jpg';
import {HiDownload} from 'react-icons/hi'

const Course = () => {
  return (
    <div>
      <nav class="nav-main ">
        <div class="navbar">
            <div class="logo-image"></div>
            <div class="logo">
                <h1 class="my_logo">
                <span style={{fontSize:'20px'}}>Virtual</span> <span class="library">Library</span>
                </h1>
            </div>
                <ul class="nav_list">
                    <li class="nav-links"><a href='#'>Home</a></li>
                    {/* <li class="nav-links"><a href='#'>Help</a></li> */}
                </ul>
        </div>
    </nav>


    <div class="hero">
        <h1 class="hero_head">Semi-Conductor Devices</h1>
    </div>
    
    <div class="containers">
        <div class="slides">
            <h1 class="lect_head">Slides</h1>
            <div class="lect_slides">
                <div class="left_lect_block_4">
                    <div class="doc_icon_50x50"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="30px" height="30px">    <path d="M 6 2 C 4.9057453 2 4 2.9057453 4 4 L 4 20 C 4 21.094255 4.9057453 22 6 22 L 18 22 C 19.094255 22 20 21.094255 20 20 L 20 8 L 14 2 L 6 2 z M 6 4 L 13 4 L 13 9 L 18 9 L 18 20 L 6 20 L 6 4 z M 8 12 L 8 14 L 16 14 L 16 12 L 8 12 z M 8 16 L 8 18 L 16 18 L 16 16 L 8 16 z"/></svg></div>
                    <h3 class="lect_one">Lecture One</h3>
                </div>
               <div class="right_lect_block_4">
                    <a href="#"><HiDownload/></a>
               </div>
            </div>
    
            <div class="lect_slides">
                <div class="left_lect_block_4">
                    <div class="doc_icon_50x50"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="30px" height="30px">    <path d="M 6 2 C 4.9057453 2 4 2.9057453 4 4 L 4 20 C 4 21.094255 4.9057453 22 6 22 L 18 22 C 19.094255 22 20 21.094255 20 20 L 20 8 L 14 2 L 6 2 z M 6 4 L 13 4 L 13 9 L 18 9 L 18 20 L 6 20 L 6 4 z M 8 12 L 8 14 L 16 14 L 16 12 L 8 12 z M 8 16 L 8 18 L 16 18 L 16 16 L 8 16 z"/></svg></div>
                    <h3 class="lect_one">Lecture Two</h3>
                </div>
               <div class="right_lect_block_4">
                    <a href="#"><HiDownload/></a>
               </div>
            </div>
    
            <div class="lect_slides">
                <div class="left_lect_block_4">
                    <div class="doc_icon_50x50"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="30px" height="30px">    <path d="M 6 2 C 4.9057453 2 4 2.9057453 4 4 L 4 20 C 4 21.094255 4.9057453 22 6 22 L 18 22 C 19.094255 22 20 21.094255 20 20 L 20 8 L 14 2 L 6 2 z M 6 4 L 13 4 L 13 9 L 18 9 L 18 20 L 6 20 L 6 4 z M 8 12 L 8 14 L 16 14 L 16 12 L 8 12 z M 8 16 L 8 18 L 16 18 L 16 16 L 8 16 z"/></svg></div>
                    <h3 class="lect_one">Lecture Three</h3>
                </div>
               <div class="right_lect_block_4">
                    <a href="#"><HiDownload/></a>
               </div>
            </div>
    
            <div class="lect_slides">
                <div class="left_lect_block_4">
                    <div class="doc_icon_50x50"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="30px" height="30px">    <path d="M 6 2 C 4.9057453 2 4 2.9057453 4 4 L 4 20 C 4 21.094255 4.9057453 22 6 22 L 18 22 C 19.094255 22 20 21.094255 20 20 L 20 8 L 14 2 L 6 2 z M 6 4 L 13 4 L 13 9 L 18 9 L 18 20 L 6 20 L 6 4 z M 8 12 L 8 14 L 16 14 L 16 12 L 8 12 z M 8 16 L 8 18 L 16 18 L 16 16 L 8 16 z"/></svg></div>
                    <h3 class="lect_one">Lecture Four</h3>
                </div>
               <div class="right_lect_block_4">
                    <a href="#"><HiDownload/></a>
               </div>
            </div>

            <div class="lect_slides">
                <div class="left_lect_block_4">
                    <div class="doc_icon_50x50"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="30px" height="30px">    <path d="M 6 2 C 4.9057453 2 4 2.9057453 4 4 L 4 20 C 4 21.094255 4.9057453 22 6 22 L 18 22 C 19.094255 22 20 21.094255 20 20 L 20 8 L 14 2 L 6 2 z M 6 4 L 13 4 L 13 9 L 18 9 L 18 20 L 6 20 L 6 4 z M 8 12 L 8 14 L 16 14 L 16 12 L 8 12 z M 8 16 L 8 18 L 16 18 L 16 16 L 8 16 z"/></svg></div>
                    <h3 class="lect_one">Lecture Five</h3>
                </div>
               <div class="right_lect_block_4">
                    <a href="#"><HiDownload/></a>
               </div>
            </div>
    
            <div class="lect_slides">
                <div class="left_lect_block_4">
                    <div class="doc_icon_50x50"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="30px" height="30px">    <path d="M 6 2 C 4.9057453 2 4 2.9057453 4 4 L 4 20 C 4 21.094255 4.9057453 22 6 22 L 18 22 C 19.094255 22 20 21.094255 20 20 L 20 8 L 14 2 L 6 2 z M 6 4 L 13 4 L 13 9 L 18 9 L 18 20 L 6 20 L 6 4 z M 8 12 L 8 14 L 16 14 L 16 12 L 8 12 z M 8 16 L 8 18 L 16 18 L 16 16 L 8 16 z"/></svg></div>
                    <h3 class="lect_one">Lecture Six</h3>
                </div>
               <div class="right_lect_block_4">
                    <a href="#"><HiDownload/></a>
               </div>
            </div>
    
            <div class="lect_slides">
                <div class="left_lect_block_4">
                    <div class="doc_icon_50x50"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="30px" height="30px">    <path d="M 6 2 C 4.9057453 2 4 2.9057453 4 4 L 4 20 C 4 21.094255 4.9057453 22 6 22 L 18 22 C 19.094255 22 20 21.094255 20 20 L 20 8 L 14 2 L 6 2 z M 6 4 L 13 4 L 13 9 L 18 9 L 18 20 L 6 20 L 6 4 z M 8 12 L 8 14 L 16 14 L 16 12 L 8 12 z M 8 16 L 8 18 L 16 18 L 16 16 L 8 16 z"/></svg></div>
                    <h3 class="lect_one">Lecture Seven</h3>
                </div>
               <div class="right_lect_block_4">
                    <a href="#"><HiDownload/></a>
               </div>
            </div>
    
            <div class="lect_slides">
                <div class="left_lect_block_4">
                    <div class="doc_icon_50x50"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="30px" height="30px">    <path d="M 6 2 C 4.9057453 2 4 2.9057453 4 4 L 4 20 C 4 21.094255 4.9057453 22 6 22 L 18 22 C 19.094255 22 20 21.094255 20 20 L 20 8 L 14 2 L 6 2 z M 6 4 L 13 4 L 13 9 L 18 9 L 18 20 L 6 20 L 6 4 z M 8 12 L 8 14 L 16 14 L 16 12 L 8 12 z M 8 16 L 8 18 L 16 18 L 16 16 L 8 16 z"/></svg></div>
                    <h3 class="lect_one">Lecture Eight</h3>
                </div>
               <div class="right_lect_block_4">
                    <a href="#"><HiDownload/></a>
               </div>
            </div>
        </div>
    </div>
  

    <div class="ref_books">
        <h1 class="ref_book_head">Reference Books</h1>
        <div class="ref_bookss">
            <div class="ref_cov_page">
                <img src={book} alt="Reference Book Image" height="300px"></img>
                <h3 class="book_label">Book One</h3>
            </div>
            <div class="ref_cov_page">
                <img src={book} alt="Reference Book Image" height="300px"></img>
                <h3 class="book_label">Book One</h3>
            </div>
            <div class="ref_cov_page">
                <img src={book} alt="Reference Book Image" height="300px"></img>
                <h3 class="book_label">Book One</h3>
            </div>
            <div class="ref_cov_page">
                <img src={book} alt="Reference Book Image" height="300px"></img>
                <h3 class="book_label">Book One</h3>
            </div>
        </div>
    </div>
    
    


   <footer>
    <div class="footer-top bg-dark footer-dark py-2"  style={{minWidth:'100vw'}}>
      <div>
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
            <h5 class="text-white">Other Courses</h5>
            <ul class="list-unstyled">
                <li><a href='#'></a></li>
                  <li><a href='#'></a></li>
                  <li><a href='#'></a></li>
                  <li><a href='#'></a></li>
                  <li><a href='#'></a></li>
                  <li><a href='#'></a></li>
            </ul></div>
        </div>
      </div>
    </div>
  </footer>
    
    
    
    </div>
  )
}

export default Course;