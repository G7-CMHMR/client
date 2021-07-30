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
    ATTEMPT_CONFIRM_ACCOUNT, //Agregada
    ATTEMPT_LOGOUT,
    ATTEMPT_UPDATE_SUCCESS,
    ATTEMPT_UPDATE_FAILED,    
    BECOME_SELLER,
    ATTEMPT_BECOME_SELLER,
    ATTEMPT_BECOME_SELLER_SUCCESS,
    ATTEMPT_BECOME_SELLER_FAILED

  } from './ActionsName'

  const initialState = {
      loginwindow: false,
      registerwindow: false,
      becomeseller: false,
      loading: false,
      attempt: null,
      error: null,      
      userData: {},
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
        case ATTEMPT_BECOME_SELLER:
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
                ...initialState
            }
        }
        case ATTEMPT_LOGIN_SUCCESS: {
            return {
                ...state,
                loading: false,
                attempt: null,
                userData: action.payload,
                loginwindow: false,
                registerwindow: false,
                error: null
            }
        }
        case ATTEMPT_BECOME_SELLER_FAILED:
        case ATTEMPT_UPDATE_FAILED:
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
                ...initialState
            }
        }
        case ATTEMPT_UPDATE_SUCCESS: {
            return {
                ...state,
                userData: action.payload
            }
        }
        case BECOME_SELLER: {
            return {
                ...state,
                becomeseller: action.payload
            }
        }

        case ATTEMPT_BECOME_SELLER_SUCCESS: {
            return{
                ...state,
                userData: action.payload,
                becomeseller: false
            }
        }

        default:
            return state;
    }
}