import axios from 'axios'
import clientAxios from '../../../config/axios';
import { POST_PRODUCT } from './ActionsName'


export function createProductAction(product) {
    return (dispatch) => {

        clientAxios.post('/product', product)
            .then(response => {
                dispatch({ type: POST_PRODUCT, payload: response.data })
                console.log(response.data)
            })
    }
}












