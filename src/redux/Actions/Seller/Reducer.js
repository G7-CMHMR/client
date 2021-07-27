import { POST_PRODUCT, GET_PRODUCTS, GET_SOLD } from './ActionsName'


const initialState = {
    ProductsSeller: [],
    ProductsSold: [],
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

        case GET_SOLD: {
            return {
                ...state,
                ProductsSold: action.payload
            }
        }

        default:
            return state;

    }
}

export default sellerReducer