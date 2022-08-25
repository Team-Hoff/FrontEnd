import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";



const Auth = async () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    try {
        await login()
        navigate("/home")
    } catch (error) {
        console.log(error);
        navigate("/")
    }    
}

export default Auth;