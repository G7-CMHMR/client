import { GET_USERS, DELETE_USER, PASSWORD_RESET, BECOME_ADMIN, 
    GET_PC, REVIEW_PC, ADD_CATEGORY, EDIT_CATEGORY} from './ActionsName'
import clientAxios from '../../../config/axios';

export function getUsers(idAdmin) {
    return (dispatch) => {
        clientAxios.get(`/admin/Users?adminId=${idAdmin}`)
            .then(response => {
                dispatch({ type: GET_USERS, payload: response.data })
                console.log(response.data)
            })
    }
}
export function DeleteUser(adminId_userId) {
    return (dispatch) => {
        console.log(adminId_userId)
        clientAxios.delete('/admin/User', {data: adminId_userId})
            .then(response => {
                dispatch({ type: DELETE_USER, payload: response.data })
            })
    }
}
export function PasswordReset(data) { //{userId, adminId, password}
    return (dispatch) => {
        clientAxios.put('/admin/Pass', data)
            .then(response => {
                dispatch({ type: PASSWORD_RESET, payload: response.data })
            })
    }
}
export function BecomeAdmin(data) { //{userId, adminId}
    return (dispatch) => {
        clientAxios.PasswordReset('/admin/MakeMeUser', data)
            .then(response => {
                dispatch({ type: BECOME_ADMIN, payload: response.data })
            })
    }
}


export function GetPcNotValidate() {
    return (dispatch) => {
        clientAxios.get('/admin/notValidePC')
            .then(response => {
                dispatch({ type: GET_PC, payload: response.data })
            })
    }
}
export function ReviewPC(data) { //{userId, productId, valuation}
    return (dispatch) => {
        clientAxios.put('/admin/giveMeAReview', data)
            .then(response => {
                dispatch({ type: REVIEW_PC, payload: response.data })
            })
    }
}
export function addCategory(category_name) { 
    return (dispatch) => {
        clientAxios.post('/category/category', category_name)
            .then(response => {
                dispatch({ type: ADD_CATEGORY, payload: response.data })
            })
    }
}
export function editCategory(data) { //{category, newTitle}
    return (dispatch) => {
        clientAxios.post('/category/edit', data)
            .then(response => {
                dispatch({ type: EDIT_CATEGORY, payload: response.data })
            })
    }
}