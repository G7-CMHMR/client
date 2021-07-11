import axios from 'axios' 
import { GET_PRODUCTS, GET_PRODUCT_DETAIL, UPDATE_PRODUCT, POST_PRODUCT, SORT } from './ActionsName'

export function getAllProducts() {
    return (dispatch) => {

        axios.get('http://localhost:3001/products')
            .then(response => {
                dispatch({ type: GET_PRODUCTS, payload: response.data })
            })
    }
}

export function getProductDetail(id) {
    return (dispatch) => {

        axios.get(`http://localhost:3001/product/${id}`)
            .then(response => {
                dispatch({ type: GET_PRODUCT_DETAIL, payload: response.data })
            })
    }
}
export function sort(order, array){
    let sortArray = [...array]
    sortArray.sort(function (a, b) {
        var a = parseFloat(a.price)
        var b = parseFloat(b.price)
        if (order === 'minmax') {
            if (a < b) { return -1 }
            if (a > b) { return 1  }
            return 0
        }
        if (order === 'maxmin') {
            if (a < b) { return 1 }
            if (a > b) { return -1 }
            return 0
        }
    })
    return function (dispatch) {
        dispatch({ type: SORT, payload: sortArray })
    }
}


