import axios from "axios";
const API_KEY = import.meta.env.VITE_RAPID_API_KEY

export default axios.create({
    baseURL: "https://commodity-rates-api.p.rapidapi.com",
    params: {

    },
    headers:  {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'commodity-rates-api.p.rapidapi.com'
    }
})