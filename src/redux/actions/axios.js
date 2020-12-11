import axios from "axios";

const token = localStorage.getItem("access_token");

if (window.location.host === "localhost:3000") {
  // axios.defaults.baseURL = "https://devapi.onon.life";
  axios.defaults.baseURL = "http://192.168.100.39:8000";
  // axios.defaults.baseURL = "http://localhost:8000";
} else {
  axios.defaults.baseURL = "https://devapi.onon.life";
}

if (token) axios.defaults.headers.common = { "x-access-token": token };
export default axios;
