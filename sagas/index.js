import API from '../services/api'
import { takeLatest, all } from 'redux-saga/effects'

import {
  GET_ALL_STORES,
  SEARCH_STORE,
  GET_PRODUCTS,
  GET_STORE_DETAIL
} from '../actions/ActionTypes'

import { getStores, searchStore, getStore } from '../sagas/StoreSagas'
import { getProducts } from './ProductSagas'

const api = API.create()

function * rootSaga () {
  yield all([
    takeLatest(GET_ALL_STORES.REQUEST, getStores, api),
    takeLatest(SEARCH_STORE.REQUEST, searchStore, api),
    takeLatest(GET_STORE_DETAIL.REQUEST, getStore, api),
    takeLatest(GET_PRODUCTS.REQUEST, getProducts, api)
  ])
}

export default rootSaga
