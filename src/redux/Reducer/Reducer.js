import { combineReducers } from 'redux'

import productsReducer from '../Actions/Products/Reducer'
import userReducer from '../Actions/User/Reducer'
import adminReducer from '../Actions/Admin/Reducer'
import SearchReducer from '../Actions/Search/Reducer'
import favouritesReducer from '../Actions/Favourites/Reducer'
import cartReducer from '../Actions/Cart/Reducer'
import purchaseOrderReducer from '../Actions/PurchaseOrder/Reducer'
import sellerReducer from '../Actions/Seller/Reducer'

export default combineReducers({
  productsReducer,
  userReducer,
  SearchReducer,
  favouritesReducer,
  cartReducer,
  purchaseOrderReducer,
  sellerReducer,
  adminReducer
})