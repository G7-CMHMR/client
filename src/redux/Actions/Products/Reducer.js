import { UPDATE_PRODUCT, GET_PRODUCTS, GET_PRODUCT_DETAIL, GET_PRODUCTS_OFFER, GET_CATEGORIES, SORT, GET_FAVOURITES } from './ActionsName'


const initialState = {
    products: [],
    productsOffer: [],
    productDetail: [],
    categories: [],
    favourites: [],
}

function productsReducer(state = initialState, action) {

    switch (action.type) {
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

        case GET_PRODUCTS_OFFER: {
            return {
                ...state,
                productsOffer: action.payload
            }
        }
        case GET_CATEGORIES: {
            return {
                ...state,
                categories: action.payload
            }
        }
        case SORT: {
            return {
                ...state,
                products: action.payload
            }
        }     

        case GET_FAVOURITES: {
            return{
                ...state,
                favourites: action.payload
            }
        }
        case UPDATE_PRODUCT: {
            return {
                ...state,
                productDetail: action.payload
            }
        } 
        default: return state;
    }

}

export default productsReducer