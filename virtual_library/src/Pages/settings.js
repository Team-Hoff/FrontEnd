import React from "react";
import "../Components/settings.css";
import { useAuth } from "./hooks/useAuth";
import { useState } from "react";
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import GoBack from "../Components/GoBack/GoBack";
import { Axios } from "axios";


export default function Settings(){

    const {user, login} = useAuth();
    const {fullname, username, email, programme, year, password} = user;
     const [value,setValue]=useState();
     


     function setNewvalue(event){
        setValue(event.target.value)
        console.log(value);
     }



     function setNewUserDetails(field,new_value){
        Axios.post("/setting",
        {
            value:[field,new_value],
            original_email:`${email}`
         })
         .then((res)=>{
            console.log(res)
            login();
         })
         .catch((err)=>{
            console.log(err)
         })


     }

    return(
     <div>   
    <Navbar/>
    <div className="settings-body">
    <div style={{marginTop:'25px', width:'60px'}}><GoBack/></div> 
        <div className="settings-container">
       {
         user.length !== 0 ?(
            <div className="rightbox">
                <div className="setting">
                    <h1 className="h11">MY PROFILE</h1>

                    <h2 className="h12">Email</h2>
                    <p className="answer" style={{paddingLeft: "10px", color: "rgba(0, 0, 0, 0.5)"}}>{email}</p>

                    <h2 className="h12">Full Name</h2>
                    <p className="answer"><input type="text" placeholder={fullname} onChange={setNewvalue} /><button onClick={setNewUserDetails} className="btns">update</button></p>

                    <h2 className="h12">Username</h2>
                    <p className="answer"><input type="text" placeholder={username} onChange={setNewvalue} /><button onClick={setNewUserDetails} className="btns">update</button></p>

                    <h2 className="h12">Programmme</h2>
                    <p className="answer"><input type="text" placeholder={programme} onChange={setNewvalue} /><button onClick={setNewUserDetails} className="btns">update</button></p>

                    <h2 className="h12">Level</h2>
                    <p className="answer"><input type="text" placeholder={year} onChange={setNewvalue} /><button onClick={setNewUserDetails} className="btns">update</button></p>
                    
                    <h2 className="h12">Password</h2>
                    <p className="answer"><input type="text" placeholder={password} onChange={setNewvalue} /><button onClick={setNewUserDetails} className="btns">update</button></p>

                    

                </div>
                
            </div>
         ): ""
        } 
        </div> 
    </div>
    <Footer/>
    </div>
    )
}