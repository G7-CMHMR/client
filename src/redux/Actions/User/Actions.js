//import axios from 'axios' 
import {
    CHANGE_LOGIN,
    CHANGE_REGISTER,
    ATTEMPT_LOGIN,
    ATTEMPT_LOGIN_SUCCESS,
    ATTEMPT_LOGIN_FAILED,
    ATTEMPT_REGISTER,
    ATTEMPT_REGISTER_SUCCESS,
    ATTEMPT_REGISTER_FAILED,
    ATTEMPT_LOGOUT,
    
    BECOME_SELLER,
    ATTEMPT_BECOME_SELLER,
    ATTEMPT_BECOME_SELLER_SUCCESS,
    ATTEMPT_BECOME_SELLER_FAILED
  } from './ActionsName';

import clientAxios from '../../../config/axios';
import { toast } from 'react-toastify';

//OPEN LOGIN
export function changeStateLoginAction(opposite) {
    return (dispatch) => {
        dispatch(changeStateLogin(opposite))
    }
}
export const changeStateLogin = (opposite) => ({
    type:CHANGE_LOGIN,
    payload:opposite
})

//OPEN REGISTER
export function changeStateRegisterAction (opposite) {
    return (dispatch) => {
        dispatch(changeStateRegister(opposite))
    }
}


const changeStateRegister = (opposite) => ({
    type:CHANGE_REGISTER,
    payload:opposite
})
// Trying to Register
export function attemptRegisterAction (attempt) {
    return async (dispatch) => {
        dispatch(attemptRegister() );
        try {
            const { data } = await clientAxios.post('/auth/create', attempt)
            console.log(data)
            
            dispatch(attemptRegisterSuccess())
            
            toast.success('Se ha enviado un email a su correo electrónico')
        } catch (error) {
            
            dispatch(attemptRegisterFailed(error.response.data))
        }
    }
}
const attemptRegister = () => ({
    type:ATTEMPT_REGISTER,
    payload:true
})
const attemptRegisterSuccess = () => ({
    type:ATTEMPT_REGISTER_SUCCESS
    
})
const attemptRegisterFailed = (newstate) => ({
    type:ATTEMPT_REGISTER_FAILED,
    payload: newstate
})

const setToLocalStorage = (token, username) => {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
};

// Trying to Login
export function attemptLoginAction (attempt) {
    return async (dispatch) => {
        dispatch(attemptLogin() );
        try {
            const { data } = await clientAxios.post('/auth/login', attempt)
            
            dispatch( attemptLoginSuccess( data ))

            setToLocalStorage(data.token, data.name);
            
        } catch (error) {            
            
            dispatch(attemptLoginFailed(error.response.data.error))
            
        }
    }
}

export function attemptLoginGoogle(data) {
    return (dispatch) => {
        dispatch( attemptLoginSuccess(data));

        setToLocalStorage(data.token, data.name);
    }
}

export function attemptVerifyLogin () {
    
    return async (dispatch) => {

        try {
            const token = localStorage.getItem('token') || '';
            //const username = localStorage.getItem('username') || '';

            //if (username) dispatch( attemptLoginSuccess( username ))

            if (token) {

                const { data } = await clientAxios.get('/auth/renew-token',
                    { headers: {'x-token': token }}
                )
                
                dispatch( attemptLoginSuccess( data ))
                /* dispatch( attemptUserData( data )) */
                
                setToLocalStorage(data.token, data.name);
            }
            
            // alert('Usuario logueado')
        } catch (error) {
            console.log(error)
            dispatch(attemptLoginFailed(error.response.data.error))
        }
    }
}

export function attemptLogoutAction() {
    return (dispatch) => {
        
        dispatch(attemptLogout());
        
        localStorage.removeItem('token');
        localStorage.removeItem('username');
    
    }
}

export function changeDataOfUser(newData){
    console.log(newData)
    return async (dispatch) => {
        try {
            await clientAxios.put(`/auth/update`, newData)
            
        } catch (error) {
            console.log('ERROR AL CAMBIAR LOS DATOS: ',error.response.data)
        }
    }
}

export function changePasswordOfUser(newData){
    console.log(newData)
    return async (dispatch) => {
        try {
            await clientAxios.put(`/auth/update`, newData)
            
        } catch (error) {
            console.log('ERROR AL CAMBIAR LOS DATOS: ',error.response.data)
        }
    }
}


const attemptLogin = () => ({
    type:ATTEMPT_LOGIN,
    payload: true
    
})
const attemptLoginSuccess = ( userdata) => ({
    type:ATTEMPT_LOGIN_SUCCESS,
    payload: userdata
}) 
const attemptLoginFailed = (newstate) => ({
    type:ATTEMPT_LOGIN_FAILED,
    payload:newstate
})

const attemptLogout = () => ({
    type:ATTEMPT_LOGOUT
})

/* const attemptUserData = (data) => ({
    type: USER_DATA,
    payload: data
})
 */
export function becomeSellerAction(opposite){
    return (dispatch) => {
        dispatch(becomeSeller(opposite))
    }
}
const becomeSeller = (opposite) => ({
    type:BECOME_SELLER,
    payload: opposite

})
export function attemptBecomeSellerAction (attempt) {
    return async (dispatch) => {
        dispatch(attemptBecomeSeller())
        try {
            
            const {data} = await clientAxios.post('/seller/create/', attempt)
            console.log(data)
            dispatch(becomeSellerSuccess(data))
        } catch (error) {
            console.error(error.response)
            dispatch(BecomeSellerFailed(error.response.data))
        }
    }
}
const attemptBecomeSeller = () => ({
    type: ATTEMPT_BECOME_SELLER,
    payload: true
})
const becomeSellerSuccess = (data) => ({
    type: ATTEMPT_BECOME_SELLER_SUCCESS,
    payload: data
})
const BecomeSellerFailed = (data) => ({
    type: ATTEMPT_BECOME_SELLER_FAILED,
    payload: data
})