import React from 'react'
import { Platform, StatusBar } from 'react-native'
import AppNavigator from './navigation/AppNavigator'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import { reducer } from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
        <AppNavigator />
      </Provider>
    )
  }
}
