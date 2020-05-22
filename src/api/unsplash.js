import axios from 'axios';
import AuthKey from '../keys/AuthKey';

// CREATE AN INSTANCE OF THE AXIOS CLIENT WITH SOME DEFAULTS CONFIG
export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${AuthKey}`
      }
})