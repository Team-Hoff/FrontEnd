import {useAuth} from "../hooks/useAuth";
import Auth from "./Auth";
import Login from '../Login';
import Signup from '../Signup';
import Home from '../Home';
import Program from '../Program';
import Course from '../Course';
import Logout from "./Logout";
import Profile from "../profilepage/profilepage";
import PageNotFound from "../PageNotFound/PageNotFound";
import Display from "./Display";
import ForgotPassword from "../PasswordChange/ForgotPassword";
import ResetPassword from "../PasswordChange/ResetPassword";


import { Navigate } from 'react-router-dom';
import { useRoutes } from "react-router-dom";



const ProtectedRoutes = () => {
    // const {user} = useAuth();
    const user = true;
    
    const routes = useRoutes([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/auth",
            element: !user ?<Auth />: <Navigate replace to="/home" />
        },
         {
            path: "/home",
            element: user?<Home />: <Navigate replace to="/" />
        },
        {
            path: "/home/:id",
            element: user?<Program />: <Navigate replace to="/" />
        },
        {
            path: "/home/:id/:id",
            element: user?<Course />: <Navigate replace to="/" />
        },
        {
            path: "/forgotpassword",
            element: <ForgotPassword/>
        },
        {
            path: "/resetpassword",
            element: <ResetPassword/>
        },
        {
            path: "/signup",
            element: <Signup />
        },
        {
            path: "/logout",
            element: user?<Logout />: <Navigate replace to="/" />
        },
        {
            path: "/profile",
            element: user?<Profile />: <Navigate replace to="/" />
        },
        {
            path: "/404",
            element: user?<PageNotFound />: <Navigate replace to="/" />
        },
        {
            path: "*",
            element: <Navigate replace to="/404"/>
        },
        {
            path: "/test",
            element: <Display/>   
        }
        
        

    ])

    return routes

}



export default ProtectedRoutes;