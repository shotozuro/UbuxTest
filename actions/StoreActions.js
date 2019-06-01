import { GET_ALL_STORES } from './ActionTypes'

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
