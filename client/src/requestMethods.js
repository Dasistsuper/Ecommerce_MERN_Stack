import axios from "axios";

<<<<<<< HEAD:client/src/requestMethods.js
const BASE_URL = "http://localhost:5000/api/";
=======
const BASE_URL = "https://zamboza.renderapp.com/api";

>>>>>>> 75881197f724d514d83df0dffba02be7062cb2a4:api/client/src/requestMethods.js
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