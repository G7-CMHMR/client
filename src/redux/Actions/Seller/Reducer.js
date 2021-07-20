import { POST_PRODUCT, GET_PRODUCTS_VISIBLE, GET_PRODUCTS_NOVISIBLE } from './ActionsName'


const initialState = {
    Products:[],

}

function sellerReducer(state = initialState, action) {

    switch (action.type) {
        case POST_PRODUCT: {
            return {
                ...state,
                Products: action.payload
            }
        }
        case GET_PRODUCTS_VISIBLE: {
            return {
                ...state,
                Products: action.payload
            }
        }
        case GET_PRODUCTS_NOVISIBLE: {
            return {
                ...state,
                Products: action.payload
            }
        }
        default: return state;

    }
}

export default sellerReducer