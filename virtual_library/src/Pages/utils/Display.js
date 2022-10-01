import React, {useState} from 'react';
import axios from './axios';
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import { useEffect } from 'react';

function Display() {
  const [file, setFile] = useState(null)
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  
  const displaycourse = ()=> {
    axios({
        url: `/deta/download`, 
        method: 'GET',
        responseType: 'blob', 
    }).then((response) => {
        
        const link = document.createElement('a');
        console.log(link.pathname);
        const file = new Blob([response.data], {type: `application/pdf`});
        const href = URL.createObjectURL(file);
        link.href = href
        console.log(link.pathname);
        link.download ='Lecture One'
        setFile(href)
    }).catch((err)=> {
       
    }
    
    
    
    
    )}
  
    function onDocumentLoadSuccess({numPages}){
    setNumPages(numPages);
    setPageNumber(1);
  }
  

  function changePage(offSet){
    setPageNumber(prevPageNumber => prevPageNumber + offSet);
  }

  function changePageBack(){
    changePage(-1)
  }

  function changePageNext(){
    changePage(+1)
  }
  

  return (
    <div className="App">
      <header className="App-header">
       <button target="_blank" onClick={displaycourse}>CLICK ME</button>
        
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          <Page height="600" width="1200" pageNumber={pageNumber} />
        </Document>
        <p> Page {pageNumber} of {numPages}</p>
        { pageNumber > 1 && 
        <button onClick={changePageBack}>Previous Page</button>
        }
        {
          pageNumber < numPages &&
          <button onClick={changePageNext}>Next Page</button>
        }
      </header>
    </div>
  );
}

export default Display;