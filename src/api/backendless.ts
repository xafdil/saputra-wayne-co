import axios from "axios";

const APP_ID = "BCEA427D-0997-4030-B55D-BA964CB737F7";
const API_KEY = "E42D8509-1986-4BE7-B164-95AE10D186A1";

export const backendlessAPI = axios.create({
  baseURL: `https://api.backendless.com/${APP_ID}/${API_KEY}`,
  headers: {
    "Content-Type": "application/json",
  },
});
