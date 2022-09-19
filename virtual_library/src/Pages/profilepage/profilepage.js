import React from "react";
import "./profilepage.css";
import { useAuth } from "../hooks/useAuth";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import GoBack from "../../Components/GoBack/GoBack";

export default function Profile(){
     
        const {user} = useAuth();
        const {fullname, username, email, programme, year} = user;
        // const user = 
        //  {
        //     fullname: "Isaac Epaphras Nana Sam",
        //     username: "Synx",
        //     email: "isinesam@gmail.com",
        //     programme: "Computer Engineering",
        //     year: 400
        //  }   
        

        // console.log(user)

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
        {
         user.length !== 0 ?(
                 <div className="profile-details">
                    <h1 className="profile-header">MY PROFILE</h1>
                    <div><span>FULL NAME:</span>             {fullname}</div>
                    <div><span>USERNAME:</span>             {username}</div>
                    <div><span>EMAIL:</span>             {email}</div>
                    <div><span>DEPARTMENT:</span>        {programme}</div>
                    <div><span>LEVEL:</span>            {year}</div>
                 </div>
            ) : "" 
        }
                </div>

        </div>
        </div>
        <Footer />
        </div>
        
    )
}