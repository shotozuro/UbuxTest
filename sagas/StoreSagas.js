import { put, call } from 'redux-saga/effects'
import { GET_ALL_STORES } from '../actions/ActionTypes'

export function * getStores (api, action) {
  try {
    const response = yield call(api.getAllStores)
    yield put({ type: GET_ALL_STORES.SUCCESS, payload: response.data.stores })
  } catch (err) {
    yield put({ type: GET_ALL_STORES.FAILURE, error: err })
  }
}
