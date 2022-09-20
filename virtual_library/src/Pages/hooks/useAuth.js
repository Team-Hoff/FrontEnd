import { createContext, useContext, useMemo } from "react";
import axios from "../utils/axios";
import { useLocalStorage } from "./useLocalStorage";
const AuthContext = createContext();



export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  // call this function when you want to authenticate the user

  //set the login function call in the Auth component and render the component
  const login = async () => {
      const response = await axios.get("/auth")
      const user_details = response.data
      setUser(user_details)
      return
     
    };

  // call this function to sign out logged in user
  const logout = async() => {
    //Send request to backend to clear the session
    await axios.get("/logout") //preferably axios.delete
    .then(()=>setUser(null))
    ;
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{ children }</AuthContext.Provider>;
};



export const useAuth = () => {
  return useContext(AuthContext);
};