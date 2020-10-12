import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://onepiececover.com/api/chapters/900',
});
