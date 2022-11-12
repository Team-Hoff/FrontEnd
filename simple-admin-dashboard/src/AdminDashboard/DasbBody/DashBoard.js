import {GiHamburgerMenu} from "react-icons/gi";
import Sidebar1 from "../Sidebar/Sidebar1";
import UploadFile from "../../Images/upload1.svg";
import Delete from "../../Images/delete.svg"
import React, {useState} from "react";
import * as FaIcons from 'react-icons/fa';
import { Container, NavBar,Wrapper, SectionInfo, BoxInfo, SectionInfo2, BoxInfo2  } from "./DashBoardStyled";



function DashBoard(){

    const [isopen, setIsopen] = useState(false);

    const showSidebar=()=>{
        setIsopen(!isopen)
    }

    return(
      <Container>
        <div className='overlay'>

        <Sidebar1 isopen={isopen}/>

           <NavBar>
               <GiHamburgerMenu className="hamburger" onClick={showSidebar}  /> 
                <h1>
                Dashboard
                </h1>
               
            </NavBar>

            <Wrapper>

            <SectionInfo>

                    <BoxInfo>
                        
                        <p>Number of students signed up</p>
                    </BoxInfo>


                    <BoxInfo>
                    <FaIcons.FaChalkboardTeacher className="icon"/>
                        Number of tutors
                    </BoxInfo>

                    <BoxInfo>
                        Total number of programmes
                    </BoxInfo>

            </SectionInfo>

            <SectionInfo2>

                <BoxInfo2>
                    <img src={UploadFile} alt="upload"/>
                    <p>Upload lecture files and pdfs</p>
                </BoxInfo2>

                <BoxInfo2>
                    <img src={Delete} alt="upload"/>
                    <p>Delete lecture files and pdfs</p>
                </BoxInfo2>
                

           </SectionInfo2>

            </Wrapper>

        </div>

      </Container>
    )
}
export default DashBoard;