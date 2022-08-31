import React from "react"
import "./profilepage.css"

export default function Profile(){

    return(
        <div className="container">

            <div className="Left-display">
               
            </div>

            <div className="Right-display">
                <h2>PROFILE</h2>

                <div className="details-container">

                <div className="details det-1">
                 <div >FIRST NAME</div>
                 <div >LAST NAME</div>
                 <div >PROGRAMME</div>
                 <div>LEVEL</div>
                 <div>EMAIL</div>
                </div>

                <div className="details det-2">
                 <div >Jummai</div>
                 <div >Alhassan</div>
                 <div >Computer</div>
                 <div>300</div>
                 <div>jummy30@gmail.com</div>
                               
                </div>
                
               
                
               
                
                
                </div>
                
            </div>

        </div>
    )
}