
const INITIAL_STATE = {
  cart: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const { cart } = state
      const { product } = action
      const index = cart.findIndex(cartProduct => cartProduct._id === product._id)

      return {
        ...state,
        cart: index < 0 ? [product, ...cart] : [...cart]
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.length > 0 ? [...state.cart].filter(product => product._id !== action.productId) : []
      }

    case 'GET_FROM_CART':
      return {
        ...state
      }

    default:
      return state
  }
}
