import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class CartScreen extends React.Component {
  static navigationOptions = {
    title: 'Cart'
  }
  state = {
    products: []
  }

  componentDidMount () {
    // fetch selected products
  }

  render () {
    return (
      <View>
        <Text>Cart screen</Text>
      </View>
    )
  }
}
const mapStateToProps = state => ({
  store: state.store.stores
})

const mapDispatchToProps = (dispatch) => {
  return null
}

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen)
