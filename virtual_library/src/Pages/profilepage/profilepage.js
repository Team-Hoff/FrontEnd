import React from "react"
import "./profilepage.css"

export default function Profile(){
    return(
        <div>
            <div class = "container">
                <div class = "top-segment">
                    <a href="">logout</a>
                    <a href="">home</a>
                </div>
                

                <div class ="mini-container">
                    <div class = "left-card">
                        <p>hello</p>
                    </div>
                    <div class = "right-card">
                        <div class="Name"><h5>MY PROFILE</h5></div>
                        <div class = "display">
                        <div>Full name</div>
                        <div>Ben</div>

                        </div>
                        <div class="display">
                            <div>Email</div>
                            <div>ben@gmail.com</div>

                        </div>
                      
                        <div  class="display">
                        <div>Programme</div>
                        <div>Computer Engineering</div>


                        </div>
                        <div  class="display">
                        <div>Level</div>
                        <div>100</div>

                        </div>
                    </div>

                </div>


            
                
            </div>
            
        
           
        </div>
    )

}