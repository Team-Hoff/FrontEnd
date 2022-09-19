const axios = require("axios").default;

export default axios.create(
    {
    baseURL: "http://ec2-3-89-226-48.compute-1.amazonaws.com:3500",
    // baseURL: "http://localhost:3500",
    withCredentials: true
});