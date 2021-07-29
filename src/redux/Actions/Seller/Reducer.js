import { POST_PRODUCT, GET_PRODUCTS_SELLER, GET_SOLD, GET_ALL_QUESTIONS } from './ActionsName'


const initialState = {
    ProductsSeller: [],
    ProductsSold: [],
    AllQuestions: []
}

function sellerReducer(state = initialState, action) {

    switch (action.type) {
        case POST_PRODUCT: {
            return {
                ...state,
                ProductsSeller: action.payload
            }
        }
        case GET_PRODUCTS_SELLER: {
            return {
                ...state,
                ProductsSeller: action.payload
            }
        }
        case GET_ALL_QUESTIONS: {
            return {
                ...state,
                AllQuestions: action.payload
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