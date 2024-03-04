import axios from "axios";
const baseURL = import.meta.VITE_BASE_URL;

export default axios.create({
  baseURL,
  withCredentials: true,
});

export const axiosPrivate = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
