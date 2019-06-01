import { GET_PRODUCTS } from './ActionTypes'

export const getProductsRequest = (storeId) => ({
  type: GET_PRODUCTS.REQUEST,
  storeId
})

export const getProductsSuccess = (result) => ({
  type: GET_PRODUCTS.SUCCESS,
  payload: result
})

export const getProductsFailure = (error) => ({
  type: GET_PRODUCTS.FAILURE,
  error
})
