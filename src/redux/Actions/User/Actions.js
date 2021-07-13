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
            await clientAxios.post('/auth/create', attempt)
            
            dispatch(attemptRegisterSuccess(attempt.name))
            
            toast.success('Se ha enviado un email a su correo electrónico')
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
            
            dispatch( attemptLoginSuccess( data.name ))

            setToLocalStorage(data.token, data.name);
            
        } catch (error) {
            
            console.log(error)
            dispatch(attemptLoginFailed(true))
            //alert('Error al conectar con usuario')
        }
    }
}

export function attemptLoginGoogle(name, token) {
    return (dispatch) => {
        dispatch( attemptLoginSuccess(name));

        setToLocalStorage(token, name);
    }
}

export function attemptVerifyLogin () {
    
    return async (dispatch) => {

        try {
            const token = localStorage.getItem('token') || '';
            const username = localStorage.getItem('username') || '';

            if (username) dispatch( attemptLoginSuccess( username ))

            if (token) {

                const { data } = await clientAxios.get('/auth/renew-token',
                    { headers: {'x-token': token }}
                )
                dispatch( attemptLoginSuccess( data.name ))
                
                setToLocalStorage(data.token, data.name);
            }
            
            // alert('Usuario logueado')
        } catch (error) {
            console.log(error)
            dispatch(attemptLoginFailed(true))
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


const attemptLogin = () => ({
    type:ATTEMPT_LOGIN,
    payload: true
    
})
const attemptLoginSuccess = ( username) => ({
    type:ATTEMPT_LOGIN_SUCCESS,
    payload: username
}) 
const attemptLoginFailed = (newstate) => ({
    type:ATTEMPT_LOGIN_FAILED,
    payload:newstate
})

const attemptLogout = () => ({
    type:ATTEMPT_LOGOUT
})