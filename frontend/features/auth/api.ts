import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, // send cookies if needed
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
