import axios from 'axios';

const instance = axios.create({
   baseURL : 'https://my-burger-builder-981a6.firebaseio.com/',
    });

export default instance;