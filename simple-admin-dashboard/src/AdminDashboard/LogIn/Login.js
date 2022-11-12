import React from "react";
import { Container, Wrapper, InputContainer, InputLabel, InputField, LoginButton } from "./LoginStyled";
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import { Link } from "react-router-dom";


function Login(){

    return(
        <>
        <Container>
           <div className='overlay'>
            <Wrapper>

                <h2>Welcome Back</h2>
                <Formik
                    initialValues={{
                        username:"",
                        password: "",
                        
                     }}

                     validationSchema={
                        yup.object().shape({

                        })
                    }
                    
                >

        {({isSubmitting})=>(
                    <Form>
                            <InputContainer>
                                      <InputLabel>Username</InputLabel>

                                     
                                            <InputField  
                                                name="username"
                                                placeholder="Username"
                                                type="text" 
                                            />
                                            
                           </InputContainer>

                           <InputContainer>
                                      <InputLabel>Password</InputLabel>

                                     
                                            <InputField  
                                                name="password"
                                                placeholder="Password"
                                                type="password" 
                                            />
                                            
                           </InputContainer>

                           {!isSubmitting && (
                                <div style={{textAlign:'center'}}>
                                        <Link to="/login">
                                        <LoginButton type="submit" className="action">Login </LoginButton>
                                        </Link>
                                    
                                </div>
                        )}


                    </Form>

            )}
                </Formik>


            </Wrapper>

          </div>
        </Container>


        </>

    )
}

export default Login;