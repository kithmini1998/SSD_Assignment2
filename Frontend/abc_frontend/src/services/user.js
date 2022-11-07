/** @format */
import { Axios } from "./index";

export const loginUser = (credentials) => {
  return Axios.post(`/login`, credentials);
};

