//import axios from 'axios' 
import {
    ATTEMP_REVIEW_SELLER,
    ATTEMP_REVIEW_PRODUCT,
    GET_SELLER_REVIEW,
    GET_PRODUCT_REVIEW
  } from './ActionsName';

import clientAxios from '../../../config/axios';
import { toast } from 'react-toastify';

export function atemptReviewSeller(idUser, idSeller, review){
    return async (dispatch) => {
        try {
            const { data } = await clientAxios.post(`/sellerReview/create`, {
                idUser,
                idSeller,
                review
            })
            console.log('LA REVIEW QUE VIENE DEL BACKEND: ',data);
        } catch (error) {
            toast.error(error.response.data.error)
        }
    }
}

export function getSellerReview(idSeller){
    return async (dispatch) => {
        try{
            const { data } = await clientAxios.get(`/sellerReview/${idSeller}`);
            console.log('LAS REVIEW DEL VENDEDOR: ', data)
            dispatch({ type: GET_SELLER_REVIEW, payload: data });
        } catch (error){
            toast.error(error.response.data.error)
        }
    }
}


export function atemptReviewProduct(){
    // return async (dispatch) => {
    //     try {
    //         const { data } = await clientAxios.post(`/productReview/create`, {
    //             idUser,
    //             idSeller,
    //             review
    //         })
    //         console.log('LA REVIEW QUE VIENE DEL BACKEND: ',data);
    //         toast.success('Se realizó la reseña con éxito')
    //     } catch (error) {
    //         toast.error(error.response.data.error)
    //     }
    // }
}
