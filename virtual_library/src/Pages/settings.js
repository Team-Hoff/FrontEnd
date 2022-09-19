import React from "react";
import "../Components/settings.css";
import { useAuth } from "./hooks/useAuth";
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import GoBack from "../Components/GoBack/GoBack";


export default function Settings(){

    const {user} = useAuth();
    const {fullname, username, email, programme, year, password} = user;
    

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
                    <h2 className="h12">Full Name</h2>
                    <p className="answer">{fullname} <button className="btns">update</button></p>
                    <h2 className="h12">Username</h2>
                    <p className="answer">{username} <button className="btns">update</button></p>
                    <h2 className="h12">Programmme</h2>
                    <p className="answer">{programme} <button className="btns">update</button></p>
                    <h2 className="h12">Level</h2>
                    <p className="answer">{year.slice(6)} <button className="btns">update</button></p>
                    <h2 className="h12">Email</h2>
                    <p className="answer">{email}<button className="btns">update</button></p>
                    <h2 className="h12">Password</h2>
                    <p className="answer">{password}<button className="btns">update</button></p>
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