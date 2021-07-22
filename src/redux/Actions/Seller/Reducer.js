import { POST_PRODUCT, GET_PRODUCTS } from './ActionsName'


const initialState = {
    ProductsSeller: [],

}

function sellerReducer(state = initialState, action) {

    switch (action.type) {
        case POST_PRODUCT: {
            return {
                ...state,
                ProductsSeller: action.payload
            }
        }
        case GET_PRODUCTS: {
            return {
                ...state,
                ProductsSeller: action.payload
            }
        }

        default:
            return state;

    }
}

export default sellerReducer