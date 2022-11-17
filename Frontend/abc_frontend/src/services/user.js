/** @format */
import {Axios} from "./index";

export const loginUser = (credentials) => {
    return Axios.post(`/login`, credentials);
};

export const authenticateUser = (credentials) => {
    return Axios.post(`/v1/user/auth`, credentials);
};

export const sendOTP = (id, otp) => {
    return Axios.get(`/v1/user/auth/` + id + "/" + otp);
};


