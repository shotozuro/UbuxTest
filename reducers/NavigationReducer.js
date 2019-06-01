import AppNavigator from '../navigation/AppNavigator'

export const reducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state)
  return newState || state
}
