import React from "react";
import "../Components/settings.css";
import { useAuth } from "./hooks/useAuth";
import { useState } from "react";
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import GoBack from "../Components/GoBack/GoBack";
import axios from "./utils/axios";
import { Form, Formik } from "formik";
import * as Yup from 'yup';
import { ThreeDots} from 'react-loader-spinner';
import { SettingsInput, SettingsSelect } from "../Components/Form";



export default function Settings(){

    const {user, login} = useAuth();
    const [loading, setLoading] = useState(false);
    const {fullname, username, email, programme, year, password} = user;
    const [color, setcolor] = useState("gray");
    const [colour, setcolour] = useState("gray");
    const Programmes = [{id: 1,name: "Agricultural Engineering"},
                        {id: 2,name:"Chemical Engineering"},
                        {id: 3,name:"Civil Engineering"},
                        {id: 4,name:"Geomatic Engineering"},
                        {id: 5,name:"Materials Engineering"},
                        {id: 6,name:"Mechanical Engineering"},
                        {id: 7,name:"Electrical Engineering"},
                        {id: 8,name:"Computer Engineering"},
                        {id: 9,name:"Aerospace Engineering"},
                        {id: 10,name:"Petroleum Engineering"},
                        {id: 11,name:"Telecom Engineering"},
                        {id: 12,name:"Geological Engineering"},
                        {id: 13,name:"Biomedical Engineering"},
                        {id: 14,name:"Petrochemical Engineering"},
                        {id: 15,name:"Metallurgical Engineering"}
                    ]
    const Level = [{id: 1, level: "Level 100"},
                    {id: 2, level: "Level 200"},
                    {id: 3, level: "Level 300"},
                    {id: 4, level: "Level 400"}
                  ]
     const [changePassword, setChangePassword] = useState(false);

     function newPassword(){
        setChangePassword(prevState => !prevState)
    } 

     const ModProg = Programmes.filter((value)=> value.name !== programme)
     const ModLevel = Level.filter((value)=> value.level !== year)

    function setNewyear(event){
        const p = event.target.value
        if (p === year){
            setcolour("gray")
        }
        else{
            setcolour("black")
        }
    }

    
    function setNewprog(event){
        const p = event.target.value
        if (p === programme){
            setcolor("gray")
        }
        else{
            setcolor("black")
        }
        
    }
     
    const setNewUserDetails = async (field, new_value)=>{
        await axios.post("/settings",
       {
        field: field,
        new_value: new_value
       })
         .then((res)=>{
            console.log(res)
            login();
            setLoading(false)
         })
         .catch((err)=>{
            console.log(err)
            setLoading(false)
         })
     }

     if(loading ){
        return (
        <div>
            <div className="loader-container">
                <div className="spinner"></div>
            </div>
        </div>
        )
    }
     
     
    return(
     <div>   
    <Navbar/>
 
    <div className="settingss-body">
    <div style={{marginTop:'25px', width:'50px'}}><GoBack/></div> 
        <div className="settings-container">
       {
         user.length !== 0 ?(
            <div className="rightbox">
                <div className="setting">

                    <h1 className="h11">MY PROFILE</h1>

                    <h2 className="h12">Email</h2>
                    <p className="answer" style={{paddingLeft: "10px", color: "rgba(0, 0, 0, 0.5)"}}>{email}</p>
                    
                    <Formik
                        initialValues={{
                            fullnames:""
                        }}
                        validationSchema={
                            Yup.object({
                                fullnames: Yup.string()
                                .required("Enter new name to update")
                                .min(7, "Fullname is too short")
                                .max(29, "Fullname is too long")
                            })
                        }
                        
                        onSubmit={(values)=>{setNewUserDetails(
                                'fullname', values.fullnames
                            )
                                            
                    }}
                    >
                    {({isSubmitting})=>(
                    <Form>
                    <h2 className="h12">Full Name</h2>
                    <p className="answer">
                    <SettingsInput name="fullnames" type="text" placeholder={fullname} maxLength="29"/>

                    {/* { (Value === fullname || Value === "") ?(  */}
                    {!isSubmitting && (
                    <button type="submit" className="btns">update</button>
                    )}

                    {isSubmitting && (
                        <div style={{paddingLeft:'10px'}}>
                        <ThreeDots
                        color= "blue"
                        height = {20}
                        width = {20}
                        />
                        </div>
                    )}


                    {/* ):( */}
                    {/* <button onClick={()=>setNewUserDetails('fullname', Value)} className="btns">update</button> */}
                    {/* )} */}

                    </p>
                    </Form>
                    )}
                    </Formik>

                    <Formik
                        initialValues={{
                            usernames:""
                        }}
                        validationSchema={
                            Yup.object({
                                usernames: Yup.string()
                                .required("Enter new username to update")
                                .min(2, "Username is too short")
                                .max(29, "Username is too long")
                            })
                        }
                        
                        onSubmit={(values)=>{setNewUserDetails(
                                'username', values.usernames
                            )
                                            
                    }}
                    >
                    {({isSubmitting})=>(
                    <Form>
                    <h2 className="h12">Username</h2>
                    <p className="answer">
                    <SettingsInput name="usernames" type="text" placeholder={username} maxLength="29"/>
                    
                    {!isSubmitting && (
                    <button type="submit" className="btns">update</button>
                    )}

                    {isSubmitting && (
                        <div style={{paddingLeft:'10px'}}>
                        <ThreeDots
                        color= "blue"
                        height = {20}
                        width = {20}
                        />
                        </div>
                    )}
                   
                   
                    </p>
                    </Form>
                    )}
                    </Formik>

                    <Formik
                        initialValues={{
                            programmeselect:""
                        }}
                        validationSchema={
                            Yup.object({
                                programmeselect: Yup.string()
                                .oneOf(["Agricultural Engineering", "Chemical Engineering", "Civil Engineering", "Geomatic Engineering", "Materials Engineering", "Mechanical Engineering", "Electrical Engineering", "Computer Engineering", "Aerospace Engineering", "Petroleum Engineering", "Telecom Engineering", "Geological Engineering", "Biomedical Engineering", "Petrochemical Engineering", "Metallurgical Engineering"], "Select new Programme")
                                .required("Select new programme"),
                            })
                        }
                        
                        onSubmit={(values)=>{setNewUserDetails(
                                'programme', values.programmeselect
                            )
                                            
                    }}
                    >
                    {({isSubmitting})=>(
                    <Form onChange={setNewprog}>
                    <h2 className="h12">Programmme</h2>
                    <p className="answer">
                    <SettingsSelect name="programmeselect" className="sele" type="dropdown" style={{color:color}}>
                    <option selected="selected" style={{color: "rgba(0, 0, 0, 0.5)"}}>{programme}</option>
                    {
                        
                        ModProg.map((prog)=>(
                            <>
                            
                            <option style={{color:'black'}}>{prog.name}</option>
                            </>

                        ))
                    }
                    </SettingsSelect>
                    
                    {!isSubmitting && (
                    <button type="submit" className="btns">update</button>
                    )}

                    {isSubmitting && (
                        <div style={{paddingLeft:'10px'}}>
                        <ThreeDots
                        color= "blue"
                        height = {20}
                        width = {20}
                        />
                        </div>
                    )}
                    
                    </p>
                    </Form>
                    )}
                    </Formik>

                    <Formik
                        initialValues={{
                            yearselect:""
                        }}
                        validationSchema={
                            Yup.object({
                                yearselect: Yup.string()
                                .oneOf(["Level 100", "Level 200", "Level 300", "Level 400"], "Select new Year")
                                .required("Select new Year"),
                            })
                        }
                        
                        onSubmit={(values)=>{setNewUserDetails(
                                'year', values.yearselect
                            )
                                            
                    }}
                    >
                    {({isSubmitting})=>(
                    <Form onChange={setNewyear}>
                    <h2 className="h12">Year</h2>
                    <p className="answer">
                        
                    <SettingsSelect name="yearselect" className="sele" type="dropdown" style={{color:colour}}>
                    <option selected="selected" style={{color: "rgba(0, 0, 0, 0.5)"}}>{year}</option>
                        {
                        
                        ModLevel.map((level)=>(   
                            <>
                            
                            <option style={{color:'black'}}>{level.level}</option>
                            </>
                        ))
                    }
                    </SettingsSelect>
                     
                    {!isSubmitting && (
                    <button type="submit" className="btns">update</button>
                    )}

                    {isSubmitting && (
                        <div style={{paddingLeft:'10px'}}>
                        <ThreeDots
                        color= "blue"
                        height = {20}
                        width = {20}
                        />
                        </div>
                    )}

                   
                    </p>

                    </Form>
                    )}
                    </Formik>

                    <hr style={{marginBottom:'20px', marginTop:'20px'}}/>

                    <Formik
                        initialValues={{
                            oldpassword:"",
                            newpassword:"",
                            confirmpassword:"",
                        }}
                        validationSchema={
                            Yup.object({
                                oldpassword: Yup.string()
                                .required("Please enter your old password"),
                                newpassword: Yup.string()
                                .required("Please enter your new password")
                                .min(5, "Password is too short")
                                .max(24, "Password is too long")
                                .notOneOf([Yup.ref(password)],"Password is the same as old password"),
                                confirmpassword: Yup.string()
                                .required("Confirm your new password")
                                .oneOf([Yup.ref("newpassword")], "Password is not the same")
                            })
                        }
                        
                        onSubmit={(values)=>{setNewUserDetails(
                                'oldpassword', values.oldpassword
                            )
                                            
                    }}
                    >
                    {({isSubmitting})=>(
                    <Form>

                    <h2 className="h12">Password Change</h2>
                    <p className="answer">
                    <SettingsInput name="oldpassword" maxLength="24" type="password" placeholder="Enter your old password"/>
        
                    {
                        changePassword ? "" : <><button onClick={newPassword} className="btns">CLICK TO UPDATE PASSWORD</button> </>                
                     }
                    
                    </p>

                    {
                        changePassword? 
                        <div>
                            <h2 className="h12">New Password</h2>
                              <p className="answer">
                                <SettingsInput name="newpassword" maxLength="24" type="password"  placeholder="Enter your new password"/>
                               
                    </p>

                    <h2 className="h12">Confirm New Password</h2>       
                    <p className="answer">
                        <SettingsInput name="confirmpassword" maxLength="24" type="password"  placeholder="Confirm your new password"/>
                                       
                    </p>  

                    {!isSubmitting && (
                    <button type="submit" className="btns">update</button>
                    )}

                    {isSubmitting && (
                        <div style={{paddingLeft:'15px'}}>
                        <ThreeDots
                        color= "blue"
                        height = {20}
                        width = {20}
                        />
                        </div>
                    )}

                    </div>
                        
                        :""
                    }
                    </Form>
                    )}
                    </Formik>
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