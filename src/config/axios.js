import axios from 'axios';
import { api } from './url';

const clientAxios = axios.create({
    baseURL: api.urlDevelop
   // baseURL: api.urlProduction
});
export default clientAxios;
