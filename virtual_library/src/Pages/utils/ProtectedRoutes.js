import {useAuth} from "../hooks/useAuth";
import Auth from "./Auth";
import Login from '../Login';
import Signup from '../Signup';
import Home from '../Home';
import Program from '../Program';
import Course from '../Course';
import Logout from "./Logout";


import { Navigate } from 'react-router-dom';
import { useRoutes } from "react-router-dom";



const ProtectedRoutes = () => {
    const {user} = useAuth();
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
            path: "/signup",
            element: <Signup />
        },
        {
            path: "/logout",
            element: user?<Logout />: <Navigate replace to="/" />
        },
        {
            path: "*",
            element: user?<Home />: <Navigate replace to="/" />
        }

    ])

    return routes

}



export default ProtectedRoutes;