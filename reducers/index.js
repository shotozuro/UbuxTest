import { combineReducers } from 'redux'
import store from './StoreReducer'

export const reducer = combineReducers({
  nav: require('./NavigationReducer').reducer,
  store
})
