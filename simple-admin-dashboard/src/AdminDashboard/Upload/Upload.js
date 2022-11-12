import { Form, Formik } from 'formik';
import {GiHamburgerMenu} from "react-icons/gi";
import * as yup from 'yup';
import axios from '../axios';
import React, {useState, useEffect} from 'react';
import Sidebar1 from '../../AdminDashboard/Sidebar/Sidebar1';
import Logo from './../../Assets/Klogo.png';
import { Avatar, StyledTitle} from '../../Components/Style';
import { Container, InputContainer, InputField, InputLabel, InputSelect, UploadButton, Wrapper, NavBar } from './uploadStyled';


const Upload = () => {

    const [course, setcourse] = useState([])
    const [File, setFile] = useState({})

    const [isopen, setIsopen] = useState(false);

    const showSidebar=()=>{
        setIsopen(!isopen)
    }

    useEffect( ()=> {
        function fetchData(){
          axios.get("/admin/course")
        .then(res => {
          setcourse(res.data.map(o=> o.name).flat());
        })
        .catch((err)=> {
          console.log(err)
        })
        }
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const uploadHandler =  async (input) =>{
        const formData = new FormData();
        formData.append('filetoUpload', File);
        formData.append('courseName', input.courseName)
        formData.append('programme', input.programmeName)
        formData.append('level', input.level)
        formData.append('semester', input.semester)
  
        await axios.post("/admin/upload", formData)          
          .then((res)=>{
            console.log(res)
          })
          .catch((err)=>{
            console.log(err)
          })
        }

    const slides = [
        "Lecture One","Lecture Two","Lecture Three","Lecture Four","Lecture Five","Lecture Six","Lecture Seven","Lecture Eight","Lecture Nine","Lecture Ten","Lecture Eleven","Lecture Twelve","Lecture Thirteen","Lecture Fourteen","Lecture Fifteen","Lecture Sixteen","Lecture Seventeen","Lecture Eighteen","Lecture Nineteen","Lecture Twenty"
        ]


    return(
        <Container>
            <div className='overlay'>

            <Sidebar1 isopen={isopen}/>

            <NavBar>
            <GiHamburgerMenu className="hamburger" onClick={showSidebar}  /> 
                <h1>
                Upload File
                </h1>
               
            </NavBar>

            <Wrapper>


                <Formik
                      initialValues={{
                        courseName:"",
                        programmeName: "",
                        level:"",
                        semester:"",
                        filetoUpload: ""
                     }}
                                validationSchema={
                                yup.object().shape({
                                    courseName: yup.string()
                                    .required("Enter the courseName")
                                    .oneOf(course, "Invalid course"),
                                    programmeName: yup.string()
                                    .required("Select the Programme")
                                    .oneOf(["Agricultural Engineering", "Chemical Engineering", "Civil Engineering", "Geomatic Engineering", "Materials Engineering", "Mechanical Engineering", "Electrical Engineering", "Computer Engineering", "Aerospace Engineering", "Petroleum Engineering", "Telecom Engineering", "Geological Engineering", "Biomedical Engineering", "Petrochemical Engineering", "Metallurgical Engineering"], "Select the Programme"),
                                    semester: yup.string()
                                    .required("Select the Semester")
                                    .oneOf(["First Semester","Second Semester"],"Select the Semester"),
                                    level : yup.string()
                                    .required("Select the Year")
                                    .oneOf(["First Year","Second Year","Third Year","Fourth Year"],"Select the Year"),
                                    filetoUpload: yup.mixed()
                                    .required("You need to provide a file")
                                    .test("fileFormat", "Unsupported Format", (value) => {
                                        setFile(value)
                                        return value && (value.name.slice(-3) === "pdf" ||  value.name.slice(-3) === "ppt" || value.name.slice(-4) === "pptx")
                                    })
                                    .test("fileFormat", "Invalid document name", (value) => {
                                        setFile(value)
                                        return value && (slides.includes(value.name.slice(0,-4))  || slides.includes(value.name.slice(0,-5)))
                                    })
                                    
                                    })
                                }
                                onSubmit={uploadHandler}
                         >

                {({isSubmitting})=>(
                    <Form>

                       <div style={{display:'flex'}}>
                        <Avatar image={Logo} />
                        <StyledTitle color='Light black' size={40}>
                            <span style={{font: "normal 36px 'Poppins', cursive", margin: 0}}>Virtual</span><span style={{color:'#e0ac1c', font: "normal 36px 'Poppins', cursive"}}>Library</span>
                        </StyledTitle>
                        </div>

                        <InputContainer>
                                      <InputLabel>CourseName</InputLabel>

                                     
                                            <InputField  className="input-text"
                                                name="courseName"
                                                placeholder="Enter the Course Name"
                                                type="text" 
                                            />
                                            
                        </InputContainer>

                        <InputContainer>
        
                                
                                <InputLabel>Programme </InputLabel>
                                    <InputSelect className="input-text2" name='programmeName'>
                                        <option>-- Select Programme --</option>
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
                                </InputSelect>
                                
                        </InputContainer>

                        <InputContainer>
                                
                                <InputLabel>Level</InputLabel>
                                
                                            <InputSelect className="input-text4" name='level'>
                                            <option>--Select Year--</option>
                                            <option>First Year</option>
                                            <option>Second Year</option>
                                            <option>Third Year</option>
                                            <option>Fourth Year</option>                    
                                 </InputSelect>   
                                            
                        </InputContainer> 

                        <InputContainer>
                            
                            <InputLabel>Semester</InputLabel>
                            
                            <InputSelect className="input-text3" name='semester'>
                                <option>--Select Semester--</option>
                                <option>First Semester</option>
                                <option>Second Semester</option>
                            </InputSelect>
                            
                                
                        </InputContainer> 


                   <InputContainer>
                        
                        <InputLabel>File</InputLabel>
                        <div className="input-dropdown">
                            
                            <input  id="filetoUpload" name="filetoUpload" type="file" />
                            
                        </div>  
                        
                  </InputContainer> 

                  {!isSubmitting && (
                    <div style={{textAlign:'center'}}>
                        <UploadButton type="submit" className="action">Upload </UploadButton>
                    </div>
                  )}


                    </Form>
                )}



                </Formik>
            </Wrapper>


            </div>
        </Container>
    )

}
export default Upload