import {GET_CART,ADD_PRODUCT_CART, REMOVE_PRODUCT_CART, DECREMENT_PRODUCT_UNIT, INCREMENT_PRODUCT_UNIT } from './ActionsName'

const initialState = {
    cart: []
}
//Combine Reducers
function cartReducer (state = initialState, action) {
    switch (action.type){
        case GET_CART: {
            return {
                ...state,
                cart: action.payload
                
            }
        }
        case ADD_PRODUCT_CART: {
            return {
                ...state,
                cart: action.payload
                
            }
        }
        case REMOVE_PRODUCT_CART: {
            return {
                ...state,
                cart: action.payload
                
            }
        }
       
        case DECREMENT_PRODUCT_UNIT: {
            return {
                ...state,
                cart: action.payload
                
            }
        }
        case INCREMENT_PRODUCT_UNIT: {
            return {
                ...state,
                cart: action.payload
                
            }
        }

        
        default: return state;

    }
}

export default cartReducer