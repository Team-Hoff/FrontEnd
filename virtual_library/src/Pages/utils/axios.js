const axios = require("axios").default;

export default axios.create(
    {
    baseURL: "http://localhost:3500",
    withCredentials: true
});