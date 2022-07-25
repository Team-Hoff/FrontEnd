import { StyledTextInput, StyledFormArea, StyledFormButton, StyledLabel, Avatar, StyledTitle, colors, ButtonGroup, ExtraText, TextLink, CopyrightText } from "../Components/Style";

import Logo from './../Assets/Klogo.png';

import { Form, Formik } from "formik";

import { TextInput } from "../Components/Form";

import {FiUser, FiLock, FiMail} from 'react-icons/fi';

import  * as Yup from 'yup';

import { ThreeDots} from 'react-loader-spinner';

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
                .min(6, "Password is too short")
                .max(20, "Password is too long"),
                repeatPassword: Yup.string()
                .required("Confirm Password")
                .oneOf([Yup.ref("password")], "Password is not the same")
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
                 placeholder="Enter your confirm password" 
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
  )
}

export default Signup