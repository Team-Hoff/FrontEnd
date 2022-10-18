import styled from "styled-components";


export const VideoContainer = styled.div`
    background: #010606;
    height: 600px;
    padding: 0 30px;

    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;

    @media (max-width: 1000px){
        height: 300px;
    }
`

export const VideoBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right:  0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    
`

export const Video1 = styled.video`
    width: 100%;
    // height: 100%;
    -o-object-fit: cover;
     object-fit: cover;
    background: #010606;

    @media (max-width: 1000px){
        width: 100%;
        object-position: 50% 50%;
        object-fit: contain;
    }
`

export const VideoContent = styled.div`
    z-index: 3;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const VideoHeader = styled.h1`
    color: #FCA510;
    font-size: 48px;
    text-align: center;
     
    @media (max-width: 1000px){
        font-size: 20px;
        display: flex;
    flex-direction: column;
    align-items: center;
    }
`

export const InfoContainer = styled.div`
    color: black;
    bacKground: #e7ac47;
`

export const InfoWrapper = styled.div`
     display: grid;
     z-index: 1;
     height: 500px;
     width: 100%;
     max-width: 1200px;
     margin: 0 auto;
     padding: 0 24px;
     justify-content-center;   

     @media (max-width: 1000px){
        height: auto;
    }
`
export const ProgrammeInfo = styled.p`
    font-size: 18px;
`
export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

    @media (max-width: 1000px){
        width: 70vw;
        padding: 20px
        margin: auto;
        display: flex;
        justify-content-center; 
        align-items: center;
    }

`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr;
    align-items: center;
    grid-template-areas: "col1 col2";

    @media (max-width: 1000px){
        display: flex;
        flex-direction: column;
    }
`

export const ImgWrapper = styled.div`
    max-width: 555px;
    height: 100%;
`
export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
` 
export const CourseCardContainer = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align-items: center;
    background: #fff;
    margin: 20px 0;
`

export const CourseCardHeader = styled.h1`
    font-size: 48px;
    color: #FCA510;
    text-align: center;

    @media (max-width: 1000px){
       font-size: 20px;
    }
`
export const CourseCardWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    align-items: center;
    grid-gap: 30px;
    padding: 0 50px;

    @media (max-width: 1000px){
        max-width: 80vw;
        grid-template-columns: 1fr;

    }

`
export const CourseCards = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media (max-width: 1000px){
        max-height: 200px;
    }
`
export const CourseCardIcon = styled.img`
    height: 160px;
    width: 100%;
    margin-bottom: 10px;

    @media (max-width: 1000px){
        
    }

`

export const CourseHeader = styled.h2`
    font-size: 2rem;
    color: #010606;
    margin-bottom: 64px;

    @media (max-width: 1000px){
        font-size: 1rem;
    }

`