import { combineReducers } from 'redux'

import productsReducer from '../Actions/Products/Reducer'
import userReducer from '../Actions/User/Reducer'

import SearchReducer from '../Actions/Search/Reducer'
import favouritesReducer from '../Actions/Favourites/Reducer'
import cartReducer from '../Actions/Cart/Reducer'


export default combineReducers({
  productsReducer,
  userReducer,
  SearchReducer,
  favouritesReducer,
  cartReducer,
})