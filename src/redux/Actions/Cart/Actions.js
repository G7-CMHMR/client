import axios from 'axios'
import { GET_CART, ADD_PRODUCT_CART, REMOVE_PRODUCT_CART, DECREMENT_PRODUCT_UNIT, CHECKOUT } from './ActionsName'
import clientAxios from '../../../config/axios';

export function getCart(userID) {
    return (dispatch) => {

        clientAxios.get(`/cart/${userID}`)
            .then(response => {
                dispatch({ type: GET_CART, payload: response.data })

            })
    }
}

export function addProductToCart(productId_userId) {
    console.log(productId_userId)
    return (dispatch) => {

        clientAxios.post('/cart/add', productId_userId)
            .then(response => {
                clientAxios.get(`/cart/${productId_userId.userId}`)
                    .then(response => {
                        dispatch({ type: GET_CART, payload: response.data })
                        
                    })
            })
    }
}
export function removeProductFromCart(productId_userId) {
    return (dispatch) => {
        clientAxios.post('/cart/remove', productId_userId)
            .then(response => {
                clientAxios.get(`/cart/${productId_userId.userId}`)
                    .then(response => {
                        dispatch({ type: GET_CART, payload: response.data })

                    })
            })
    }
}

export function decrementProductUnit(productId_userId) {
    return (dispatch) => {
        clientAxios.post('/cart/decrement', productId_userId)
            .then(response => {
                clientAxios.get(`/cart/${productId_userId.userId}`)
                    .then(response => {
                        dispatch({ type: GET_CART, payload: response.data })

                    })
            })
    }
}

export function checkout(productsCart, direction, userId) {
    console.log(productsCart)
    return (dispatch) => {
        clientAxios.post('/checkout', productsCart)
            .then(response => {
                dispatch({ type: CHECKOUT, payload: response.data })
                window.location.href = (response.data.body.sandbox_init_point)
                var orderUser = {
                    userId: userId,
                    id: response.data.body.id,
                    payment_method: null,
                    userAddress: direction,
                }
                clientAxios.post('/purchaseOrder/create', orderUser)
                    .then(response => {
                        console.log(response)
                    })
                    .catch(error => {
                        console.log(error)

                    })
            })


    }
}






