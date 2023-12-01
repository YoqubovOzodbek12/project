import axios from "axios";


let axiosClient = axios.create({
    baseURL: "https://0001.uz",
    headers: {
        'Content-Type': 'application/json'
    }
});

export {axiosClient};







