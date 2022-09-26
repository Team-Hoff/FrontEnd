import React from "react";
import "../Components/settings.css";
import { useAuth } from "./hooks/useAuth";
import { useState } from "react";
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import GoBack from "../Components/GoBack/GoBack";
import axios from "./utils/axios";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { yub_object } from "./utils/yup_object";



export default function Settings(){

    const {user, login} = useAuth();
    const {fullname, username, email, programme, year, password} = user;
     const [value,setValue]=useState();
     
     const [passwordState, setPasswordState] = useState(false);
     const [changePassword, setChangePassword] = useState(false);

     function newPassword(){
        setChangePassword(prevState => !prevState)
    } 

     function toggleEyeButton(){
        setPasswordState(
                prevState => !prevState
               
            )            
    } 


     function setNewvalue(event){
        setValue(event.target.value)
        
     }



     function setNewUserDetails(field,new_value){
        axios.post("/setting",
        {
            // value:[field,new_value],
            // original_email:`${email}`
            field: field,
            new_value: value
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

    
    
    <div className="settingss-body">
    <div style={{marginTop:'25px', width:'60px'}}><GoBack/></div> 
        <div className="settings-container">
       {
         user.length !== 0 ?(
            <div className="rightbox">
                <div className="setting">

                    <h1 className="h11">MY PROFILE</h1>

                    <form    validationSchema={ yub_object }>

                        

                    <h2 className="h12">Email</h2>
                    <p className="answer" style={{paddingLeft: "10px", color: "rgba(0, 0, 0, 0.5)"}}>{email}</p>
                    
                    <h2 className="h12">Full Name</h2>
                    <p className="answer"><input type="text" placeholder={fullname} maxLength="29" onChange={setNewvalue} /><br/><button onClick={()=>setNewUserDetails('fullname', value)} className="btns">update</button></p>

                    <h2 className="h12">Username</h2>
                    <p className="answer"><input type="text" placeholder={username} maxLength="29" onChange={setNewvalue} /><br/><button onClick={()=>setNewUserDetails('username', value)} className="btns">update</button></p>

                    <h2 className="h12">Programmme</h2>
                    <p className="answer"><input type="text" placeholder={programme} maxLength="29" onChange={setNewvalue} /><br/><button onClick={()=>setNewUserDetails('programme', value)} className="btns">update</button></p>

                    <h2 className="h12">YEAR</h2>
                    <p className="answer"><input type="text" placeholder={year} maxLength="29" onChange={setNewvalue} /><br/><button onClick={()=>setNewUserDetails('year', value)} className="btns">update</button></p>

                    <div className="passwordSection">CHANGE PASSWORD</div>
                    
                    <h2 className="h12">Old Password</h2>
                    
                    <p className="answer"><input style={{width:'250px'}} maxLength="24" type={passwordState? "text" : "password"}  placeholder={password}/><button onClick={toggleEyeButton} className="eye-btns">{
                            passwordState?   <AiOutlineEyeInvisible/> : <AiOutlineEye/>
                          }
                    </button><br/>
                    {
                        changePassword? "": <><button onClick={newPassword} className="btns">update</button> </>               
                     }
                    
                    </p>

                    {
                        changePassword? 
                        <div>
                            <h2 className="h12">New Password</h2>
                              <p className="answer"><input style={{width:'250px'}} maxLength="24" type={passwordState? "text" : "password"}  placeholder={password}/><button onClick={toggleEyeButton} className="eye-btns">{
                            passwordState?   <AiOutlineEyeInvisible/> : <AiOutlineEye/>
                          }
                    </button><br/>


                    </p>

                    <h2 className="h12">Confirm New Password</h2>       
                    <p className="answer"><input style={{width:'250px'}} maxLength="24" type={passwordState? "text" : "password"}  placeholder={password}/><button onClick={toggleEyeButton} className="eye-btns">{
                            passwordState?   <AiOutlineEyeInvisible/> : <AiOutlineEye/>
                          }
                    </button><br/>
                    <button onClick={()=>setNewUserDetails('password', value)} className="btns">update</button>
                                       
                    </p>  

                    </div>
                        
                        :""
                    }


           </form>
                    

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