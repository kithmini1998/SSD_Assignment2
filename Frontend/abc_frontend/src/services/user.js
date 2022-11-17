/** @format */
import { Axios } from "./index";

export const loginUser = (credentials) => {
  return Axios.post(`/login`, credentials);
};

<<<<<<< HEAD
export const authenticateUser = (credentials) => {
  return Axios.post(`/v1/user/auth`, credentials);
};

export const sendOTP = (id,otp) => {
  return Axios.get(`/v1/user/auth/`+ id + "/" + otp);
};
export const createEmployee = (employee) => {
  return Axios.post(`/employee/`, employee);
};
export const getAllEmployees = () => {
  return Axios.get(`/employee/`);
};
export const deleteEmployee = (id) => {
  return Axios.delete(`/employee/${id}`);
};
export const getSingleEmployee = (id) => {
  return Axios.get(`/employee/employee/${id}`);
};
export const updateEmployee = (id, employee) => {
  return Axios.put(`/employee/${id}`, employee);
};

export const getDepartment = () => {
  return Axios.get(`/department/`);
};
export const getAllEmployeesByDep = (id) => {
  return Axios.post(`/employee/list/?id=${id}`);
};
export const getToatl = (id) => {
  return Axios.post(`/employee/calculation/?id=${id}`);
};
=======
>>>>>>> origin/main
