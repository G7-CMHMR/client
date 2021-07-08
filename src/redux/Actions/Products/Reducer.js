import {GET_PRODUCTS, GET_PRODUCT_DETAIL} from './ActionsName'

const initialState = {
    products: [],
    productDetail: undefined,

}

function productsReducer (state = initialState, action) {
    switch (action.type){
        case GET_PRODUCTS: {
            return {
                ...state,
                products: action.payload
            }
        }
        case GET_PRODUCT_DETAIL: {
            return {
                ...state,
                productDetail: action.payload
            }
        }           
        default: return state;
    }
    
}

export default productsReducer