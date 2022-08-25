import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router";
import { useLocalStorage } from "./useLocalStorage";
const AuthContext = createContext();
const axios = require("axios").default;
axios.defaults.baseURL = 'http://localhost:3500';


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  
  

  // call this function when you want to authenticate the user
  const login = () => {
    axios.get("/auth")
    .then( (response) => {
      alert("here in get auth")
     console.log(response.data);
     setUser(response.data);

    }).catch()
    return
    
    };

  // call this function to sign out logged in user
  const logout = () => {
    alert("here")
    setUser(null);

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