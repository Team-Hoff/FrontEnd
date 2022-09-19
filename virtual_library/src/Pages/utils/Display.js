import axios from "../utils/axios"

const Display = ( ) => {

  axios.get('/course/computerCourse')
  .then(res => {
    // setcourse(res)
    console.log(res)
  })
  .catch(err=>{
    console.log(err)
  })
  

  return(
    <div>
     
    </div>
  )
}

export default Display;