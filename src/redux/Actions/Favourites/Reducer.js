import { GET_FAVOURITES, POST_FAVOURITES, REMOVE_FAVOURITES } from './ActionsName'


const initialState = {
    favourites: [],
}

function favouritesReducer(state = initialState, action) {

    switch (action.type) {
        case GET_FAVOURITES: {
            return {
                ...state,
                favourites: action.payload
            }
        }
        case POST_FAVOURITES: {
            return {
                ...state,
                favourites: action.payload
            }
        }
        
        case REMOVE_FAVOURITES: {
            return {
                ...state,
                favourites: action.payload
            }
        }

        default: return state;
    }

}

export default favouritesReducer