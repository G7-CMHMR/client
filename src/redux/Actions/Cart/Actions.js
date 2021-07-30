import axios from 'axios'
import { GET_CART, ADD_PRODUCT_CART, REMOVE_PRODUCT_CART, DECREMENT_PRODUCT_UNIT, CHECKOUT } from './ActionsName'
import clientAxios from '../../../config/axios';
import { MensajeError } from '../../../views/MyCart';
import React from 'react';
import { useMercadopago } from 'react-sdk-mercadopago';
import { setListoCheckout } from '../../../views/MyCart';
import { Link, Redirect, Router, BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { setPurchaseOrderStatus } from '../PurchaseOrder/Actions';

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
    //console.log(productId_userId)
    return (dispatch) => {
        clientAxios.post('/cart/decrement', productId_userId)
        clientAxios.get(`/cart/${productId_userId.userId}`)
            .then(response => {
                dispatch({ type: GET_CART, payload: response.data })
            })
    }
}
export function incrementProductUnit(productId_userId) {
    return (dispatch) => {
        clientAxios.post('/cart/increment', productId_userId)
        clientAxios.get(`/cart/${productId_userId.userId}`)
            .then(response => {
                dispatch({ type: GET_CART, payload: response.data })
            })
    }
}

export function checkout(cart, direction, userId) {
    //console.log(cart[0].product.id)
    return (dispatch) => {
        //ACTUALIZA EL CARRITO
        let userID = userId
        clientAxios.get(`/cart/${userID}`)
            .then(response => {
                dispatch({ type: GET_CART, payload: response.data })
                //HACE EL CHECKOUT A MERCADOPAGO API 
                clientAxios.post('/checkout', response.data)
                    .then(response => {
                        //console.log(response.data)
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
                            //console.log(cart.product)
                            let objectAmount = {
                                userId: userId,
                                productId: response.data.productid,
                                amount: response.data.newAmount,
                            }
                            clientAxios.put('/cart/adjustItemAmount', objectAmount)
                                .then(response => {
                                    dispatch({ type: GET_CART, payload: response.data })
                                })
                            return (
                                MensajeError(response.data.errorChangeAmount)
                            )
                        }


                        //EN CASO DE NINGUN ERROR, ABRE EL MODAL DE MERCADOPAGO CON TODOS LOS ITEMS
                        if (!response.data.error || !response.data.errorChangeAmount) {
                            dispatch({ type: CHECKOUT, payload: response.data });
                            //window.location.href = (response.data.body.sandbox_init_point)
                            //window.location.replace(`http://localhost:3000/Compras?preference_id=${response.data.body.id}&status=Approbed`)
                            let status = "Approbed"

                            var orderUser = {
                                userId: userId,
                                id: response.data.body.id,
                                payment_method: null,
                                userAddress: direction,
                            }
                            //CREA LA ORDEN DE COMPRA
                            clientAxios.post('/purchaseOrder/create', orderUser)
                                .then(purchaseorder => {
                                    //console.log(purchaseorder);
                                    // .Push('/Compras')
                                    //PAGA EL PRODUCTO:
                                    //dispatch(setPurchaseOrderStatus(response.data.body.id, status, '', userId))
                                    let objEraseCart = {
                                        userId: userId,
                                        productId: response.data.productid,
                                    }
                                    clientAxios.post('/cart/eraseCart', objEraseCart)
                                        .then(response => {
                                            dispatch({ type: GET_CART, payload: response.data })
                                        })
                                })
                                .catch(error => {
                                    console.log(error)

                                })

                        }
                    })
            })

    }
}


export function resetCartCheckout() {
    return (dispatch) => {
        dispatch({ type: 'RESETCHECKOUT' })
    }
}









export const addProductNotLogged = (id) => {
    let cartguest = JSON.parse(localStorage.getItem('cartguest'));
    //console.log(cartguest)
    /* if (!cartguest) {
        localStorage.setItem("cartguest", JSON.stringify([]));
    } */
    let item = {
        product: {},
        amount: 0
    };
    let found = cartguest ? cartguest.find((f) => f.product.id === id) : cartguest
    let index = cartguest ? cartguest.indexOf(found) : cartguest

    if (!found) {
        //console.log(cartguest)
        return async function (dispatch) {
            await clientAxios.get(`/product/${id}`).then((response) => {
                item.product = response.data;
                item.amount = 1
                //console.log(response.data)
                //console.log('item' + item)
                return item
            })
                .then((item) => {
                    //console.log(item)
                    cartguest = [...cartguest, item]
                    //console.log(cartguest)
                    localStorage.setItem('cartguest', JSON.stringify(cartguest));
                    getCartNotLogged()
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
        getCartNotLogged()
        return {
            type: GET_CART,
            payload: cartguest
        }
    }
}
export const decrementItemNotLogged = (id) => {
    let cartguest = JSON.parse(localStorage.getItem('cartguest'));
    let found = cartguest.find((f) => f.product.id === id)
    let index = cartguest.indexOf(found)
    cartguest[index].amount -= 1;

    localStorage.setItem('cartguest', JSON.stringify(cartguest));
    return {
        type: GET_CART,
        payload: cartguest
    }
}
export const deleteItemNotLogged = (id) => {
    let cartguest = JSON.parse(localStorage.getItem('cartguest'));
    let filter = cartguest.filter((f) => f.product.id !== id)
    localStorage.setItem('cartguest', JSON.stringify(filter));
    cartguest = JSON.parse(localStorage.getItem('cartguest'))
    return {
        type: GET_CART,
        payload: cartguest
    }
}
export function getCartNotLogged() {
    let cartguest = JSON.parse(localStorage.getItem('cartguest'))
    return {
        type: GET_CART,
        payload: cartguest
    }
}