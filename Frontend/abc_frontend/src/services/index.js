/** @format */

import axios from "axios";

const baseUrl = "https://localhost:443/api";

export const Axios = axios.create({ baseURL: baseUrl });
