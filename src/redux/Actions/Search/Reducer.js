import {
    SEARCH_CHANGE,
    SEARCH_ATTEMPT
} from './ActionsName';

const initialState = {
    search: '',
    results: [],
}

export default function SearchReducer (state = initialState, action){
    switch (action.type) {
        case SEARCH_CHANGE:
            return {
                ...state,
                search: action.payload
            }
        case SEARCH_ATTEMPT:
            return {
                ...state,
                results: action.payload
            }
        
        default: return state;
    }
}