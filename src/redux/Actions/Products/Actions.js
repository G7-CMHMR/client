import axios from 'axios'
import { GET_PRODUCTS, GET_PRODUCT_DETAIL, GET_PRODUCTS_OFFER, GET_CATEGORIES, UPDATE_PRODUCT, POST_PRODUCT, SORT } from './ActionsName'


export function getAllProducts() {
    return (dispatch) => {

        axios.get('http://localhost:3001/products')
            .then(response => {
                dispatch({ type: GET_PRODUCTS, payload: response.data })
                console.log(response.data)
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

        function priceToDisplay (x){
            let price = x.price
            if (x.discount>0){price =Math.floor(x.price*171 - (x.price*171/100 )*x.discount)}
            else { price = Math.floor(price*171) }  
            return price 
        }
        var a = parseFloat(priceToDisplay(a))
        var b = parseFloat(priceToDisplay(b))

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

export function getProductsOffer() {
    return (dispatch) => {

        axios.get(`http://localhost:3001/products/offer`)
            .then(response => {
                dispatch({ type: GET_PRODUCTS_OFFER, payload: response.data })
            })
    }
}

export function getProductsOfCategory() {
    return (dispatch) => {

        axios.get(`http://localhost:3001/category`)
            .then(response => {
                dispatch({ type: GET_CATEGORIES, payload: response.data })
            })
    }
}


export function getProductsFilter(categoryName, type, shipping, condition, brand, MinPrice, MaxPrice) {
    console.log('Categoria: ' + categoryName,'Tipo: '+ type,'Envio: ' + shipping,'Condicion: ' + condition, 'Marca: ' +brand,'PrecioMinimo: ' + MinPrice,'PrecioMaximo: ' + MaxPrice)
    return (dispatch) => {
        axios.get(`http://localhost:3001/products/category?category_name=${categoryName}&type=${type}&shipping=${shipping}&condition=${condition}&brand=${brand}&MinPrice=${MinPrice}&MaxPrice=${MaxPrice}`)
            .then(response => {
                dispatch({ type: GET_PRODUCTS, payload: response.data })
            })
    }
}

