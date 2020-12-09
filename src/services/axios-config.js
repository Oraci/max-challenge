import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const interceptorRequest = (config) => ({
  ...config,
  params: {
    api_key: process.env.REACT_APP_API_ID,
    ...config.params,
  },
});

axios.interceptors.request.use(interceptorRequest, Promise.reject);
