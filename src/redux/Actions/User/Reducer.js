//import axios from 'axios' 
import {
    CHANGE_LOGIN,
    CHANGE_REGISTER
  } from './ActionsName'

  const initialState = {
      loginwindow: false,
      registerwindow: false
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
        default:
            return state;
    }
}