import {GET_CART,ADD_PRODUCT_CART, REMOVE_PRODUCT_CART, DECREMENT_PRODUCT_UNIT, CHECKOUT, SUCCESS } from './ActionsName'

const initialState = {
    cart: JSON.parse(localStorage.getItem('cartguest')) || [],
    checkout: [],
    isReadyToPay: false,
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
        case "ADD_ITEM": {
                return {
                    ...state,
                    cart: action.payload
                }            
            }

        case CHECKOUT : {
            return {
                ...state,
                checkout: action.payload,
                isReadyToPay: true,
            }
        }

        case 'RESETCHECKOUT' : {
            return {
                ...state,
                isReadyToPay: false,
            }
        }
      
        
        default: return state;

    }
}

export default cartReducer