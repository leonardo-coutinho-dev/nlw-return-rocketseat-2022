import axios from 'axios';

export const api = axios.create({
  baseURL: "http://172.24.64.1:3333"
})