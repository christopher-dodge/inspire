import axios from 'axios';

const API = {
  getQuotes: () => {
    return axios.get('/api/quotes');
  }
}

export default API;