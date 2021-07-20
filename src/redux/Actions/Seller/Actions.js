import axios from 'axios'
import clientAxios from '../../../config/axios';
import { POST_PRODUCT, GET_PRODUCTS_VISIBLE, GET_PRODUCTS_NOVISIBLE } from './ActionsName'


export function createProductAction(product) {
    return (dispatch) => {

        clientAxios.post('/product', product)
            .then(response => {
                dispatch({ type: POST_PRODUCT, payload: response.data })
            })
    }
}

export function seller_getAllProducts(userId, visible) {
    return (dispatch) => {

        clientAxios.get(`/products/seller/${userId}/${visible}`)
            .then(response => {
                if (visible) {
                    dispatch({ type: GET_PRODUCTS_VISIBLE, payload: response.data })
                }else{
                    dispatch({ type: GET_PRODUCTS_NOVISIBLE, payload: response.data })
                }
            })
    }
}













