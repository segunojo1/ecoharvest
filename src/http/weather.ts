import axios from "axios";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

export default axios.create({
    baseURL: 'https://api.openweathermap.org/data',
    params: {
        appid: API_KEY
    }
})