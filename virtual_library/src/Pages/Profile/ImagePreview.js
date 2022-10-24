import React, {  useState } from "react";
import Icon from "./Images/Profile-icon.png"
import "./ImageUpload.css"



function ImagePreview({ file }){
       
    const [preview, setPreview] = useState(Icon);

      if (file){
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload=() => {
          const img = reader.result;
        setPreview(img);
        }
      }
      

    return(
        <div className="imagePreview">
            {preview? <img src={preview} className="image-response" alt="preview" width="200" height="200" />: "loading" }
                     

        </div>


    )
}

export default ImagePreview;