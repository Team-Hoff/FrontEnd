import React, {useState}  from "react";
import "./Profile.css";

 import ImageUpload from "./ImageUpload";

import { Formik, Form, Field  } from "formik";

function Profile(){

  
  const {fullname, username, email, programme, year} = user;
  const [changePassword, setChangePassword] = useState(false);

  function newPassword(){
    setChangePassword(prevState => !prevState)
  } 
  

    return(
      <>
        <ImageUpload greet={username}/> 
     
        <div className="form-container ">

          <div className="input-container new-container">

            <h2 className="personal">Personal Information</h2>

          <Formik
                
                initialValues={{
                      fullName:"",
                      username: "",
                      email:"",
                      programme:"",
                      year:"",
                      old_password: "",
                      new_password:"",
                      confirm_password:""
                  }}
  
                  onSubmit={(values) => {
                  console.log(values);
                  }}
                  >
  
              {({ values, setFieldValue }) => (
                <Form>  

                    <label className="input-label">Email</label>
                    <div className="row">
                      <div className="email-field" >{email}</div>
                      
                    </div>
   
                    <label className="input-label">Full Name</label>
                    <div className="row">
                      <Field className="input-field" name="fullName" type="text" placeholder={fullname} />
                      <button className="button-input">Update</button>
                    </div>

                    <label className="input-label">Username</label>
                    <div className="row">
                      <Field className="input-field" name="username" type="text" placeholder={username} />
                      <button className="button-input">Update</button>
                    </div>


                    <label className="input-label">Year</label>
                    <div className="row">
                      <Field className="input-field" name="year" type="text" placeholder={year}/>
                      <button className="button-input">Update</button>
                    </div>

                    <label className="input-label">Programme</label>
                    <div className="row">
                      <Field className="input-field" name="programme" type="text" placeholder={programme}/>
                      <button className="button-input">Update</button>
                    </div>

                    <h2 className="password-change">Change Password</h2>

                    <label className="input-label">Old Password</label>
                    <div className="row">

                     {
                        changePassword? <Field className="input-field input-field-password" name="level" type="password"  placeholder="Enter your old password"/>
                         : <Field className="input-field" name="old_password" type="password"  placeholder="Enter your old password"/>
                      }
                      
                      {
                        changePassword? "" : <button className="button-input" onClick={newPassword}>Click to Update</button>
                      }
                      
                    </div>


                    {
                      changePassword?
                      <>
                      <label className="input-label">New password</label>
                      <div className="row">
                      <Field className="input-field input-field-password" name="new_password" type="password"  placeholder="Enter new password"/>
                      
                    </div>

                    <label className="input-label">Confirm New Password</label>
                    <div className="row">

                      <div className="updating-password">
                      <Field className="input-field input-field-password" name="confirm_password" type="password"  placeholder="Confirm password"/>

                      <div className="password-update">
                       <button >Update</button>
                      </div>
                      
                      </div>

                    </div>

                    
                    </>
                    : ""

                    }

                    
                    
                    
                   
                   
                   
                </Form>     
  
              )
              }
  
              </Formik>

          </div>

                
              


        </div>

         </>
    )
}


export default Profile;