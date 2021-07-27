import axios from 'axios'
import clientAxios from '../../../config/axios';
import { GET_PURCHASE_ORDER, GET_ITEMS } from './ActionsName'


export function getPurchaseOrderHistory(params) {
    return (dispatch) => {

        clientAxios.get(`/purchaseOrder`, params)
            .then(response => {
                dispatch({ type: GET_PURCHASE_ORDER, payload: response.data })
            })
    }
}

export function createPurchaseOrder(params) {
    let obj = {
        userId: 1,
        payment_method: null,
        userAdress: "SiempreViva123"
    }
    return (dispatch) => {

        clientAxios.get(`/purchaseOrder/create`, params)
            .then(response => {
                //dispatch({ type: GET_PURCHASE_ORDER, payload: response.data })
            })
    }
}

export function getUserItems(id) {
    console.log(id)
    console.log(id)
    console.log(id)
    return (dispatch) => {

        clientAxios.get(`/purchaseOrder/user/${id}`,)
            .then(response => {
                console.log(response.data)
                dispatch({ type: GET_ITEMS, payload: response.data })
            })
    }
}


export function setPurchaseOrderStatus(preference_id, status, payment_type, userId) {
    console.log(preference_id)
    console.log(status)
    return (dispatch) => {

        clientAxios.put(`/purchaseOrder/`, { mercadopagoId: preference_id, userId: userId })
            .then(response => {
                dispatch({ type: GET_ITEMS, payload: response.data })
            })
    }
}

