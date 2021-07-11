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

        function priceToDisplay (x){
            let price = x.price
            if (x.discount>0){price =Math.floor(x.price*171 - (x.price*171/100 )*x.discount)}
            else { price = Math.floor(price*171) }  
            return price 
        }
//(Math.floor(price*171 - (price*171/100)*discount))

//{props.discount && props.discount > 0 && show ? <h4 style={{textDecoration:"line-through"}}
//${addCommas(Math.floor(props.price*171))}</h4> : show && <br/>}
//(props.price*171 - (props.price*171/100)*props.discount)
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


