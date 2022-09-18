import React, { useState } from "react";
import { useField } from "formik";
import { FiEye, FiEyeOff} from "react-icons/fi";
import { StyledTextInput, StyledLabel, StyledIcon, Erromsg, StyledSelect } from "./Style";

export const TextInput = ({ icon, ...props }) => {
    const [field, meta] = useField(props);
    const [show, setShow] = useState(false);
    return (
        <div style={{ position: "relative" }}>
            <StyledLabel htmlFor={props.name}>{props.label}</StyledLabel>


            {props.type !== "password" && (
            <StyledTextInput
                // invalid={meta.touched && meta.error}
                {...field}
                {...props}
            />
            )}

            {props.type === "password" && (
                <StyledTextInput
                    // invalid={meta.touched && meta.error}
                    {...field}
                    {...props}
                    type={show ? "text" : "password"}
                />
            )}


            <StyledIcon>{icon}</StyledIcon>

            {
                props.type === "password" &&
                <StyledIcon onClick={() => setShow(!show)} right>
                    {show && <FiEye />}
                    {!show && <FiEyeOff />}
                </StyledIcon>
            }

                
            {meta.touched && meta.error ? (
                <Erromsg>{meta.error}</Erromsg>
            ): (
                <Erromsg style={{visibility:"hidden"}}>.</Erromsg>
            )}

            

        </div>
    )
}


export const CustomSelect = ({icon, ...props}) => {
    const [field, meta] = useField(props);
    // const [show, setShow] = useState(false);
   
    return (
        <div>
             <StyledLabel htmlFor={props.name}>{props.label}</StyledLabel>
            
             {/* {props.type !== "password" && ( */}
            <StyledSelect
                // invalid={meta.touched && meta.error}
                {...field}
                {...props}
            />
             {/* )} */}

            {/* {props.type === "password" && ( */}
                {/* <StyledSelect
                    // invalid={meta.touched && meta.error}
                    {...field}
                    {...props}
                    type={show ? "text" : "password"}
                /> */}
            {/* )} */}


            <StyledIcon>{icon}</StyledIcon>

            {/* {
                props.type === "password" &&
                <StyledIcon onClick={() => setShow(!show)} right>
                    {show && <FiEye />}
                    {!show && <FiEyeOff />}
                </StyledIcon>
            } */}

                
            {meta.touched && meta.error ? (
                <Erromsg>{meta.error}</Erromsg>
            ): (
                <Erromsg style={{visibility:"hidden"}}>.</Erromsg>
            )}
            
        </div>
    )
}



 
            
            

   
