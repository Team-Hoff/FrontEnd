import React from 'react';
import '../Components/course.css';
import book from '../Assets/Asset/book.jpg';
// import video from './Asset/anne-nygard-cA8VTQeHU0c-unsplash.jpg';
import {HiDownload} from 'react-icons/hi';
import Profiledp from '../Components/Profiledropdown/profiledp';

const Course = () => {
  return (
    <div>
       <nav class="nav-main">
        <div class="navbars">
          <div style={{display:'flex'}}>
          <div class="logo-image"></div>
            <div class="logo"><h1 class="my_logos">
                <span style={{fontSize:'20px'}}>Virtual</span> <span class="library">Library</span>
            </h1></div>
            </div>
              <ul class="nav_list">
                  <li class="nav-links"><a href='/home'>Home</a></li>
                  <li class="nav-links"><a href='#'>About</a></li>
                  <li class="nav-links"><a href='#'>Help</a></li>
                  <Profiledp/>
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
                <img src={book} alt="Reference Book Image" height="100px"></img>
                <h3 class="book_label">Book One</h3>
            </div>
            <div class="ref_cov_page">
                <img src={book} alt="Reference Book Image" height="100px"></img>
                <h3 class="book_label">Book One</h3>
            </div>
            <div class="ref_cov_page">
                <img src={book} alt="Reference Book Image" height="100px"></img>
                <h3 class="book_label">Book One</h3>
            </div>
           
        </div>
    </div>

    <h1 class="ref_book_head">Recommended videos</h1>
    
    <div class="foots">
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
    </div>
    <hr/>
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

export default Course;