import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://chat-app-1717.herokuapp.com/api/"
})