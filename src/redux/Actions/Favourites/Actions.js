import axios from 'axios'
import { GET_FAVOURITES, POST_FAVOURITES, REMOVE_FAVOURITES } from './ActionsName'
import clientAxios from '../../../config/axios';

export function getFavourites(userID){
    return (dispatch) => {
        clientAxios.get(`/favourite/${userID}`)
            .then(response => {
                dispatch({ type: GET_FAVOURITES, payload: response.data })
            })
    }
}

export function AddFavourites(productID_UserID){
    /* console.log('**********************************')
    console.log(productID_UserID) */
    return (dispatch) => {
        clientAxios.post('/favourite/add', productID_UserID)
        .then (response => {
            dispatch({type: GET_FAVOURITES, payload: response.data})
        })
        .catch (error => {console.log(error)})
    }
}


export function RemoveFavourites(productID_UserID){
    return (dispatch) => {
        clientAxios.post(`/favourite/remove`, productID_UserID)
        .then(response => {
            dispatch({type: GET_FAVOURITES, payload: response.data})
        })
    }
}
