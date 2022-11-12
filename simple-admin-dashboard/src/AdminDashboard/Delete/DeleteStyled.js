import styled from "styled-components";
import Admin from "../../Images/lady.svg"


export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${Admin});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: bottom right;
  position: relative;
  

  .overlay{
    display: flex;
  flex-direction: row;
        background:rgba(333, 444, 331, 0.8);
  }
`
export const NavBar = styled.nav`
    position: absolute;
    inset: 0 0 0 0;
   height: 100px;
   z-index: 1;
   display: grid;
   grid-template-columns: 1fr 1fr;
    /*place-content: center; */

   .hamburger{
     line-height: 100px;
     font-size: 2rem;
     display: flex;
     justify-content: center;
     align-items: center;
     color: #ff652f;
   }

   h1{
    font-size: 4rem;
    color: #FF652F;
   }
   @media (max-width: 700px){
    h1{
    font-size: 3rem;
    
    
   }
    }
  
   
`
export const Wrapper = styled.div`
   margin-top: 30px;
   margin: 30px auto 30px auto;
   width: 1200px;
   display: flex;
   flex-direction: column;
   display: grid;
    place-content: center;
   

   .Logo{
    display: grid;
    place-content: center;
   }

`
export const InputContainer = styled.div`
    margin-bottom: 20px; 
    margin-bottom: 30px;
    display: grid;
    place-content: center;

   
`

export const InputLabel = styled.label`
  color: #FF652F;
`
export const InputField = styled.input`
  width: 500px;
  border-radius: 10px;
  border: none;
  outline: none;
  height: 28px;
  border: 2px solid rgba(0,0,0,0.5);
  text-align: center;

  @media (max-width: 700px){
    width: 250px;
    }
`
export const InputSelect = styled.select`
    width: 500px;
  border-radius: 10px;
  border: none;
  outline: none;
  height: 28px;
  border: 2px solid rgba(0,0,0,0.5);
  text-align: center;
  background-color: white;

  @media (max-width: 700px){
    width: 250px;
    }
`
export const InputFile = styled.input`
    background-color: #a9fdf8;
`
export const UploadButton = styled.button`
   border-radius: 10px;
   width: 400px;
   padding: 10px;
   background-color: #FF652F;
   border: none;
   color: white;
   font-size: 1rem;

   &:hover{
    scale: 1.2;
   }

   @media (max-width: 700px){
    width: 200px;
    }

`