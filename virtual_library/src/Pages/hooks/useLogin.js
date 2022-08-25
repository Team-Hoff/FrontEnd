import { useAuth } from "./useAuth";
const axios = require("axios").default;
axios.defaults.baseURL = 'http://localhost:3500';


export const handleSubmit = (inputs) => {
  
  axios.post("/login",
    { username: inputs.username,
      password: inputs.password
    }
  ).then( (response) => {
    if(response.status === 200){
      console.log(response.status);
      window.location.href="/auth/login"
    }
    }).catch((error)=>{
      console.log(error);
      window.location.href="/"
    })

}

