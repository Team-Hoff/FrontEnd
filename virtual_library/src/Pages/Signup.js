import {Erromsg, StyledContainer,StyledFormArea, StyledFormButton, Avatar, StyledTitle, StyledSubTitle, colors, ButtonGroup, ExtraText, TextLink, CopyrightText } from "../Components/Style";
import Logo from './../Assets/Klogo.png';
import { useState } from "react";
import axios from './utils/axios';
import { Form, Formik } from "formik";
import { TextInput, CustomSelect} from "../Components/Form";
import {FiUser, FiLock, FiMail} from 'react-icons/fi';
import  * as Yup from 'yup';
import { ThreeDots} from 'react-loader-spinner';


const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [signedUp, setSignedUp] = useState(false);
  const [err1, seterr1] = useState("");
  const [err2, seterr2] = useState("");
  const [err3, seterr3] = useState("");
  const [visibile, setvisibile] = useState(false);

  const handleSubmit = async (inputs) => {
     await axios.post('/signup',
     {username: inputs.username, 
      email: inputs.email, 
      password: inputs.password, 
      programme: inputs.programmeselect, 
      fullname: inputs.fullname,
      year: inputs.yearselect})
      .then( ()=>{
        setSignedUp(true)
      }).catch( (err)=> {
        const error = err.response.data.error_msg;
        if(error === "Email is taken"){
          seterr1(error)
        }
        else if (error === "Username is taken"){
          seterr2(error)
        }
        else if ( error === "Username and Email have been taken"){
          seterr3(error)
        }
        setLoading(false)
      })
  }


  const handleClick = () =>{
    setvisibile(true);
    seterr1("");
    seterr2("");
    seterr3("");

    setTimeout(()=>{
      setvisibile(false);
      
    },3000);
  }

  const resetErrors = setErrors => {
    setTimeout(()=>setErrors({}), 5000);
  };

  if(loading ){
    return (
    <div>
        <div className="loader-container">
            <div className="spinner"></div>
        </div>
    </div>
    )
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
          
          {!signedUp?(<>
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
                .required("Please enter your full name")
                .min(7, "Fullname is too short")
                .max(29, "Fullname is too long"),
                username: Yup.string()
                .required("Please enter a username")
                .min(2, "Username is too short")
                .max(29, "Username is too long"),
                email: Yup.string()
                .required("Please enter an email")
                .email("Invalid email address"),
                password: Yup.string()
                .required("Please enter a password")
                .min(5, "Password is too short")
                .max(24, "Password is too long"),
                repeatPassword: Yup.string()
                .required("Confirm your password")
                .oneOf([Yup.ref("password")], "Password is not the same"),
                yearselect: Yup.string()
                .oneOf(["Level 100", "Level 200", "Level 300", "Level 400"], "Select your Year")
                .required("Select your Year"),
                programmeselect: Yup.string()
                .oneOf(["Agricultural Engineering", "Chemical Engineering", "Civil Engineering", "Geomatic Engineering", "Materials Engineering", "Mechanical Engineering", "Electrical Engineering", "Computer Engineering", "Aerospace Engineering", "Petroleum Engineering", "Telecom Engineering", "Geological Engineering", "Biomedical Engineering", "Petrochemical Engineering", "Metallurgical Engineering"], "Select your Programme")
                .required("Select your Programme"),
              })
            }
            onSubmit={handleSubmit}
          >
            
            {({isSubmitting, setErrors })=>(
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
                <Erromsg>{visibile && err2}</Erromsg>
                <Erromsg>{visibile && err3}</Erromsg>

                <TextInput
                 name="email" 
                 type="text"
                 label="Email Address"
                 placeholder="Enter your email" 
                 icon={<FiMail/>}
                />
                <Erromsg>{visibile && err1}</Erromsg>
                <Erromsg>{visibile && err3}</Erromsg>

                  <CustomSelect
                  name="programmeselect"
                  type="dropdown"
                  label="Programme"
                  placeholder="Select your programme"            
                >
                  <option>-- Select your programme --</option>
                  <option>Agricultural Engineering</option>
                  <option>Chemical Engineering</option>
                  <option>Civil Engineering</option>
                  <option>Geomatic Engineering</option>
                  <option>Materials Engineering</option>
                  <option>Mechanical Engineering</option>
                  <option>Electrical Engineering</option>
                  <option>Computer Engineering</option>
                  <option>Aerospace Engineering</option>
                  <option>Petroleum Engineering</option>
                  <option>Telecom Engineering</option>
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

              {resetErrors(setErrors)}
                {!isSubmitting && (
                 <StyledFormButton type="submit" onClick={handleClick}>
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
          </>):
          (
            <>
            <span>You've been Signed Up</span>
            <ExtraText>
             Click <TextLink to="/">Login</TextLink> to sign in with your new account
          </ExtraText>
            </>
          )}
      </StyledFormArea>
      <CopyrightText>All rights reserved &copy;2022</CopyrightText>
    </div>
    </StyledContainer>
    
  )
}

export default Signup