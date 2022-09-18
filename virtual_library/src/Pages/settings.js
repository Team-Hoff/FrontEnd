import React from "react";
import "../Components/settings.css";


export default function Settings(){

    return(
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
                    <h1>Settings Page</h1>
                    <h2>Full Name</h2>
                    <p className="answer">Nicholina Adjetey <button class="btn">update</button></p>
                    <h2>Programmme</h2>
                    <p className="answer">Computer Engineeering</p>
                    <h2>Level</h2>
                    <p className="answer">300 <button class="btn">update</button></p>
                    <h2>Email</h2>
                    <p className="answer">adjeteynicholina@gmail.com <button class="btn">update</button></p>
                    <h2>Password</h2>
                    <p className="answer">******<button class="btn">update</button></p>
                </div>
            </div> 
        </div> 
    </div>
    )
}