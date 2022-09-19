import React from "react";
import "../Components/settings.css";
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';


export default function Settings(){

    return(
     <div>   
    <Navbar/>
    <div className="settings-body">
        <div class="settings-container">
            <div class="leftbox">
                <div class="settings-logo">
                <div>V</div>
                <div>i</div>
                <div>r</div>
                <div>t</div>
                <div>u</div>
                <div>a</div>
                <div>l</div>
                <div>L</div>
                <div>i</div>
                <div>b</div>
                <div>r</div>
                <div>a</div>
                <div>r</div>
                <div>y</div>
            </div>
        </div>
       
            <div class="rightbox">
                <div class="setting">
                    <h1 className="h11">Settings Page</h1>
                    <h2 className="h12">Full Name</h2>
                    <p className="answer">Nicholina Adjetey <button class="btns">update</button></p>
                    <h2 className="h12">Programmme</h2>
                    <p className="answer">Computer Engineeering</p>
                    <h2 className="h12">Level</h2>
                    <p className="answer">300 <button class="btns">update</button></p>
                    <h2 className="h12">Email</h2>
                    <p className="answer">adjeteynicholina@gmail.com <button class="btns">update</button></p>
                    <h2 className="h12">Password</h2>
                    <p className="answer">******<button class="btns">update</button></p>
                </div>
            </div> 
        </div> 
    </div>
    <Footer/>
    </div>
    )
}