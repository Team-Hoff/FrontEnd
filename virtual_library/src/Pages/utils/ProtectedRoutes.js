import {useAuth} from "../hooks/useAuth";
import Auth from "./Auth";
import Login from '../Login';
import Signup from '../Signup';
import Home from '../Home';
import Program from '../Program';
import Course from '../Course';
import Profile from "../Profilepage/Profilepage";
import { Navigate } from 'react-router-dom';
import { useRoutes } from "react-router-dom";


const ProtectedRoutes = () => {
    const user=false; // dpnt fprget to wrap inside a memo
    // console.log(useAuth())

    const routes = useRoutes([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/auth/login",
            element: <Auth />
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
            path: "/signup",
            element: <Signup />
        },
        {
            path: "*",
            element: user?<Home />: <Navigate replace to="/" />
        },
        {
            path: "/profile",
            element: <Profile />
        }


    ])

    return routes

}



export default ProtectedRoutes;