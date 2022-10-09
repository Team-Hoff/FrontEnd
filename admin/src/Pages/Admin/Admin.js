import React, {useState, useEffect} from 'react'
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import axios from '../axios';
import "./admin.css";
import { SettingsInput, SettingsSelect, SettingsFile } from '../../Components/Form';
import { ThreeDots } from 'react-loader-spinner';

const Admin = () => {
    const [course, setcourse] = useState([])
    
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

    const uploadHandler = async (input) =>{
        await axios.post("/admin/upload",{
                  courseName : input.courseName,
                  programme : input.programmeName,
                  level : input.level,
                  semester : input.semester,
                  filetoUpload : input.filetoUpload
        })
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


  return (
   <div className='hody'>
      <div className='real-container'>
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
                return value && (value.slice(-3) === "pdf" ||  value.slice(-3) === "ppt" || value.slice(-4) === "pptx")
              })
            .test("fileFormat", "Invalid document name", (value) => {
                return value && (slides.includes(value.slice(12,-4))  || slides.includes(value.slice(12,-5)))
              })
            
            })
        }
      //  onSubmit={(values)=>uploadHandler(console.log(values))}
      onSubmit={uploadHandler}
       
      >
      
      {({isSubmitting, errors , touched})=>(
        <Form className='form'>

        <div className="mar-bot">
        
        <div className="input-row">
           <label className="input-label">CourseName</label>

           <div className="input-field">
           <SettingsInput  className="input-text"
            name="courseName"
            placeholder="Enter the Course Name"
            type="text" 
           />
           
           </div>
         </div>
      </div>

      <div className="mar-bot">
        
                <div className="input-row">
                <label className="input-label">Programme </label>
                    <SettingsSelect className="input-text2" name='programmeName'>
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
                   </SettingsSelect>
           
            </div>
         </div>

         <div className="mar-bot">
            <div className="input-row">
             <label className="input-label">Level</label>
              <div className="input-dropdown">
                        <SettingsSelect className="input-text4" name='level'>
                          <option>--Select Year--</option>
                          <option>First Year</option>
                          <option>Second Year</option>
                          <option>Third Year</option>
                          <option>Fourth Year</option>                    
                        </SettingsSelect>               
              </div>  
            </div>
         </div> 

         <div className="mar-bot">
            <div className="input-row">
             <label className="input-label">Semester</label>
               <div className="input-dropdown">
               <SettingsSelect className="input-text3" name='semester'>
                  <option>--Select Semester--</option>
                  <option>First Semester</option>
                  <option>Second Semester</option>
               </SettingsSelect>
                
               </div>
                
                

          </div>
         </div> 
        
         <div className="mar-bot">
            <div className="input-row">
             <p className="input-label">File</p>
              <div className="input-dropdown">
                 
                  <SettingsFile name="filetoUpload" type="file"/>
                 
              </div>  
            </div>
         </div> 

        {!isSubmitting && (
            <button type="submit" className="action">Upload </button>
                    )}

        {isSubmitting && (
            <ThreeDots
                color="blue"
                height={30}
                width={30}
            />
        )}
        
      
        </Form>

      )}

      </Formik>
      </div>
    </div>
  )
}

export default Admin