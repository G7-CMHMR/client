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

  } from './ActionsName';

import clientAxios from '../../../config/axios';

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
            console.log(attempt)
            await clientAxios.post('/auth/create', attempt)
            dispatch(attemptRegisterSuccess(attempt))
            alert('Usuario creado con exito')
        } catch (error) {
            dispatch(attemptRegisterFailed(true))
        }
    }
}
const attemptRegister = () => ({
    type:ATTEMPT_REGISTER,
    payload:true
})
const attemptRegisterSuccess = (attempt) => ({
    type:ATTEMPT_REGISTER_SUCCESS,
    payload:attempt
})
const attemptRegisterFailed = (newstate) => ({
    type:ATTEMPT_REGISTER_FAILED,
    payload: newstate
})

// Trying to Login
export function attemptLoginAction (attempt) {
    return async (dispatch) => {
        dispatch(attemptLogin() );
        try {
            const { data } = await clientAxios.post('/auth/login', attempt)
            dispatch( attemptLoginSuccess(attempt, data.name ))

            localStorage.setItem('token', data.token);
            
            // alert('Usuario logueado')
        } catch (error) {
            console.log(error)
            dispatch(attemptLoginFailed(true))
            alert('Error al conectar con usuario')
        }
    }
}

export function attemptLogoutAction() {
    return (dispatch) => {
        
        dispatch(attemptLogout());
    
        localStorage.removeItem('token');
    
    }
}


const attemptLogin = () => ({
    type:ATTEMPT_LOGIN,
    payload: true
    
})
const attemptLoginSuccess = (attempt, username) => ({
    type:ATTEMPT_LOGIN_SUCCESS,
    payload: {attempt, username}
}) 
const attemptLoginFailed = (newstate) => ({
    type:ATTEMPT_LOGIN_FAILED,
    payload:newstate
})

const attemptLogout = () => ({
    type:ATTEMPT_LOGOUT
})