import React, { useState } from "react";
import { useField } from "formik";
import { FiEye, FiEyeOff} from "react-icons/fi";
import { StyledIcon, Erromsg } from "./Style";


export const SettingsInput = ({ icon, ...props }) => {
    const [field, meta] = useField(props);
    const [show, setShow] = useState(false);
    return (
        <div style={{ position: "relative" }}>


            {props.type !== "password" && (
            <input
                {...field}
                {...props}
            />
            )}

            {props.type === "password" && (
                <input
                    {...field}
                    {...props}
                    type={show ? "text" : "password"}
                />
            )}


            {
                props.type === "password" &&
                <StyledIcon onClick={() => setShow(!show)} right style={{top:'0px'}}>
                    {show && <FiEye />}
                    {!show && <FiEyeOff />}
                </StyledIcon>
            }

                
            {meta.touched && meta.error ? (
                <Erromsg style={{paddingTop:'5px'}}>{meta.error}</Erromsg>
            ): (
                <Erromsg style={{visibility:"hidden",paddingTop:'5px'}}></Erromsg>
            )}

            

        </div>
    )
}

export const SettingsSelect = ({icon, ...props}) => {
    const [field, meta] = useField(props);
   
    return (
        <div>
            
            <select
                {...field}
                {...props}
            />

            {meta.touched && meta.error ? (
                <Erromsg style={{paddingTop:'5px'}}>{meta.error}</Erromsg>
            ): (
                <Erromsg style={{visibility:"hidden", paddingTop:'5px'}}></Erromsg>
            )}
            
        </div>
    )
}

export const SettingsFile = ({ ...props }) => {
    const [field, meta] = useField(props.name);

    return (
        <div style={{ position: "relative" }}>


            
            <input
                {...field}
                {...props}  
            />
            

                
            {meta.touched && meta.error ? (
                <Erromsg style={{paddingTop:'5px'}}>{meta.error}</Erromsg>
            ): (
                <Erromsg style={{visibility:"hidden",paddingTop:'5px'}}></Erromsg>
            )}

            

        </div>
    )
}



 
            
            

   
