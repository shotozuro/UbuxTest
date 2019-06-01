import { GET_ALL_STORES } from '../actions/ActionTypes'

const INITIAL_STATE = {
  stores: [],
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_STORES.REQUEST:
      return {
        ...state,
        loading: true
      }
    case GET_ALL_STORES.SUCCESS:
      return {
        ...state,
        stores: action.payload,
        loading: false
      }

    case GET_ALL_STORES.FAILURE:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
