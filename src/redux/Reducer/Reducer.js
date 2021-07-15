import { combineReducers } from 'redux'

import productsReducer from '../Actions/Products/Reducer'
import userReducer from '../Actions/User/Reducer'
import FavoritesReducer from '../Actions/Favo/Reducer'

export default combineReducers({
  productsReducer,
  userReducer,
  FavoritesReducer,
})