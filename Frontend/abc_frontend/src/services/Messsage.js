/** @format */
import {Axios} from "./index";

export const saveMessage = (message) => {
    return Axios.post(`/v1/message/add`, message);
};