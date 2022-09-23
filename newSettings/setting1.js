import React, { useState } from "react";
import "./setting1.css"
// import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"




function Setting(){

    const preLoadedValues = {
        name: "Jummai",
        username: "momo",
        programme: "computer engineering",
        level: "100",
        password: "*************",
        email: "jummyking@gmail.com"
    
    }

    
    const [value,setValue]=useState();

    function setNewValue(event){
        setValue(event.target.value)
        console.log(value);
     }

     function setNewUserDetails(){
          console.log("button clicked")
     }

    
    return(
       
        <div  className="settings-body">

             <div className="setting-header ">
                <h3>Hello Jummai</h3>
            </div> 
            
             
           <div className="profile-input">
                        

            <div className="info-division">
                        <input 
                        type="text" 
                        placeholder="full name"
                        name="name" 
                        defaultValue={preLoadedValues.name}
                        onChange={setNewValue}/>
                        <span>Full Name</span>

                        <button onClick={setNewUserDetails}>UPDATE</button>

            </div>


            <div className="info-division">
                        <input 
                        type="text" 
                        placeholder="Username"
                        name="username" 
                        defaultValue={preLoadedValues.username}
                        onChange={setNewValue}/>
                        <span>Username</span>

                        <button onClick={setNewUserDetails}>UPDATE</button>

            </div>

            <div className="info-division">
                        <input 
                        type="text" 
                        placeholder="Programme"
                        name="Programme" 
                        defaultValue={preLoadedValues.programme}
                        onChange={setNewValue}/>
                        <span>Programme</span>

                        <button onClick={setNewUserDetails}>UPDATE</button>

            </div>

            <div className="info-division">
                        <input 
                        type="text" 
                        placeholder="Level"
                        name="level" 
                        defaultValue={preLoadedValues.level}
                        onChange={setNewValue}/>
                        <span>Level</span>

                        <button onClick={setNewUserDetails}>UPDATE</button>

            </div>

            <div className="info-division">
                        <input 
                        type="password" 
                        placeholder="Password"
                        name="Password" 
                        defaultValue={preLoadedValues.password}
                        onChange={setNewValue}/>
                        <span>Password</span>

                        <button onClick={setNewUserDetails}>UPDATE</button>

            </div>

            <div className="info-division">
                        <input 
                        type="text" 
                        placeholder="Email"
                        name="email" 
                        defaultValue={preLoadedValues.email}
                        />
                        <span>Email</span>

                        

            </div>




            
           </div>
        </div>
        
    )
}


export default Setting;