import axios from "axios";
const API_KEY = import.meta.env.VITE_AGRO_API_KEY;

export default axios.create({
    baseURL: "https://api.agromonitoring.com/agro/1.0",
    params: {
        appid: API_KEY
    }
})