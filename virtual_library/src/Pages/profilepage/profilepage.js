import React from "react";
import "./profilepage.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import GoBack from "../../Components/GoBack/GoBack";

export default function Profile(){

    return(

        <div>
        <Navbar/>
        <div style={{display:'flex'}}>
        <div style={{marginTop:'25px'}}><GoBack/></div>  

        <div className="contain">             
                <div className="profile-container">
                <div className="img-container">
                    <div className="image">
                    </div>                    
                 </div>
                 
                 <div className="profile-details">
                    <h1 className="profile-header">MY PROFILE</h1>
                    <div><span>FULL NAME:</span>             jUMMAI</div>
                    <div><span>EMAIL:</span>             jUMMAI</div>
                    <div><span>LEVEL:</span>            100</div>
                    <div><span>DEPARTMENT:</span>        COMPUTER ENGINEERING</div>
                 </div>

                </div>

        </div>
        </div>
        <Footer />
        </div>
        
    )
}