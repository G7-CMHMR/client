import axios from 'axios' 
import clientAxios from '../../../config/axios';
import { GET_PURCHASE_ORDER } from './ActionsName'


export function getPurchaseOrderHistory(params) {
    return (dispatch) => {

        clientAxios.get(`/purchaseOrder`, params)
            .then(response => {
                dispatch({ type: GET_PURCHASE_ORDER, payload: response.data })
            })
    }
}