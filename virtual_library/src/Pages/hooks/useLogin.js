import axios from "../utils/axios"

export const handleSubmit = async(inputs) => {
const response = await axios.post("/login",
    { username: inputs.username,
      password: inputs.password
    }
  ).then(()=> {
    alert("Incorrect username/password")
  })
window.location.href="/auth"

  }

