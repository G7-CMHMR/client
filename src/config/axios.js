import axios from 'axios';

const clientAxios = axios.create({
    baseURL: 'http://localhost:3001'
//    baseURL: 'https://pg-cmhmr-api.herokuapp.com/'
});
export default clientAxios;
