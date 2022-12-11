import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://e-commerce-zamboza.renderapp.com/api"
});