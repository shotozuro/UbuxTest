import { combineReducers } from 'redux'
import store from './StoreReducer'
import product from './ProductReducer'
import cart from './CartReducer'

export const reducer = combineReducers({
  nav: require('./NavigationReducer').reducer,
  store,
  product,
  cart
})
