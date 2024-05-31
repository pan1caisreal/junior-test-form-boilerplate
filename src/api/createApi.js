import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: process.env.REACT_APP_CLIENT_ID,
  },
});
