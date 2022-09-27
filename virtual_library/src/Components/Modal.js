import React, {useState, useRef, useEffect} from "react";
import './Modal.css';
import axios from "../Pages/utils/axios";


export default function Modal( ){
const[modal, setModal]= useState(false);

    const toggleModal = ()=>{
        setModal(!modal)
    }

    function deleteAccount(){
        axios.delete("/deleteAccount")
        return 
    }

    let menuRef = useRef();

    useEffect(()=>{
        let handler = (e)=>{
            if (menuRef.current.contains(e.target)){
                setModal(false)
            }
        }

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler)
        }
    })



    return(
        <>
        <button onClick={()=>toggleModal()} className="button-modal">Delete Account</button>
        {modal ? (
        <div className="modall" >
            <div onClick={()=>toggleModal} className="overlay" ref={menuRef}></div>
            <div className="modall-content" >
              <div className="topic">
                  <div className="pict"> </div>
               <h2>Delete User</h2>
             </div>

               <h3>  Are you sure you want to delete your account?</h3>
    
                <br/><br/>
                <button className="close-modall" onClick={()=>toggleModal()}>No</button>
                <button className="close-modalll" onClick={deleteAccount}>Yes</button>
            </div>
            </div>
        
        ) :(
            <></>
        )

        }
            </>   
    )
}