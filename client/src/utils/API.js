import axios from 'axios';

const API = {
  getStories: ( => {
    return axios.get('/api/quotes');
  })
}

export default API;