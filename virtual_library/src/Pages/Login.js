import { StyledContainer,StyledFormArea, StyledFormButton, Avatar, StyledTitle, colors, ButtonGroup, ExtraText, TextLink, CopyrightText} from "../Components/Style";

import Logo from './../Assets/Klogo.png';

import { useState } from "react";
import Axios from "axios";

import { Form, Formik } from "formik";

import { TextInput } from "../Components/Form";

import {FiUser, FiLock} from 'react-icons/fi';

import  * as Yup from 'yup';

import { ThreeDots} from 'react-loader-spinner';


const Login = () => {

  const [inputs, setInputs] = useState("");

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    Axios.post("http://localhost:3500/login",
      { username: inputs.username,
        password: inputs.password
      }
    ).then( response => {
      
      if (response.status === 200){
        alert("Logged In")
      }else{
        alert("Incorrect credentials")
      }
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
          <Formik
            initialValues={{
              username : "",
              password : "",
            }}
            validationSchema={
              Yup.object({
                username: Yup.string()
                .required("Username is required"),
                password: Yup.string()
                .required("Password is required"),
              })
            }
            onSubmit= {handleSubmit}
          
          >
            {({isSubmitting })=>(
              <Form onChange={handleChange}>
                <TextInput
                 name="username" 
                 type="text"
                 label="Username"
                 placeholder="Enter your username" 
                 icon={<FiUser/>}
              />
               <TextInput
                 name="password" 
                 type="password"
                 label="Password"
                 placeholder="Enter your password" 
                 icon={<FiLock/>}
              />

              
               <TextLink to="#" style={{}}>
                Forgot Password?
              </TextLink> 

              <ButtonGroup>
                {!isSubmitting && (
                 <StyledFormButton type="submit">
                  Login
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
            Don't have an account? Click <TextLink to="/signup">Signup</TextLink> to register
          </ExtraText>
          <TextLink to="/home">Home</TextLink>
          
      </StyledFormArea>
      <CopyrightText>All rights reserved &copy;2022</CopyrightText>
    </div>
    </StyledContainer>

  )
}

export default Login