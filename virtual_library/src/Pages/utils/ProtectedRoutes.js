import {useAuth} from "../hooks/useAuth";
import Auth from "./Auth";
import Login from '../Login';
import Signup from '../Signup';
import Home from '../Home';
import Program from '../Program';
import Course from '../Course';
import Logout from "./Logout";
import Settings from "../settings";
import PageNotFound from "../PageNotFound/PageNotFound";
import ForgotPassword from "../PasswordChange/ForgotPassword";
import ResetPassword from "../PasswordChange/ResetPassword";
import AboutUs from "../AboutUs/Aboutus";

import { Navigate } from 'react-router-dom';
import { useRoutes } from "react-router-dom";
import Videos from "../Videos";

const ProtectedRoutes = () => {
    const {user} = useAuth();
    const routes = useRoutes([
        {
            path: "/",
            element: !user ?<Login />: <Navigate replace to="/home" />
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
            element: !user ?<ForgotPassword />: <Navigate replace to="/home" />
        },
        {
            path: "/resetpassword",
            element: !user ?<ResetPassword />: <Navigate replace to="/home" />
        },
        {
            path: "/signup",
            element: !user ?<Signup />: <Navigate replace to="/home" />
        },
        {
            path: "/logout",
            element: user?<Logout />: <Navigate replace to="/" />
        },
        {
            path: "/aboutus",
            element: user?<AboutUs />: <Navigate replace to="/" />
        },
        {
            path: "/profile",
            element: user?<Settings />: <Navigate replace to="/" /> 
        },
        {
        path: "/videos",
            element: <Videos/>
        },
        {
            path: "/404",
            element: user?<PageNotFound />: <Navigate replace to="/" />
        },
        {
            path: "*",
            element: <Navigate replace to="/404"/>
        },
    ])

    return routes

}



export default ProtectedRoutes;