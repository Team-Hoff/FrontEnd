import React from "react"
import "./profilepage.css"

export default function Profile(){

    return(
        <div className="container">

               
             
                <div className="profile-container">


                <div className="img-container">


                    <div className="image">
                    {/* <img src={icon} alt="User Profile" style={{width: "20vw", height: "30vh", borderRadius: "50%"}}/> */}
                    </div>
                    
                 </div>


                 


                 <div className="profile-details">

                    <h1 className="profile-header">PROFILE</h1>
                    <div><span>NAME:</span>             jUMMAI</div>
                    <div><span>LEVEL:</span>            100</div>
                    <div><span>PROGRAMME:</span>        COMPUTER ENGINEERING</div>
                    <div><span>COLLEGE:</span>          ENGINEERING</div>


                 </div>





                </div>

        </div>
        
    )
}