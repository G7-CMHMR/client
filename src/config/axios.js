import axios from 'axios';

const clientAxios = axios.create({
    baseURL: 'https://pg-cmhmr-api.herokuapp.com/'
});
export default clientAxios;
