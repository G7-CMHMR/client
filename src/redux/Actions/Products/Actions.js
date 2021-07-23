//import axios from 'axios'
import { GET_PRODUCTS, GET_PRODUCT_DETAIL, GET_PRODUCTS_OFFER, GET_CATEGORIES, UPDATE_PRODUCT, POST_PRODUCT, SORT, GET_FAVOURITES } from './ActionsName'
import clientAxios from '../../../config/axios';

export function getAllProducts() {
    return (dispatch) => {
        clientAxios.get('/products/true')
            .then(response => {
                dispatch({ type: GET_PRODUCTS, payload: response.data })
                console.log(response.data)
            })
    }
}
export function getProductDetail(id) {
    return (dispatch) => {
        clientAxios.get(`/product/${id}`)
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
        var priceA = parseFloat(priceToDisplay(a))
        var priceB = parseFloat(priceToDisplay(b))
        var nameA = a.name.toUpperCase()
        var nameB = b.name.toUpperCase()

        if (order === 'AZ') {
            if (nameA < nameB) { return -1 }
            if (nameA > nameB) { return 1 }
            return 0
        }
        if (order === 'ZA') {
            if (nameA < nameB) { return 1 }
            if (nameA > nameB) { return -1 }
            return 0
        }
        if (order === 'minmax') {
            if (priceA < priceB) { return -1 }
            if (priceA > priceB) { return 1  }
            return 0
        }
        if (order === 'maxmin') {
            if (priceA < priceB) { return 1 }
            if (priceA > priceB) { return -1 }
            return 0
        }

    })
    return function (dispatch) {
        dispatch({ type: SORT, payload: sortArray })
    }
}

export function getProductsOffer(input) {
    return (dispatch) => {

        clientAxios.get(`/products/offer`)
            .then(response => {
                filtrarProductos(response.data, input, dispatch)
            })
    }
}

export function getProductsOfferInHome() {
    return (dispatch) => {

        clientAxios.get(`/products/offer`)
            .then(response => {
                //GET_PRODUCTS_OFFER
                dispatch({ type: GET_PRODUCTS_OFFER, payload: response.data })
            })
    }
}


export function getCategories() {
    return (dispatch) => {

        clientAxios.get(`/category`)
            .then(response => {
                dispatch({ type: GET_CATEGORIES, payload: response.data })
            })
    }
}
export function getProductsOfCategory(categoryName) {     
    return (dispatch) => {          
        clientAxios.get(`/products/category/${categoryName}`)
            .then(response => {                 
                dispatch({ type: GET_PRODUCTS, payload: response.data })             
            })     
        } 
    }


export function getProductsFilter(categoryName='', type='', shipping='', condition='', brand='', MinPrice='', MaxPrice='') {
    console.log('Categoria: ' + categoryName,'Tipo: '+ type,'Envio: ' + shipping,'Condicion: ' + condition, 'Marca: ' +brand,'PrecioMinimo: ' + MinPrice,'PrecioMaximo: ' + MaxPrice)
    return (dispatch) => {
        clientAxios.get(`/filterMetods?category=${categoryName}&shipping=${shipping}&condition=${condition}&min_price=${MinPrice}&max_price=${MaxPrice}&type=${type}&brand=${brand}`)
            .then(response => {
                dispatch({ type: GET_PRODUCTS, payload: response.data })
            })
    }
}

export function getProducts(search, input) {
    return (dispatch) => {
        clientAxios.get(`/Search/${search}`)
            .then(response => {
                filtrarProductos(response.data, input, dispatch)
            })
    }
}

export function setProductsFilter(productos) {
    return (dispatch) => {
        dispatch({ type: GET_PRODUCTS, payload: productos })
    }
}





function filtrarProductos(productos, input, dispatch){
    let filtros = {
        type: '',
        brand: '',
        delivery: '',
        status: '',
    }

    if(input){
        productos = productos.filter((e) => {
            for (let key in filtros) {
                let retorna;
                input[key] != ''? e[key].toString() == input[key].toString()? console.log(''): retorna=true : console.log('')
                if (retorna){return false}
                if(input.MinPrice){if(e.price > input.MinPrice){}else{return false}}
                if(input.MaxPrice){if(e.price < input.MaxPrice){}else{return false}}
            }
            return true
        })
    }
        dispatch({ type: GET_PRODUCTS, payload: productos })
}

export function createQuestionAction(question){
    return async (dispatch) => {
        clientAxios.post('/questions/create', question).then(() => dispatch(getProductDetail(question.productId)))       
    }
}
export function publishResponseAction(response){
    return async (dispatch) => {
        clientAxios.put('/questions/response', response).then(() => dispatch(getProductDetail(response.productId)))
    }
}

// export function updateProduct(product_id, product_body) {
//     return (dispatch) => {
//         clientAxios.post(`/product/update/${product_id}`, product_body)
//             .then(response => {
//                 dispatch({ type: UPDATE_PRODUCT, payload: response.data })
//             })
//     }
// }