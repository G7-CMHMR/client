import axios from 'axios'
import clientAxios from '../../../config/axios';
import { POST_PRODUCT, GET_PRODUCTS_SELLER, GET_SOLD, GET_ALL_QUESTIONS, SELLER_INFO } from './ActionsName'


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
                dispatch({ type: GET_PRODUCTS_SELLER, payload: response.data })
            })
    }
}




export function seller_updateProduct(productId, producto, userId, visiblet) {

    return (dispatch) => {
        clientAxios.post(`/product/update/${productId}`, producto)
            .then(response => {
                if (userId) {
                    clientAxios.get(`/products/seller/${userId}/${visiblet}`)
                        .then(response => {
                            dispatch({ type: GET_PRODUCTS_SELLER, payload: response.data })
                        })
                }
            })
    }
}


export function seller_GetSolds_WithFilter(params) {
    console.log('PARAMS:')
    console.log(params)
    return (dispatch) => {
        clientAxios.post(`sellerSells/filter`, params)
            .then(response => {
                console.log('DATA RESPONSE:')
                console.log(response.data)
                dispatch({ type: GET_SOLD, payload: response.data })
            })
    }
}

export function getAllQuestionsAction(idSeller) {
    return (dispatch) => {
        clientAxios.post('/questions/answerMe', idSeller)
            .then(response => {
                dispatch({ type: GET_ALL_QUESTIONS, payload: response.data })
            })
    }
}

export function getDataOfSeller(idSeller) {
    console.log(idSeller)
    return (dispatch) => {
        clientAxios.post('/seller/info', {sellerId: idSeller})
            .then(response => {
                dispatch({ type: SELLER_INFO, payload: response.data })
                console.log(response.data)
            })
    }
}

export function publishResponseAction(response){
    console.log(response)
    return async (dispatch) => {
        clientAxios.put('/questions/response', response).then(() => dispatch(getAllQuestionsAction({sellerId: response.sellerId})))
    }
}

export function deleteQuestionAction(idquestion, idseller){
    return async (dispatch) => {
        clientAxios.post('/questions/', idquestion).then(() => dispatch(getAllQuestionsAction(idseller)))
    }
}