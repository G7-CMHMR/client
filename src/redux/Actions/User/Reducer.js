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
      error: false,
      username: null
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
        case ATTEMPT_REGISTER:
        case ATTEMPT_LOGIN: {
            return {
                ...state,
                loading: action.payload
            }
        }
        case ATTEMPT_REGISTER_SUCCESS:
        case ATTEMPT_LOGIN_SUCCESS: {
            return {
                ...state,
                loading: false,
                attempt: action.payload,
                username: action.payload,
                loginwindow: false,
                registerwindow: false
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
                state: ''
            }
        }

        default:
            return state;
    }
}