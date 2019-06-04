import { put, call } from 'redux-saga/effects'
import { GET_ALL_STORES, SEARCH_STORE, GET_STORE_DETAIL } from '../actions/ActionTypes'

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
    yield put({ type: SEARCH_STORE.SUCCESS, payload: response.data.stores })
  } catch (error) {
    yield put({ type: SEARCH_STORE.FAILURE, error })
  }
}

export function * getStore (api, action) {
  try {
    const response = yield call(api.getStore, action.storeId)
    yield put({ type: GET_STORE_DETAIL.SUCCESS, payload: response.data.store })
  } catch (error) {
    yield put({ type: GET_STORE_DETAIL.FAILURE, error })
  }
}
