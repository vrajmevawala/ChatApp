import axios from 'axios';

const getBaseURL = () => {
    if (import.meta.env.MODE === 'development') {
        return 'http://localhost:5001/api';
    }
    // In production, use the VITE_API_URL env var, or default to /api for same-domain backend
    return import.meta.env.VITE_API_URL || '/api';
};

export const axiosInstance = axios.create({
    baseURL: getBaseURL(),
    withCredentials: true, // This allows cookies to be sent with requests
});