import axios from "axios";
import URL from "./App";

<<<<<<< HEAD:api/client/src/requestMethods.js
const BASE_URL = "https://e-commerce-zamboza.renderapp.com/api";
=======

const BASE_URL = `${URL}/api/`;
>>>>>>> 11d51b2ec4b3218bd8ca1be360464af96ff0432b:client/src/requestMethods.js
const persistRoot = JSON.parse(localStorage.getItem("persist:root"))
const TOKEN = persistRoot
? JSON.parse(persistRoot?.user)?.currentUser?.accessToken
: ""

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{ token:`Bearer ${TOKEN}`}
});