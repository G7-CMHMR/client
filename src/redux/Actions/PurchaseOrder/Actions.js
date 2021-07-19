import axios from 'axios' 

import { GET_PURCHASE_ORDER } from './ActionsName'


export function getPurchaseOrderHistory(params) {
    return (dispatch) => {

        axios.get(`http://localhost:3001/purchaseOrder`, params)
            .then(response => {
                dispatch({ type: GET_PURCHASE_ORDER, payload: response.data })
            })
    }
}