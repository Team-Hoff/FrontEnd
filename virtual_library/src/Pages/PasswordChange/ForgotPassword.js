import React from 'react';
import {StyledContainer,StyledFormArea, StyledFormButton, Avatar, StyledTitle, colors, ButtonGroup, CopyrightText, StyledSubTitle} from "../../Components/Style";

import Logo from './../../Assets/Klogo.png';

import { Form, Formik } from "formik";

import { TextInput } from "../../Components/Form";

import {FiMail} from 'react-icons/fi';

import  * as Yup from 'yup';

import { ThreeDots} from 'react-loader-spinner';
import axios from '../utils/axios';

const ForgotPassword = () => {


  const handleSubmit = (inputs)=>{
    axios.post("/forgot",
    {
      email:inputs.email
    })
    .then(()=>{
      alert("Email has been sent")
    })
    .catch(()=>{

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
          <StyledSubTitle color='Black' size={35} style={{fontFamily:'Poppins'}}>Forgot Password</StyledSubTitle>
          <span>Enter your email address to reset your password</span>
          <Formik
            initialValues={{
              email : "",
              
            }}
            validationSchema={
              Yup.object({
                email: Yup.string()
                .required("Please enter your email address")
                .email("Invalid email address"),
              })
            }
            
            onSubmit={handleSubmit}
          >
            {({isSubmitting })=>(
              <Form>
                <TextInput
                 name="email" 
                 type="text"
                 label=""
                 placeholder="Enter your email" 
                 icon={<FiMail style={{position:'relative', top:'-35px', left:'-5px'}}/>}
                />

              

              <ButtonGroup>
                {!isSubmitting && (
                 <StyledFormButton type="submit">
                  Submit
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
           <TextLink to="/resetpassword">Reset your Password</TextLink>
              </ExtraText> */}
          </StyledFormArea>
          <CopyrightText>All rights reserved &copy;2022</CopyrightText>
        </div>
    </StyledContainer>
    
  )
}

export default ForgotPassword