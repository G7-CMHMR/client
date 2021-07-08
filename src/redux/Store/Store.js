import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import combineReducers from '../Reducer/Reducer'

const store = createStore(combineReducers, compose(applyMiddleware(thunk),
typeof window === 'object' && 
typeof window.REDUX_DEVTOOLS_EXTENSION !== 'undefined' ?
window.REDUX_DEVTOOLS_EXTENSION() : f => f))

export default store


