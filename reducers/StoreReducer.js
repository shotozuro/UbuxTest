import { GET_ALL_STORES, SEARCH_STORE, GET_STORE_DETAIL } from '../actions/ActionTypes'

const INITIAL_STATE = {
  stores: [],
  loading: false,
  store: null
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

    case SEARCH_STORE.REQUEST:
      return {
        ...state,
        loading: true
      }
    case SEARCH_STORE.SUCCESS:
      return {
        ...state,
        stores: action.payload,
        loading: false
      }

    case SEARCH_STORE.FAILURE:
      return {
        ...state,
        loading: false
      }

    case GET_STORE_DETAIL.REQUEST:
      return {
        ...state,
        loading: true
      }
    case GET_STORE_DETAIL.SUCCESS:
      return {
        ...state,
        store: action.payload,
        loading: false
      }

    case GET_STORE_DETAIL.FAILURE:
      return {
        ...state,
        loading: false
      }

    default:
      return state
  }
}
