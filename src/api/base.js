import axios from 'axios';

const SERVER_URL = '/videos/';

export const baseApi = axios.create({
  baseURL: SERVER_URL
});
