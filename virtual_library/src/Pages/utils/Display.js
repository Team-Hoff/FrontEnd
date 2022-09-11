import axios from "../utils/axios"

const Display = ( ) => {

  
const getFiles = async(path, lecture_name) => {
    // const {ID, id, name, year, semester} = path[0] ;
    
    axios({
      url: `/deta/download`, //your url
      method: 'GET',
      responseType: 'blob', // important
  }).then((response) => {
      // create file link in browser's memory
      const file = new Blob([response.data], {type: 'application/pdf'})
      const href = URL.createObjectURL(file);
      window.open(href)
     

      // const newWindow = window.open('', lecture_name, "width=800,height=1200");
      // if (!(newWindow === null)) {
      //     setTimeout( () => {
      //         const dataUrl = window.URL.createObjectURL(file);
      //         const title = newWindow.document.createElement('title');
      //         const iframe = newWindow.document.createElement('iframe');
  
      //         title.appendChild(document.createTextNode(lecture_name));
      //         newWindow.document.head.appendChild(title);
  
      //         iframe.setAttribute('src', dataUrl);
      //         iframe.setAttribute('width', "100%");
      //         iframe.setAttribute('height', "100%");
  
      //         newWindow.document.body.appendChild(iframe);
  
      //         setTimeout( () => {
      //             // For Firefox it is necessary to delay revoking the ObjectURL
      //             window.URL.revokeObjectURL(dataUrl);
      //         }, 100);
      //     }, 100);
      // } else {
      //     alert("To display files, please disable any pop-blockers for this page and try again.");
      // }
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