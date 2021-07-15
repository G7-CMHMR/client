import { GET_FAVOURITES, POST_FAVOURITES, REMOVE_FAVOURITES } from './ActionsName'


const initialState = {
    favourites: [],
}

function FavoritesReducer(state = initialState, action) {

    switch (action.type) {
        case GET_FAVOURITES: {
            return {
                ...state,
                favourites: action.payload
                
            }
        }

        default: return state;
    }

}

export default FavoritesReducer