import axios from "axios";
const instance = axios.create({
    baseURL: "https://ecommerce-api-8ga2.onrender.com",
})
export default instance