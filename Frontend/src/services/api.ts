import axios from "axios";

export const Api = axios.create({
    baseURL: "http://api-nest:3000/"
});