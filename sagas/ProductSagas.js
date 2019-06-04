import { put, call } from 'redux-saga/effects'
import { GET_PRODUCTS } from '../actions/ActionTypes'

export function * getProducts (api, action) {
  try {
    const response = yield call(api.getProducts, action.storeId)
    yield put({ type: GET_PRODUCTS.SUCCESS, payload: response.data.products })
  } catch (error) {
    yield put({ type: GET_PRODUCTS.FAILURE, error })
  }
}
