import axios from 'axios' 
import { GET_CART,ADD_PRODUCT_CART, REMOVE_PRODUCT_CART, DECREMENT_PRODUCT_UNIT, CHECKOUT } from './ActionsName'

export function getCart(userID) {
    return (dispatch) => {

        axios.get(`http://localhost:3001/cart/${userID}`)
            .then(response => {
                dispatch({ type: GET_CART, payload: response.data })
              
            })
    }
}

export function addProductToCart(productId_userId) {
    return (dispatch) => {

        axios.post('http://localhost:3001/cart/add', productId_userId)
            .then(response => {
                dispatch({ type: ADD_PRODUCT_CART, payload: response.data })
               
            })
    }
}
export function removeProductFromCart(productId_userId) {
    return (dispatch) => {
        axios.post('http://localhost:3001/cart/remove', productId_userId)
            .then(response => {
                dispatch({ type: REMOVE_PRODUCT_CART, payload: response.data })
                
            })
    }
}

export function decrementProductUnit(productId_userId) {
    return (dispatch) => {
        axios.post('http://localhost:3001/cart/decrement', productId_userId)
            .then(response => {
                dispatch({ type: DECREMENT_PRODUCT_UNIT, payload: response.data })
        
            })
    }
}

export function checkout(productsCart, userId) {
    console.log(productsCart)
    return (dispatch) => {
        axios.post('http://localhost:3001/checkout', productsCart)
            .then(response => {
                dispatch({ type: CHECKOUT, payload: response.data })
                //window.location.href = (response.data.body.sandbox_init_point)
                var order = {
                    id: response.data.body.id,
                    payment_method: '',
                    userAdress: '',
                }
            })
        
        axios.post('http://localhost:3001/purchaseOrder/create')
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
}






