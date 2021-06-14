import axios from 'axios'

export const baseURL = 'https://veihwwnelcwq.leanapp.cn/'

// create an axios instance

axios.defaults.withCredentials = true

const http = axios.create({
  baseURL,
  timeout: 15000,
});

// request interceptor
http.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
);

// response interceptor
http.interceptors.response.use(
  response => {
    if (response.data.code !== 'ok') {
      return Promise.reject(response.data.msg);
    }
    return response;
  },
  error => Promise.reject(error),
);

export default http;
