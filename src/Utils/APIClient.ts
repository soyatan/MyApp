import axios from 'axios';

export const APIClient = axios.create({
  baseURL: 'https://dummyjson.com',

  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
