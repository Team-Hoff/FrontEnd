import React, {useState} from "react";
import './Modal.css';
import axios from "../Pages/utils/axios";
import { useAuth } from "../Pages/hooks/useAuth";


export default function Modal( ){
const[modal, setModal]= useState(false);
const {logout} = useAuth();

    const toggleModal = ()=>{
        setModal(!modal)
    }

    const deleteAccount=()=>{
        logout()
        axios.delete("/delete")
        .then(async(res)=>{
            console.log("done")
        })
        .catch((err)=>{
            console.log(err)
        })
    
    }

    if(modal){
        document.body.classList.add('active-modall')
    }
    else{
        document.body.classList.remove('active-modall')
    }

    return(
        <>
        <button onClick={()=>toggleModal()} className="button-modal">Delete Account</button>
        {modal ? (
        <div className="modall">
            <div onClick={toggleModal} className="overlay" ></div>
            <div className="modall-content" >
              <div className="topic">
                  <div className="pict"> </div>
               <h2>Delete Account</h2>
             </div>
            <hr/>
               <h3>  Are you sure you want to delete your account?</h3>
    
                <br/><br/>
                <button className="close-modall" onClick={toggleModal}>No</button>
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