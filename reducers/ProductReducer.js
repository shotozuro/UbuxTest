import { GET_PRODUCTS } from '../actions/ActionTypes'

const INITIAL_STATE = {
  products: [],
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS.REQUEST:
      return {
        ...state,
        loading: true
      }
    case GET_PRODUCTS.SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false
      }

    case GET_PRODUCTS.FAILURE:
      return {
        ...state,
        loading: false
      }

    default:
      return state
  }
}
