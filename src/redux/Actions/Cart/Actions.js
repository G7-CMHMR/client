import axios from 'axios'
import { GET_CART, ADD_PRODUCT_CART, REMOVE_PRODUCT_CART, DECREMENT_PRODUCT_UNIT, CHECKOUT } from './ActionsName'

export function getCart(userID) {
    return (dispatch) => {

        axios.get(`http://localhost:3001/cart/${userID}`)
            .then(response => {
                dispatch({ type: GET_CART, payload: response.data })

            })
    }
}

export function addProductToCart(productId_userId) {
    console.log(productId_userId)
    return (dispatch) => {

        axios.post('http://localhost:3001/cart/add', productId_userId)
            .then(response => {
                axios.get(`http://localhost:3001/cart/${productId_userId.userId}`)
                    .then(response => {
                        dispatch({ type: GET_CART, payload: response.data })
                        
                    })
            })
    }
}
export function removeProductFromCart(productId_userId) {
    return (dispatch) => {
        axios.post('http://localhost:3001/cart/remove', productId_userId)
            .then(response => {
                axios.get(`http://localhost:3001/cart/${productId_userId.userId}`)
                    .then(response => {
                        dispatch({ type: GET_CART, payload: response.data })

                    })
            })
    }
}

export function decrementProductUnit(productId_userId) {
    return (dispatch) => {
        axios.post('http://localhost:3001/cart/decrement', productId_userId)
            .then(response => {
                axios.get(`http://localhost:3001/cart/${productId_userId.userId}`)
                    .then(response => {
                        dispatch({ type: GET_CART, payload: response.data })

                    })
            })
    }
}

export function checkout(productsCart, direction, userId) {
    console.log(productsCart)
    return (dispatch) => {
        axios.post('http://localhost:3001/checkout', productsCart)
            .then(response => {
                dispatch({ type: CHECKOUT, payload: response.data })
                window.location.href = (response.data.body.sandbox_init_point)
                var orderUser = {
                    userId: userId,
                    id: response.data.body.id,
                    payment_method: null,
                    userAddress: direction,
                }
                axios.post('http://localhost:3001/purchaseOrder/create', orderUser)
                    .then(response => {
                        console.log(response)
                    })
                    .catch(error => {
                        console.log(error)

                    })
            })


    }
}






