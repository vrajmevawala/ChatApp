import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: process.meta.env.MODE === 'development' ? 'http://localhost:5001/api' : '/api',
    withCredentials: true, // This allows cookies to be sent with requests
});