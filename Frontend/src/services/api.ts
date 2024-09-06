import axios from "axios";

export const Api = axios.create({
    baseURL: "http://ec2-23-22-143-167.compute-1.amazonaws.com:3000/"
});