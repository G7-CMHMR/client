//import axios from 'axios' 
import {
    CHANGE_LOGIN,
    CHANGE_REGISTER
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
const changeStateLogin = (opposite) => ({
    type:CHANGE_LOGIN,
    payload:opposite
})
const changeStateRegister = (opposite) => ({
    type:CHANGE_REGISTER,
    payload:opposite
})
