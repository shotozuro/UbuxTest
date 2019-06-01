import API from '../services/api'
import { takeLatest, all } from 'redux-saga/effects'
import { getStores, searchStore } from '../sagas/StoreSagas'
import { GET_ALL_STORES, SEARCH_STORE } from '../actions/ActionTypes'
const api = API.create()

function * rootSaga () {
  yield all([
    takeLatest(GET_ALL_STORES.REQUEST, getStores, api),
    takeLatest(SEARCH_STORE.REQUEST, searchStore, api)
  ])
}

export default rootSaga
