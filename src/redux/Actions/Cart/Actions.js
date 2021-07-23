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

export const addProductNotLogged = (id) => {
    let cartguest = JSON.parse(localStorage.getItem('cartguest')) ;
    console.log(cartguest)
    if (!cartguest) {
        localStorage.setItem("cartguest", JSON.stringify([]));
    }
    let item = {
        product: {},
        amount:0
    };
    let found =  cartguest? cartguest.find((f) => f.product.id === id) :null 
    let index = cartguest? cartguest.indexOf(found) :null
   
    if (!found) {
        console.log(cartguest)
        return async function (dispatch) {
            await clientAxios.get(`/product/${id}`).then((response) => {
                    item.product = response.data;
                    item.amount=1
                    console.log(response.data)
                    console.log('item'+item)
                    return item
                })
                .then((item) => {
                    console.log(item)
                    cartguest = [...cartguest, item]
                    console.log(cartguest)
                    localStorage.setItem('cartguest', JSON.stringify(cartguest));
                    dispatch({
                        type: "ADD_ITEM",
                        payload: item
                    })
                })
        }
    } else {
        let stock = cartguest[index].product.stock;
        if (cartguest[index].amount < stock) {
            cartguest[index].amount += 1;
        }
        localStorage.setItem('cartguest', JSON.stringify(cartguest));
        item = cartguest[index];

        return {
            type: GET_CART,
            payload: cartguest
        }
    }
}
export const decrementItemNotLogged = (id) => {
    let cartguest = JSON.parse(localStorage.getItem('cartguest')) ;
    let found =  cartguest.find((f) => f.product.id === id)
    let index = cartguest.indexOf(found) 
    let stock = cartguest[index].product.stock;
        if (cartguest[index].amount < stock) {
            cartguest[index].amount -= 1;
        }
        localStorage.setItem('cartguest', JSON.stringify(cartguest));
        return {
            type: GET_CART,
            payload: cartguest
        }
}
export const deleteItemNotLogged = (id) => {
    let cartguest = JSON.parse(localStorage.getItem('cartguest')) ;
    let filter =  cartguest.filter((f) => f.product.id !== id)
    
        localStorage.setItem('cartguest', JSON.stringify(filter));
    return {
        type: GET_CART,
        payload: cartguest
    }
}