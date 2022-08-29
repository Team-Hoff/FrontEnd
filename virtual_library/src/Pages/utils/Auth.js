import { useAuth } from "../hooks/useAuth";


const Auth =  ( ) => {
    const {login} = useAuth();
     login()
}


export default Auth;