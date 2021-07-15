import axios from 'axios'
import { GET_FAVOURITES, POST_FAVOURITES, REMOVE_FAVOURITES } from './ActionsName'

export function getAllFavourites(userID){
    console.log('000000000000000000000000000000000')
    return (dispatch) => {
        console.log('11111111111111111111111111111111111111')
        axios.get(`http://localhost:3001/favourite/${userID}`)
            .then(response => {
                dispatch({ type: GET_FAVOURITES, payload: response.data })
                console.log(response.data)
            })
    } 
}





