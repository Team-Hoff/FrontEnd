import React from "react";
import { HeaderContainer, HeaderButton, HeaderLeft, HeaderRight,BodyContainer,Image, BodyWrapper, BodyCard,  CardLeft, CardRight } from "./Styling";
import Tutorimg from "../Images/Profiling.svg"

import Female from "../Images/female.png"
import { Data } from "./Data";
import { Link } from "react-router-dom";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";

function Tutor(){

    return(
        <>
        <Navbar />
        <HeaderContainer>
            <HeaderLeft>
                <h1>Hello there, you can sign up to be a tutor</h1>
                <Link to="/tutorform">
                    <HeaderButton>
                        Sign Up
                    </HeaderButton>
                </Link>
                
                
            </HeaderLeft>

            <HeaderRight>
                
            </HeaderRight>
            

        </HeaderContainer>

         <BodyContainer>

            <BodyWrapper>

                {
                    Data.map((data, index) => {
                        return(
                        <BodyCard>
                        <CardLeft>

                                
                                    <Image>
                                       
                                         {/* <img src={Female} />  */}
                                    </Image>
                                
    
                                
                        </CardLeft>
    
                        <CardRight>
                                 
                                    <h2>{data.Name}</h2>
                                    <h3>{data.Gender}</h3>
                                
                            <h3><span>Occupation:</span> {data.occupation}</h3>
                            <h3><span>Email: </span>{data.Email}</h3>
                            <h3><span>Phone:</span> {data.phone}</h3>
                            <h3>Courses:

                                    {
                                        data.courses.map((course, index ) => {
                                            return(
                                            <span>{course}</span>
                                            )
                                        })
                                    }
                            </h3>
                        </CardRight>
                    </BodyCard>
                        )

                    })
                }
            </BodyWrapper>
        </BodyContainer>
        <Footer />
        </>
    )
}

export default Tutor;