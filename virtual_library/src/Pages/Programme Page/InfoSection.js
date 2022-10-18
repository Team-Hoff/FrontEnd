import React from "react";
import { InfoContainer, InfoWrapper,InfoRow, Column1, Column2, ImgWrapper, Img, ProgrammeInfo } from "./styledComponents";
import Classroom from "./Images/Classroom-rafiki.svg";


function InfoSection(){


    return(
        <>
            <InfoContainer>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                        <ProgrammeInfo>
                        Computer engineering is a branch of electrical engineering that integrates several fields of computer science and electronic engineering required to develop computer hardware and software.
                        </ProgrammeInfo>
                        </Column1>

                         <Column2>
                            <ImgWrapper>
                               <Img src={Classroom} alt="classroom"/>
                            </ImgWrapper>
                            
                        </Column2>

                    </InfoRow>

                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection;