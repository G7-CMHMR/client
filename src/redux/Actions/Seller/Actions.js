import axios from 'axios'
import { POST_PRODUCT } from './ActionsName'


export function createProductAction(product) {
    return (dispatch) => {

        axios.post('http://localhost:3001/product', product)
            .then(response => {
                dispatch({ type: POST_PRODUCT, payload: response.data })
                console.log(response.data)
            })
    }
}












