import React from "react";
import { CourseCardContainer, CourseCardHeader, CourseCardWrapper, CourseCards, CourseCardIcon, CourseHeader } from "./styledComponents";

import { CoursesData } from "./CoursesData";


function CourseCard(){


    return(
        <>
            <CourseCardContainer>
                <CourseCardHeader>COURSES</CourseCardHeader>

                <CourseCardWrapper>
                    
                        {/* <CourseCardIcon src={DCD} alt="DCD"/>
                        <CourseHeader>Digital Computer Design</CourseHeader> */}
                     {
                        CoursesData.map(
                            (course) => {
                                return(
                                <div>
                                    <CourseCards>
                                    <CourseCardIcon src={course.image}/>
                                    <CourseHeader>{course.title}</CourseHeader>
                                    </CourseCards>
                                </div>
                                
                                )
                                
                            }
                        )
                    } 

                </CourseCardWrapper>
            </CourseCardContainer>
            
        </>
    )
}

export default CourseCard;