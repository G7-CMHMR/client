//import axios from 'axios' 
import {
    CHANGE_LOGIN,
    CHANGE_REGISTER,
    LOGGED_IN
  } from './ActionsName'

  const initialState = {
      loginwindow: false,
      registerwindow: false,
      loggedin:false
  }

export default function userReducer(state = initialState, action){
    switch (action.type) {
        case CHANGE_LOGIN:
            return {
                ...state,
                loginwindow: action.payload,
                registerwindow: false
            }
        case CHANGE_REGISTER:{
            return {
                ...state,
                registerwindow: action.payload,
                loginwindow: false
            }
        }
        case LOGGED_IN:{
            return{
                ...state,
                loggedin:action.payload
            }
        }
        default:
            return state;
    }
}