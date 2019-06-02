import React from 'react'
import { Platform, TouchableOpacity } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import HomeScreen from '../screens/HomeScreen'
import StoreDetailScreen from '../screens/StoreDetailScreen'
import CartScreen from '../screens/CartScreen'

import BaseIcon from '../components/BaseIcon'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  StoreDetail: StoreDetailScreen,
  Cart: CartScreen
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    headerRight: (
      <TouchableOpacity
        style={{ padding: 10, alignItems: 'center', justifyContent: 'center' }}
        onPress={() => navigation.navigate('Cart')} >
        <BaseIcon name={Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'} size={24} color={'blue'} />
      </TouchableOpacity>)
  })
})

export default HomeStack
