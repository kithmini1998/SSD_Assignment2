/** @format */
import {Axios} from "./index";

export const saveFile = (file) => {
    return Axios.post(`/v1/file/add`, file);
};
