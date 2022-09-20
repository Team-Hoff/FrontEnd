import { StyledContainer,StyledFormArea, StyledFormButton, Avatar, StyledTitle, StyledSubTitle, colors, ButtonGroup, ExtraText, TextLink, CopyrightText } from "../Components/Style";

import Logo from './../Assets/Klogo.png';

import { useState } from "react";

import axios from './utils/axios';

import { Form, Formik } from "formik";

import { TextInput, CustomSelect} from "../Components/Form";

import {FiUser, FiLock, FiMail} from 'react-icons/fi';
// import {FcDepartment} from 'react-icons/fc';

import  * as Yup from 'yup';


import { ThreeDots} from 'react-loader-spinner';


const Signup = () => {
  const [inputs, setInputs] = useState("");

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs(values => ({...values, [name]: value}))
  }

  
  const handleSubmit = async(inputs) => {
    await axios.post('/signup',
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
        alert("ERROR: Username taken")
      })
  }


  
  
  return (
    
    <StyledContainer>
    <div>
      <StyledFormArea>
        <div style={{display:'flex'}}>
        <Avatar image={Logo}/>
        <StyledTitle color='Light black' size={40}>
        <span style={{font: "normal 36px 'Cookie' cursive", margin: 0}}>Virtual</span><span style={{color:'#e0ac1c',fontFamily: 'Poppins'}}>Library</span>
          </StyledTitle></div>
          <StyledSubTitle color='Black' size={35} style={{fontFamily:'Poppins'}}>Signup</StyledSubTitle>
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
              Yup.object({
                fullname: Yup.string()
                .required("Please enter your full name"),
                username: Yup.string()
                .required("Please enter a username")
                .min(4, "Username is too short")
                .max(15, "Username is too long")
                .test('Unique Username', 'Username already in use', // <- key, message
                function (value) {
                    return new Promise((resolve, reject) => {
                        axios.get(`/signup/${value}`)
                            .then((res) => {
                                resolve(true)
                            })
                            .catch((error) => {
                                    resolve(false);
                                
                            })
                    })
                }
            ),
                email: Yup.string()
                .required("Please enter an email")
                .email("Invalid email address")
                .test('Unique Email', 'Email already in use', // <- key, message
                function (value) {
                    return new Promise((resolve, reject) => {
                        axios.get(`/signup/${value}`)
                            .then((res) => {
                                resolve(true)
                            })
                            .catch((error) => {
                                resolve(false);
                                
                            })
                    })
                }
            ),
                password: Yup.string()
                .required("Please enter a password")
                .min(5, "Password is too short")
                .required("Please enter a password"),
                repeatPassword: Yup.string()
                .required("Confirm Password")
                .oneOf([Yup.ref("password")], "Password is not the same"),
                yearselect: Yup.string()
                .oneOf(["Level 100", "Level 200", "Level 300", "Level 400"], "Select your Year")
                .required("Select your Year"),
                programmeselect: Yup.string()
                .oneOf(["Agricultural Engineering", "Chemical Engineering", "Civil Engineering", "Geomatic Engineering (Geodetic Engineering)", "Materials Engineering", "Mechanical Engineering", "Electrical & Electronic Engineering", "Computer Engineering", "Aerospace Engineering", "Petroleum Engineering", "Telecommunication Engineering", "Geological Engineering", "Biomedical Engineering", "Petrochemical Engineering", "Metallurgical Engineering"], "Select your Programme")
                .required("Select your Programme"),
              })
            }
            
            validateOnBlur= {true}
            onSubmit={handleSubmit}
          
          >
            
            {({isSubmitting })=>(
              <Form name="userdetails" onChange={handleChange}>
                <TextInput
                 name="fullname" 
                 type="text"
                 label="Full Name"
                 placeholder="Enter your full name" 
                 icon={<FiUser/>}
                />

                <TextInput
                 name="username" 
                 type="text"
                 label="Username"
                 placeholder="Enter your username" 
                 icon={<FiUser/>}
                />

                <TextInput
                 name="email" 
                 type="text"
                 label="Email Address"
                 placeholder="Enter your email" 
                 icon={<FiMail/>}
                />

                  <CustomSelect
                  name="programmeselect"
                  type="dropdown"
                  label="Programme"
                  placeholder="Select your programme" 
                  // icon={<FcDepartment style={{position:'relative', top:'608px', left:'512px'}}/>}              
                >
                  <option>-- Select your programme --</option>
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

              

                            
               <TextInput
                 name="password" 
                 type="password"
                 label="Password"
                 placeholder="Enter your password" 
                 icon={<FiLock/>}
                />

                <TextInput
                 name="repeatPassword" 
                 type="password"
                 label="Confirm Password"
                 placeholder="Confirm password" 
                 icon={<FiLock/>}
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
            Already have an account? Click <TextLink to="/">Login</TextLink> to sign in
          </ExtraText>
      </StyledFormArea>
      <CopyrightText>All rights reserved &copy;2022</CopyrightText>
    </div>
    </StyledContainer>
    
  )
}

export default Signup