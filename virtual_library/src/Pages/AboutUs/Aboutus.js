import React from "react";
import "./Aboutus.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import GoBack from "../../Components/GoBack/GoBack";


function Aboutus(){

  return(
   <div>

    <Navbar/>
     
            <div className="About-us">
            <div style={{display:'flex'}}>
            <div style={{marginTop:'25px'}}><GoBack/></div> 

            <div className="AboutUs-image">

                <div className="group-name"></div>

            </div>
            </div>


            <div className="team">

                <h2 className="highlights">TEAM HOFF</h2>

                <p>We are a team made up of 12 people who share the same interest and vision. </p>


            </div>

            <div className="vision">
                <h2 style={{textAlign:'center'}} className="highlights">VISION, MISSION AND VALUES </h2>

                <div className="info">
                            <div className="box box1">
                                <h3 className="highlights">OUR VISION</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>

                            <div className="box box1">
                                <h3 className="highlights">OUR MISSION</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>

                            <div className="box">
                                <h3 className="highlights">OUR VALUES</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                </div>
                
            </div>

            <div className="services">
                    <h2 className="highlights">OUR SEVICES</h2>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>






        </div>

    <Footer/>
   </div>

    
  )



}

export default Aboutus;