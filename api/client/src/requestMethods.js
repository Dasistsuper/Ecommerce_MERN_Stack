import axios from "axios";
import URL from "./App";

const BASE_URL = "https://zamboza.renderapp.com/api";

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