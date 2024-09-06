import axios from "axios";

export const Api = axios.create({
    baseURL: "http://ec2-3-88-140-193.compute-1.amazonaws.com:3000/"
});