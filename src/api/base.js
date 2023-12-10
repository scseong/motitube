import axios from 'axios';

const SERVER_URL = 'https://youtube.googleapis.com/youtube/v3';

export const baseApi = axios.create({
  baseURL: SERVER_URL
});
