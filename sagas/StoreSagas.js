import { put, call } from 'redux-saga/effects'
import { GET_ALL_STORES, SEARCH_STORE } from '../actions/ActionTypes'
// import console = require('console');

export function * getStores (api, action) {
  try {
    const response = yield call(api.getAllStores)
    yield put({ type: GET_ALL_STORES.SUCCESS, payload: response.data.stores })
  } catch (error) {
    yield put({ type: GET_ALL_STORES.FAILURE, error })
  }
}

export function * searchStore (api, action) {
  try {
    const response = yield call(api.searchStore, action.keyword)
    console.log(JSON.stringify(response))
    yield put({ type: SEARCH_STORE.SUCCESS, payload: response.data.stores })
  } catch (error) {
    yield put({ type: SEARCH_STORE.FAILURE, error })
  }
}
