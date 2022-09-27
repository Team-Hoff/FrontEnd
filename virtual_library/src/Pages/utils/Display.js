import axios from "../utils/axios"
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';



const Display = ( ) => {
  

  return (
    <>
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
    <Viewer fileUrl="/pdf/LectureOne.pdf" />;
    
  </Worker>
    </>
  );
}

export default Display;