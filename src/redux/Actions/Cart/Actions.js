import axios from 'axios'
import { GET_CART, ADD_PRODUCT_CART, REMOVE_PRODUCT_CART, DECREMENT_PRODUCT_UNIT, CHECKOUT } from './ActionsName'
import clientAxios from '../../../config/axios';
import { MensajeError } from '../../../views/MyCart';


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
                dispatch({ type: GET_CART, payload: response.data })
            })
    }
}
export function removeProductFromCart(productId_userId) {

    return (dispatch) => {
        clientAxios.post('/cart/remove', productId_userId)
            .then(response => {
                dispatch({ type: GET_CART, payload: response.data })
            })
    }
}

export function decrementProductUnit(productId_userId) {
    return (dispatch) => {
        clientAxios.post('/cart/decrement', productId_userId)
            .then(response => {
                dispatch({ type: GET_CART, payload: response.data })
            })
    }
}
export function incrementProductUnit(productId_userId) {
    return (dispatch) => {
        clientAxios.post('/cart/increment', productId_userId)
            .then(response => {
                dispatch({ type: GET_CART, payload: response.data })
            })
    }
}

export function checkout(cart, direction, userId) {
    console.log(cart[0].product.id)
    return (dispatch) => {
        //ACTUALIZA EL CARRITO
        let userID = userId
        clientAxios.get(`/cart/${userID}`)
            .then(response => {
                dispatch({ type: GET_CART, payload: response.data })
                //HACE EL CHECKOUT A MERCADOPAGO API 
                clientAxios.post('/checkout', response.data)
                    .then(response => {
                        console.log(response.data)
                        //EN CASO DE QUE NO HAY MAS STOCK DEL PRODUCTO, REMUEVE DEL CARRITO, ACTUALIZA CARRITO Y ENVIA MSJ
                        if (response.data.error) {
                            clientAxios.post('/cart/remove', { userId: userId, productId: response.data.productid })
                                .then(response => {
                                    dispatch({ type: GET_CART, payload: response.data })
                                })
                            return (
                                MensajeError(response.data.error)
                            )

                        //EN CASO DE QUE HAY MENOS STOCK DEL QUE TENIA, MODIFICA AMOUNT DEL PRODUCTO Y ACTUALIZA CARRITO Y ENVIA MSJ
                        }
                        if (response.data.errorChangeAmount) {
                            //cart.itemId
                            console.log(cart.product)
                            let objectAmount = {
                                userId: userId,
                                productId: response.data.productid,
                                amount: response.data.newAmount,
                            }
                            clientAxios.put('/cart/adjustItemAmount', objectAmount)
                                .then(response => {
                                    dispatch({type: GET_CART, payload: response.data})
                                })
                            return (
                                MensajeError(response.data.errorChangeAmount)
                            )
                        }


                        //EN CASO DE NINGUN ERROR, ABRE EL MODAL DE MERCADOPAGO CON TODOS LOS ITEMS
                        if (!response.data.error || !response.data.errorChangeAmount) {
                            dispatch({ type: CHECKOUT, payload: response.data })
                            window.location.href = (response.data.body.sandbox_init_point)
                            var orderUser = {
                                userId: userId,
                                id: response.data.body.id,
                                payment_method: null,
                                userAddress: direction,
                            }
                            //CREA LA ORDEN DE COMPRA
                            clientAxios.post('/purchaseOrder/create', orderUser)
                                .then(purchaseorder => {
                                    console.log(purchaseorder)
                                })
                                .catch(error => {
                                    console.log(error)

                                })
                        }
                    })
            })





    }
}






