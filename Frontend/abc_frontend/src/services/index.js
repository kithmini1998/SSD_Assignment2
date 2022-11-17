/** @format */

import axios from "axios";

const baseUrl = "https://localhost/api";

export const Axios = axios.create({ baseURL: baseUrl });
