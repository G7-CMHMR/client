import { combineReducers } from 'redux'

import productsReducer from '../Actions/Products/Reducer'
import userReducer from '../Actions/User/Reducer'
import favouritesReducer from '../Actions/Favo/Reducer'
import cartReducer from '../Actions/Cart/Reducer'

export default combineReducers({
  productsReducer,
  userReducer,
  favouritesReducer,
  cartReducer
})