import axios from "axios";

function createApi() {
    return axios.create({
        baseURL: "https://kenzie-portify-api.onrender.com",
        timeout: 8000,
    })
}

export const api = createApi();