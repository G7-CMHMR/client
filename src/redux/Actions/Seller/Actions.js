import axios from 'axios'
import clientAxios from '../../../config/axios';
import { POST_PRODUCT, GET_PRODUCTS, GET_SOLD } from './ActionsName'


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
                //console.log(response)
                dispatch({ type: GET_PRODUCTS, payload: response.data })
            })
    }
}



export function seller_updateProduct(productId, producto, userId, visiblet) {

    /* console.log(productId)
    console.log(producto)
    console.log('UserID: ' + userId)
    console.log('Visible' + visiblet)
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA') */
    return (dispatch) => {
        clientAxios.post(`/product/update/${productId}`, producto)
            .then(response => {
                //console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb')
                if (userId) {
                    //console.log('cccccccccccccccccccccccccccccc')
                    clientAxios.get(`/products/seller/${userId}/${visiblet}`)
                        .then(response => {
                            dispatch({ type: GET_PRODUCTS, payload: response.data })
                        })
                }
            })
    }
}


export function seller_GetSolds(sellerId) {

    return (dispatch) => {
        clientAxios.get(`sellerSells/all/${sellerId}` )
            .then(response => {
                dispatch({ type: GET_SOLD, payload: response.data })
            })
    }
}












