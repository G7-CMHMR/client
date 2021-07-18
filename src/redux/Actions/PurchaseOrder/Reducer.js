import {GET_PURCHASE_ORDER} from './ActionsName'

const initialState = {
    purchaseOrderHistory: []
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

        default: return state;

    }
}

export default purchaseOrderReducer