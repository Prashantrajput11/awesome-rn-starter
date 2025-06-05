import axios from 'axios';

// Create an axios instance with base configuration
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Your API base URL
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor (runs before every request)
// api.interceptors.request.use(
//   config => {
//     // Add auth token if available
//     const token = getAuthToken(); // Your token logic
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   error => Promise.reject(error),
// );

// Response interceptor (runs after every response)
// api.interceptors.response.use(
//   response => response.data, // Return just the data
//   error => {
//     // Handle common errors
//     if (error.response?.status === 401) {
//       // Handle unauthorized
//       // Maybe logout user
//     }
//     return Promise.reject(error);
//   },
// );

export default api;
