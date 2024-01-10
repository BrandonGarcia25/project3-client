import { SERVER_URL } from "./SERVER_URL";
import axios from "axios";

export const get = (path) => {
  const storedToken = localStorage.getItem("authToken");

  return axios.get(SERVER_URL + path, {
    headers: { Authorization: `Bearer ${storedToken}` },
  });
};

export const post = (path, body) => {
  const storedToken = localStorage.getItem("authToken");

  return axios.post(SERVER_URL + path, body, {
    headers: { Authorization: `Bearer ${storedToken}` },
  });
};

export const put = (path, body) => {
  const storedToken = localStorage.getItem("authToken");

  return axios.put(SERVER_URL + path, body, {
    headers: { Authorization: `Bearer ${storedToken}` },
  });
};

export const axiosDelete = (path) => {
  const storedToken = localStorage.getItem("authToken");

  return axios.delete(SERVER_URL + path, {
    headers: { Authorization: `Bearer ${storedToken}` },
  });
};