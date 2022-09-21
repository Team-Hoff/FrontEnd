import React, {useState, useEffect, useRef} from 'react';
import './profiledp.css';
import logouts from './logout.png';
import user1 from './user.png';
import user2 from './f2.png';
import aboutus from './Aboutus.png';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Pages/hooks/useAuth';

function Profiledp() {
    const {user} = useAuth(); 
    const {username} = user;

    console.log(user);

    const [isOpen, setisOpen] = useState(false)

    let menuRef = useRef();

    useEffect(()=>{
        let handler = (e)=>{
            if (!menuRef.current.contains(e.target)){
                setisOpen(false);
            }
        }

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler)
        }
    })


    const handleClick = event =>{
        setisOpen(isOpen => !isOpen)
    }
    
  return (
    <div>
        <div ref={menuRef} className="action">
        <div className="profile" onClick={handleClick}> 
            <img src={user2} alt=""></img>
        </div>
        <div className={`menu ${isOpen?'open':'close'}`}>
            <h3>Welcome<br/><span>{username}</span></h3>
            <ul>
                <li><img src={user1} alt="" className="resize"></img><Link to="/profile">My Profile</Link></li>
                <li><img src={aboutus} alt="" className="resize"></img><Link to="/aboutus">About us</Link></li>
                <li><img src={logouts} alt="" className="resize" style={{marginBottom:'10px'}}></img><Link to="/logout" >Log out</Link></li>
            </ul>
        </div>
    </div>
   
    </div>
  )
}

export default Profiledp;