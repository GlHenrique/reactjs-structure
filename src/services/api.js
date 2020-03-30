import axios from 'axios';

const api = axios.create({
  baseURL: 'http://YOURBASEURL',
});

export default api;
