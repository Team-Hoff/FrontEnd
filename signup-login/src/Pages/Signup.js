import { StyledFormArea, StyledFormButton, Avatar, StyledTitle, colors, ButtonGroup, ExtraText, TextLink, CopyrightText, StyledIcon } from "../Components/Style";

import Logo from './../Assets/Klogo.png';

import { useState } from "react";

import Axios from 'axios';

import { Form, Formik } from "formik";

import { TextInput, CustomSelect} from "../Components/Form";

import {FiUser, FiLock, FiMail, FiBook} from 'react-icons/fi';

import { yub_object } from "../../../virtual_library/src/Pages/utils/yup_object";


import { ThreeDots} from 'react-loader-spinner';
import styled from "styled-components";





const Signup = () => {
  const [inputs, setInputs] = useState("");

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs(values => ({...values, [name]: value}))
  }

  
  const handleSubmit = (event) => {
    Axios.post('http://localhost:3500/signup',
     {username: inputs.username, 
      email: inputs.email, 
      password: inputs.password, 
      programme: inputs.programmeselect, 
      fullname: inputs.fullname,
      year: inputs.yearselect})
      .then( ()=>{
        window.location.href="/login"
        alert("Succesful")
      }).catch( ()=> {
        console.log(`Error for User:${inputs.username}`)
      })
  }
  
  
  return (
    <div>
      <StyledFormArea>
        <div style={{display:'flex'}}>
        <Avatar image={Logo}/>
          <StyledTitle color='black' size={40}>
            Virtual Library
          </StyledTitle></div>
          <Formik
            initialValues={{
              fullname : "",
              username : "",
              email: "",
              password : "",
              repeatPassword: "",
              yearselect: "",
              programmeselect: "",
            }}
            
            validationSchema={
               yub_object
            }
            
            onSubmit={handleSubmit}
          
          >
            
            {({isSubmitting })=>(
              <Form name="userdetails" onChange={handleChange}>
                <TextInput
                 name="fullname" 
                 type="text"
                 label="Full Name"
                 placeholder="Enter your full name" 
                //  icon={<FiUser/>}
                />

                <TextInput
                 name="username" 
                 type="text"
                 label="Username"
                 placeholder="Enter your username" 
                //  icon={<FiUser/>}
                />

                <TextInput
                 name="email" 
                 type="text"
                 label="Email Address"
                 placeholder="Enter your email" 
                //  icon={<FiMail/>}
                />

                <CustomSelect
                  name="yearselect"
                  type="dropdown"
                  label="Level"
                  placeholder="Select your year"
                
                >
                  <option>-- Select your Level --</option>
                  <option>Level 100</option>
                  <option>Level 200</option>
                  <option>Level 300</option>
                  <option>Level 400</option>

                </CustomSelect>

                <CustomSelect
                  name="programmeselect"
                  type="dropdown"
                  label="Programme"
                  placeholder="Select your year"               
                >
                  <option>-- Select your Programme --</option>
                  <option>Agricultural Engineering</option>
                  <option>Chemical Engineering</option>
                  <option>Civil Engineering</option>
                  <option>Geomatic Engineering (Geodetic Engineering)</option>
                  <option>Materials Engineering</option>
                  <option>Mechanical Engineering</option>
                  <option>Electrical & Electronic Engineering</option>
                  <option>Computer Engineering</option>
                  <option>Aerospace Engineering</option>
                  <option>Petroleum Engineering</option>
                  <option>Telecommunication Engineering</option>
                  <option>Geological Engineering</option>
                  <option>Biomedical Engineering</option>
                  <option>Petrochemical Engineering</option>
                  <option>Metallurgical Engineering</option>
                  
                </CustomSelect>

                            
               <TextInput
                 name="password" 
                 type="password"
                 label="Password"
                 placeholder="Enter your password" 
                //  icon={<FiLock/>}
                />

                <TextInput
                 name="repeatPassword" 
                 type="password"
                 label="Confirm Password"
                 placeholder="Confirm password" 
                //  icon={<FiLock/>}
                />
                                                            
              <ButtonGroup>
                {!isSubmitting && (
                 <StyledFormButton type="submit">
                  Signup
              </StyledFormButton>
              )}

              {isSubmitting && (
                <ThreeDots
                  color= {colors.theme}
                  height = {49}
                  width = {100}
                />
              )}
              </ButtonGroup>       

              </Form>
            )}
          </Formik>
          <ExtraText>
            Already have an account? Click <TextLink to="/login" onClick={()=>{window.location.href="/login"}}>Login</TextLink> to sign in
          </ExtraText>
      </StyledFormArea>
      <CopyrightText>All rights reserved &copy;2022</CopyrightText>
    </div>
  )
}

export default Signup