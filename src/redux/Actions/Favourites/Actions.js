import axios from 'axios'
import { GET_FAVOURITES, POST_FAVOURITES, REMOVE_FAVOURITES } from './ActionsName'


export function getFavourites(userID){
    return (dispatch) => {
        axios.get(`http://localhost:3001/favourite/${userID}`)
            .then(response => {
                dispatch({ type: GET_FAVOURITES, payload: response.data })
            })
    }
}

export function AddFavourites(productID_UserID){
    return (dispatch) => {
        axios.post('http://localhost:3001/favourite/add', productID_UserID)
        .then (response => {
            dispatch({type: POST_FAVOURITES, payload: response.data})
        })
        .catch (error => {console.log(error)})
    }
}


export function RemoveFavourites(productID_UserID){
    return (dispatch) => {
        axios.post(`http://localhost:3001/favourite/remove`, productID_UserID)
        .then(response => {
            dispatch({type: REMOVE_FAVOURITES, payload: response.data})
        })
    }
}
