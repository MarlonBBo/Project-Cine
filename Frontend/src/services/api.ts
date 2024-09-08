import axios from "axios";

export const Api = axios.create({
    baseURL: "localhost:3000/"
});