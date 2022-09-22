import React from 'react';
import { StyledContainer,StyledFormArea, StyledFormButton, Avatar, StyledTitle, colors, ButtonGroup, CopyrightText, StyledSubTitle} from "../../Components/Style";

import Logo from './../../Assets/Klogo.png';

import { Form, Formik } from "formik";

import { TextInput } from "../../Components/Form";

import {FiLock} from 'react-icons/fi';

import  * as Yup from 'yup';

import { ThreeDots} from 'react-loader-spinner';
import { useLocation } from 'react-router';
import axios from '../utils/axios';

const ResetPassword = () => {
  const {search} = useLocation();
  console.log(search);
  
  const handleSubmit = (inputs)=> {axios.post(`/reset${search}`,{
    password: inputs.password
  }).then(()=>{
    alert("Password has been reset")
    window.location.href="/"
  }).catch((err)=>{
    
    console.log(err);
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
          <StyledSubTitle color='Black' size={35} style={{fontFamily:'Poppins'}}>Reset Password</StyledSubTitle>
          
          <Formik
            initialValues={{
             password : "",
             repeatPassword: "",
              
            }}
            validationSchema={
              Yup.object({
                password: Yup.string()
                .required("Please enter a password")
                .min(5, "Password is too short")
                .required("Please enter a password"),
                repeatPassword: Yup.string()
                .required("Confirm Password")
                .oneOf([Yup.ref("password")], "Password is not the same"),
              })
            }
            onSubmit={handleSubmit}
          
          >
            {({isSubmitting })=>(
              <Form>
                 <TextInput
                 name="password" 
                 type="password"
                 label="Password"
                 placeholder="Enter your new password" 
                 icon={<FiLock/>}
                />

                <TextInput
                 name="repeatPassword" 
                 type="password"
                 label="Confirm Password"
                 placeholder="Confirm your new password" 
                 icon={<FiLock/>}
                />

              

              <ButtonGroup>
                {!isSubmitting && (
                 <StyledFormButton type="submit">
                  Reset
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
          {/* <ExtraText>
            Don't have an account? Click <TextLink to="/signup">Signup</TextLink> to register
          </ExtraText> */}
          </StyledFormArea>
          <CopyrightText>All rights reserved &copy;2022</CopyrightText>
        </div>
    </StyledContainer>
    
  )
}

export default ResetPassword 