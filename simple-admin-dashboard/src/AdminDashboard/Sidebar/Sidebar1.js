import React from "react";
import { SidebarBox, NavBar, SidebarMenu, SidebarProfileIcon, NavLink } from "./styled";
import AdminProfile from "../../Images/Admin-pana.svg";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import * as FiIcons from 'react-icons/fi';

function Sidebar1(props){

    // const [isopen, setIsopen] = useState(true);

    // const showSidebar=()=>{
    //     setIsopen(!isopen)
    // }

    return(
        <SidebarBox style={{width: props.isopen?  "300px" : "60px"}}>

            <NavBar>
            {/* <GiHamburgerMenu className="hamburger" color="#ff652f" />     */}
            </NavBar>

            <SidebarProfileIcon style={{display: props.isopen? "visible": "hidden",height: props.isopen?  "200px" : "0px"}} >
               
                <img style={{display: props.isopen? "visible": "hidden", width: props.isopen?  "150px" : "0px",height: props.isopen?  "150px" : "0px" }}   src={AdminProfile} alt="Admin Profile"/>
            </SidebarProfileIcon>

            <SidebarMenu>

                    
                            <NavLink to="/dashboard">
                                <span className="icon" style={{fontSize: props.isopen?  "20px" : "2rem"}}><AiIcons.AiFillHome /></span>
                                <span className="title" style={{display: props.isopen? "block": "none"}} >DashBoard</span>
                            </NavLink>
                        

                        
                            <NavLink to="/upload">
                                <span className="icon" style={{fontSize: props.isopen?  "20px" : "2rem"}}><FaIcons.FaFileUpload /></span>
                                <span className="title" style={{display: props.isopen? "block": "none"}}>Upload File</span>
                            </NavLink>
                        

                        
                            <NavLink to="/delete" >
                                <span className="icon" style={{fontSize: props.isopen?  "20px" : "2rem"}}><AiIcons.AiFillDelete /></span>
                                <span className="title" style={{display: props.isopen? "block": "none"}}>Delete File</span>
                            </NavLink>
                        

                        
                            <NavLink to="/logout">
                                <span className="icon" style={{fontSize: props.isopen?  "20px" : "2rem"}}><AiIcons.AiOutlineLogout/></span>
                                <span className="title" style={{display: props.isopen? "block": "none"}}>Log Out</span>
                            </NavLink>
                        
                    

            

            </SidebarMenu>

        </SidebarBox>
    )
}

export default Sidebar1;