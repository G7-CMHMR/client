import { POST_PRODUCT } from './ActionsName'


const initialState = {
    sellerProducts =[],

}

function sellerReducer(state = initialState, action) {

    switch (action.type) {
        case POST_PRODUCT: {
            return {
                ...state,
                sellerProducts: action.payload

            }
        }

        default: return state;

    }
}

export default sellerReducer