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
    ATTEMPT_LOGOUT

  } from './ActionsName'

  const initialState = {
      loginwindow: false,
      registerwindow: false,
      loading: false,
      attempt: null,
      error: null,
      username: null
  }

export default function userReducer(state = initialState, action){
    switch (action.type) {
        case CHANGE_LOGIN:
            return {
                ...state,
                loginwindow: action.payload,
                registerwindow: false,
                error: null
            }
        case CHANGE_REGISTER:{
            return {
                ...state,
                registerwindow: action.payload,
                loginwindow: false,
                error: null
            }
        }
        case ATTEMPT_REGISTER:
        case ATTEMPT_LOGIN: {
            return {
                ...state,
                loading: action.payload,
                error: null

            }
        }
        case ATTEMPT_REGISTER_SUCCESS:{
            return {
                ...state,
                loading: false,
                attempt: null,
                username: null,
                loginwindow: false,
                registerwindow: false,
                error: null
            }
        }
        case ATTEMPT_LOGIN_SUCCESS: {
            return {
                ...state,
                loading: false,
                attempt: null,
                username: action.payload,
                loginwindow: false,
                registerwindow: false,
                error: null
            }
        }
        case ATTEMPT_REGISTER_FAILED:
        case ATTEMPT_LOGIN_FAILED: {
            return {
                ...state,
                loading: false,
                error: action.payload

            }
        }

        case ATTEMPT_LOGOUT: {
            return {
                ...state,
                loginwindow: false,
                registerwindow: false,
                loading: false,
                attempt: null,
                error: null,
                username: null
            }
        }

        default:
            return state;
    }
}