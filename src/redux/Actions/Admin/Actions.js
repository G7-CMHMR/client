import {
    GET_USERS, DELETE_USER, PASSWORD_RESET, BECOME_ADMIN,
    GET_PC, REVIEW_PC, ADD_CATEGORY, EDIT_CATEGORY,DELETE_CATEGORY
} from './ActionsName'
import clientAxios from '../../../config/axios';

export function getUsers(idAdmin) {
    return (dispatch) => {
        clientAxios.post('/admin/Users', { adminId: idAdmin })
            .then(response => {
                dispatch({ type: GET_USERS, payload: response.data })
            })
    }
}
export function DeleteUser(adminId_userId) {
    return (dispatch) => {
        console.log(adminId_userId)
        clientAxios.post('/admin/User', adminId_userId)
            .then(response => {
                dispatch({ type: GET_USERS, payload: response.data })
            })
    }
}
export function PasswordReset(adminId, userId) { //{userId, adminId, password}
    return (dispatch) => {
        clientAxios.put('/admin/Pass', { adminId: adminId, userId: userId })
            .then(response => {
                // dispatch({ type: PASSWORD_RESET, payload: response.data })
            })
    }
}

export function BecomeAdmin(adminId, userId, status, superAdmin = false) { //{userId, adminId} //STATUS TRUE LE DOY ADMIN, FALSE SE LO QUITO, SUPER ADMIN ( TRUE SE LO DOY)
    console.log(adminId, userId, status, superAdmin)
    return (dispatch) => {
        clientAxios.post('/admin/MakeMeUser', { adminId: adminId, userId: userId, status: status, superAdmin: superAdmin})
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
export function incompletePC(data) { //{userId, productId, valuation}
    return (dispatch) => {
        clientAxios.put('/admin/giveMeAReview', data)
            .then(response => {
                dispatch({ type: REVIEW_PC, payload: response.data })
            })
    }
}

export function SearchUser(idAdmin, name) {
    return (dispatch) => {
        clientAxios.post('/admin/Search', { adminId: idAdmin, name: name })
            .then(response => {
                dispatch({ type: GET_USERS, payload: response.data })
                console.log(response.data)
            })
        }
}


export function addCategory(category_name) {
    return (dispatch) => {
        clientAxios.post('/category/category', category_name)
            .then(response => {
                dispatch({ type: 'GET_CATEGORIES', payload: response.data })
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
export function deleteCategory(data) { //{category, status, adminId}
    return (dispatch) => {
        clientAxios.post('/admin/Category', data)
            .then(response => {
                dispatch({ type: DELETE_CATEGORY, payload: response.data })

            })
    }
}