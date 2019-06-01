import { GET_ALL_STORES, SEARCH_STORE } from './ActionTypes'

export const getAllStoresRequest = () => ({
  type: GET_ALL_STORES.REQUEST
})

export const getAllStoresSuccess = (result) => ({
  type: GET_ALL_STORES.SUCCESS,
  payload: result
})

export const getAllStoresFailure = (error) => ({
  type: GET_ALL_STORES.FAILURE,
  error
})

export const searchStoreRequest = (keyword) => ({
  type: SEARCH_STORE.REQUEST,
  keyword
})

export const searchStoreSuccess = (result) => ({
  type: SEARCH_STORE.SUCCESS,
  payload: result
})

export const searchStoreFailure = (error) => ({
  type: SEARCH_STORE.FAILURE,
  error
})
