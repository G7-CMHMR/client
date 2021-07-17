import clientAxios from '../../../config/axios';
import {
    SEARCH_CHANGE,
    SEARCH_ATTEMPT
} from './ActionsName';

export function onChangeSearchAction(search) {
    return async (dispatch) => {
        dispatch(onChangeSearch(search))
        try {
            if(search !== ''){
                const { data } = await clientAxios.get('/Search/' + search)
                dispatch(searchOnServer(data))
            } else {
                dispatch(searchOnServer([]))
            }
            
        } catch (error) {
            console.error(error)
        }
        /* dispatch(searchOnServer) */
    }
}



export function CleanProducts() {
    return (dispatch) => {
        dispatch({ type: SEARCH_ATTEMPT, payload: [] })
    }
}

export function putOnSearchBar(productName) {
    return (dispatch) => {
        dispatch({ type: SEARCH_CHANGE, payload: productName })
    }
}

const onChangeSearch = (search) => ({
    type: SEARCH_CHANGE,
    payload: search
})
const searchOnServer = (consultaApi) => ({
    type: SEARCH_ATTEMPT,
    payload:consultaApi
})