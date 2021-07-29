import { 
    GET_USERS, 
    DELETE_USER, 
    PASSWORD_RESET,
    BECOME_ADMIN,
    GET_PC,
    REVIEW_PC,
    ADD_CATEGORY,
    EDIT_CATEGORY,
    DELETE_CATEGORY
    
} from './ActionsName';

const initialState = {
    users: [],
    pc: [],
    categories: [],
}
export default function adminReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS: {
            return {
                ...state,
                users: action.payload                
            }
        }
        case DELETE_USER: {
            return {
                ...state,
                users: action.payload
            }
        }
        case PASSWORD_RESET: {
            return {
                ...state,
                users: action.payload
            }
        }
        case BECOME_ADMIN: {
            return {
                ...state,
                users: action.payload
            }
        }
        case GET_PC: {
            return {
                ...state,
                pc: action.payload
            }
        }
        case REVIEW_PC: {
            return {
                ...state,
                pc: action.payload
            }
        }
        case ADD_CATEGORY: {
            return {
                ...state,
                categories: action.payload
            }
        }
        case EDIT_CATEGORY: {
            return {
                ...state,
                categories: action.payload
            }
        }
       case DELETE_CATEGORY: {
        return {
            ...state,
            categories: action.payload
        }
    }
        default: return state;
    }

}

