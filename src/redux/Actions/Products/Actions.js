import axios from 'axios'
import { GET_PRODUCTS, GET_PRODUCT_DETAIL, GET_PRODUCTS_OFFER, GET_CATEGORIES, UPDATE_PRODUCT, POST_PRODUCT } from './ActionsName'

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

