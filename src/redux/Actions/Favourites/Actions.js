import axios from 'axios'
import { GET_FAVOURITES, POST_FAVOURITES, REMOVE_FAVOURITES } from './ActionsName'


export function getFavourites(userID){
    console.log('LLEGA A ACTIONS 1111')
    return (dispatch) => {
        console.log('2222222222222222222222')
        axios.get('http://localhost:3001/products')
            .then(response => {
                dispatch({ type: GET_FAVOURITES, payload: response.data })
                console.log(response.data)
            })
    }
}

export function AddFavourites(productID_UserID){
    console.log('PEPITO')
    console.log(productID_UserID)
    return (dispatch) => {
        axios.post('http://localhost:3001/favourite/add', productID_UserID)
        .then (response => {
            console.log('2')
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
