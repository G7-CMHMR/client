import {GET_PRODUCTS, GET_PRODUCT_DETAIL} from '../Actions/ActionsName'

const initialState = {
    products: [],
    productDetail: undefined,

}
//Combine Reducers
function reducer (state = initialState, action) {
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

    }
}

export default reducer