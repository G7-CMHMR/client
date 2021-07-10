//import axios from 'axios' 
import {
    CHANGE_LOGIN,
    CHANGE_REGISTER,
    LOGGED_IN
  } from './ActionsName';

  export function changeStateLoginAction(opposite) {
    return (dispatch) => {
        dispatch(changeStateLogin(opposite))
    }
}
export function changeStateRegisterAction (opposite) {
    return (dispatch) => {
        dispatch(changeStateRegister(opposite))
    }
}

//prueba
export function changelogin(opposite){
    return(dispatch)=>{
        dispatch(cambiarlogin(opposite))
    }
}
const cambiarlogin = (opposite) =>({
    type:LOGGED_IN,
    payload: opposite
})



const changeStateLogin = (opposite) => ({
    type:CHANGE_LOGIN,
    payload:opposite
})
const changeStateRegister = (opposite) => ({
    type:CHANGE_REGISTER,
    payload:opposite
})
