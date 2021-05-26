import axios from 'axios'

export const baseURL = process.env.NODE_ENV === 'production'
  ? 'https://veihwwnelcwq.leanapp.cn/'
  : 'http://localhost:3000/'

// create an axios instance
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
