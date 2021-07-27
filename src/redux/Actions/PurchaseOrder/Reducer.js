import {GET_PURCHASE_ORDER, GET_ITEMS} from './ActionsName'

const initialState = {
    purchaseOrderHistory: [],
    ProductsHistory: [],
}
//Combine Reducers
function purchaseOrderReducer (state = initialState, action) {
    switch (action.type){

        case GET_PURCHASE_ORDER: {
            return {
                ...state,
                purchaseOrderHistory: action.payload 
            }
        }

        case GET_ITEMS: {
            return{
                ...state,
                ProductsHistory: action.payload
            }
        }

        default: return state;

    }
}

export default purchaseOrderReducer