import axios from "../utils/axios"

const Display = ( ) => {

  
const getFiles = async(path, lecture_name) => {
    // const {ID, id, name, year, semester} = path[0] ;
    
    axios({
      url: `/program/computer/year/semester/course/${lecture_name}`, //your url
      method: 'GET',
      responseType: 'blob', // important
  }).then((response) => {
      // create file link in browser's memory
      const href = URL.createObjectURL(response.data);
  
      // create "a" HTLM element with href to file & click
      const link = document.createElement('a');
      link.href = href;
      link.setAttribute('download', `${lecture_name}.pptx`); //or any other extension
      document.body.appendChild(link);
      link.click();
  
      // clean up "a" element & remove ObjectURL
      document.body.removeChild(link);
      URL.revokeObjectURL("/program");
  });

    
}

  return(
    <div>
      <p>
        This is your book
      <button type="button" onClick={()=> getFiles("", "Lecture One")} >Get book</button>
      </p>
    </div>
  )
}

export default Display;