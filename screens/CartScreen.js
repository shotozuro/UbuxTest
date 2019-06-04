import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import { getFromCart, removeFromCart } from '../actions/CartActions'
import Separator from '../components/Separator'
import BaseIcon from '../components/BaseIcon'
import styles from './styles/CartScreenStyle'
import { Platform } from 'expo-core'
import Colors from '../constants/Colors'

class CartScreen extends React.Component {
  static navigationOptions = {
    title: 'Cart'
  }

  componentDidMount () {
    this.props.getFromCart()
  }

  renderItem = ({ item, index }) => {
    return (
      <View
        style={styles.productItemContainer}>
        <Image
          source={{ uri: item.imageUrl }}
          style={{ height: 56, width: 100 }}
        />
        <View
          style={{
            flex: 1,
            height: 56,
            marginHorizontal: 16,
            justifyContent: 'space-around'
          }}>
          <Text style={{ fontSize: 16, color: '#000000de' }}>{item.name}</Text>
          <Text style={{ fontSize: 14, color: '#00000099' }}>
            {item.priceCash}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => this.props.removeFromCart(item._id)}
          style={{
            marginRight: 16,
            height: 24,
            width: 24,
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.fire
          }}>
          <BaseIcon name={Platform.OS === 'ios' ? 'ios-remove' : 'md-remove'} size={24} color={'#fff'} />
        </TouchableOpacity>
      </View>
    )
  }

  render () {
    const { products } = this.props
    return (
      <View style={styles.container}>
        <FlatList
          style={{ flex: 1 }}
          data={products}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString(10)}
          ListHeaderComponent={() => (<View style={{ paddingHorizontal: 16, justifyContent: 'center', marginVertical: 10 }}>
            <Text>{products.length > 0 ? `${products.length} ${products.length > 1 ? 'products' : 'product'} in your cart` : ''}</Text>
          </View>)}
          ListEmptyComponent={() => (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 20 }}>
            <Text>{`You haven't selected any products yet.`}</Text>
          </View>)}
          ItemSeparatorComponent={() => <Separator style={{ marginLeft: 116 }} />}
        />
      </View>
    )
  }
}
const mapStateToProps = state => ({
  products: state.cart.cart
})

const mapDispatchToProps = dispatch => ({
  getFromCart: () => dispatch(getFromCart()),
  removeFromCart: (productId) => dispatch(removeFromCart(productId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen)
