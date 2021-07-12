import axios from 'axios';

const clientAxios = axios.create({
    baseURL: 'http://localhost:3001'
});
export default clientAxios;