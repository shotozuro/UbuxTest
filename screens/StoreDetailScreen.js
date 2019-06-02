import React from 'react'
import { View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { getStoreDetailRequest } from '../actions/StoreActions'
import { getProductsRequest } from '../actions/ProductActions'
import Avatar from '../components/Avatar'
import BaseIcon from '../components/BaseIcon'
import Separator from '../components/Separator'
import styles from './styles/StoreDetailStyle'

class StoreDetailScreen extends React.Component {
  state = {
    isFetchingProducts: false,
    isFetchingStoreDetail: false
  }

  componentDidMount () {
    const { params } = this.props.navigation.state
    if (params.storeId) {
      const { storeId } = params
      this.props.getProducts(storeId)
      this.props.getStoreDetail(storeId)
      this.setState({ isFetchingProducts: true, isFetchingStoreDetail: true })
    }
  }

  static getDerivedStateFromProps (props, state) {
    const { storeLoading, store, productsLoading, products } = props
    const { isFetchingStoreDetail, isFetchingProducts } = state
    if (storeLoading !== isFetchingStoreDetail) {
      props.navigation.setParams({ storeName: store.legalName })
      return { store, isFetchingStoreDetail: false }
    }

    if (productsLoading !== isFetchingProducts) {
      return { products, isFetchingProducts: false }
    }
    return null
  }

  render () {
    const { store } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.storeDetail}>
          <Avatar title={''} size={65} />
          <View style={{ flex: 1, height: 60, justifyContent: 'space-around', backgroundColor: '#fff', marginLeft: 16 }}>
            <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ fontSize: 18 }}>{store ? store.legalName : ''}</Text>
            <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ fontSize: 14 }}>{store ? store.suburb : ''}</Text>
            <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ fontSize: 12, color: '#5a5a5a' }}>{store ? store.businessEmail : ''}</Text>
          </View>
        </View>
        <View style={{ marginLeft: 16 }}><Text>{'Products'}</Text></View>
        { this.renderProductList() }
      </View>
    )
  }

  renderProductList = () => {
    if (this.state.isFetchingProducts) {
      return <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}><ActivityIndicator size={1} style={{ color: '#000' }} /></View>
    }
    const { products } = this.props
    return (
      <FlatList
        style={{ flex: 1 }}
        data={products}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString(10)}
        ItemSeparatorComponent={() => <Separator style={{ marginLeft: 116 }} />}
      />
    )
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
          style={{
            marginRight: 16,
            height: 24,
            width: 24,
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'green'
          }}>
          <BaseIcon name={'ios-add'} size={24} color={'#fff'} />
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  store: state.store.store,
  storeLoading: state.store.loading,
  products: state.product.products,
  productsLoading: state.product.loading
})

const mapDispatchToProps = dispatch => ({
  getStoreDetail: (storeId) => dispatch(getStoreDetailRequest(storeId)),
  getProducts: (storeId) => dispatch(getProductsRequest(storeId))
})

export default connect(mapStateToProps, mapDispatchToProps)(StoreDetailScreen)
