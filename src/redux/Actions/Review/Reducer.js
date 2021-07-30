//import axios from 'axios' 
import {
    ATTEMP_REVIEW_SELLER,
    ATTEMP_REVIEW_PRODUCT,
    GET_SELLER_REVIEW,
    GET_PRODUCT_REVIEW
  } from './ActionsName'

const initialState = {
    sellerReview: [],
    productReview: []
  }

export default function reviewReducer(state = initialState, action){
    switch (action.type) {
        case ATTEMP_REVIEW_SELLER:
        case ATTEMP_REVIEW_PRODUCT:
            return state;
        case GET_SELLER_REVIEW:
		console.log('ENTRE AL REDUCER');
            return{
                ...state,
		sellerReview: action.payload
            }
        default:
            return state;
    }
}
