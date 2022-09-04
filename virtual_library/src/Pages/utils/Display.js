import axios from "../utils/axios"

const Display = ( ) => {

  
const getFiles = async(path, lecture_name) => {
    // const {ID, id, name, year, semester} = path[0] ;
    
 const response = await axios.get(
        // `/program/${ID}/${year}/${semester}/${name}/EE 387 UNIT 00.pptx`
        // '/program/computer/Third Year/First Semester/Classical Control Systems/EE 387 UNIT 00.pptx'
        '/program'
        )
    //  const book = response.data.toString("base64")
    //  return book;
    console.log(response);

    
}

  return(
    <div>
      <p>
        This is your book
      <button type="button" onClick={()=> getFiles()} >Get book</button>
      </p>
    </div>
  )
}

export default Display;