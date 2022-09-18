import React from 'react';
import '../Components/home.css';
import Searchbar from '../Components/Searchbar/Searchbar';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import ProgramCard from '../Components/ProgramCard/ProgramCard';
import CourseData from '../Components/Data/CourseData.json';


const Home = () => {

  return (
    <div className="Everything">

        <Navbar/>
      
      <section className="below_nav">
        <div className="container">
            <div className="d-sm-flex align-items-center 
            justify-content-between">
                <div>
                    <h1 style={{textAlign:'center', paddingTop:'30px'}}> <span className="text-warning">
                        WELCOME TO THE CoE VIRTUAL LIBRARY
                    </span></h1>
                    <p style={{color:'white', textAlign:'center'}}>You don't need to go through  the stress of asking your colleagues for your course materials. Get all your engineering  course materials and tutorial video links right here !!</p>      
                    <div className="searchb"><Searchbar placeholder="Search for course..." data={CourseData}/></div>
                </div>              
            </div>
        </div>
    </section>
      <div className='progcard'>
      <ProgramCard/> 
      </div>

    <Footer/>

  </div>
  )
}

export default Home;