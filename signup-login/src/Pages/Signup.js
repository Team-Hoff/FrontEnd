import { StyledFormArea, StyledFormButton, Avatar, StyledTitle, colors, ButtonGroup, ExtraText, TextLink, CopyrightText, StyledIcon } from "../Components/Style";

import Logo from './../Assets/Klogo.png';

import { Form, Formik } from "formik";

import { TextInput, CustomSelect} from "../Components/Form";

import {FiUser, FiLock, FiMail, FiBook} from 'react-icons/fi';

import  * as Yup from 'yup';

import { ThreeDots} from 'react-loader-spinner';
import styled from "styled-components";





const Signup = () => {
  
  return (
    <div>
      <StyledFormArea>
        <Avatar image={Logo}/>
          <StyledTitle color={colors.theme} size={30}>
            Signup
          </StyledTitle>
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
                .max(15, "Username is too long"),
                email: Yup.string()
                .required("Please enter an email")
                .email("Invalid email address"),
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
            onSubmit={(values, {setSubmitting})=>{
              console.log(values)
            }}
          
          >
            
            {({isSubmitting })=>(
              <Form>
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
            Already have an account? Click <TextLink to="/login">Login</TextLink> to sign in
          </ExtraText>
      </StyledFormArea>
      <CopyrightText>All rights reserved &copy;2022</CopyrightText>
    </div>
  )
}

export default Signup