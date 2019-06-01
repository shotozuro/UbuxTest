import React from 'react'
import {
  View,
  FlatList,
  Text,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { getAllStoresRequest } from '../actions/StoreActions'
import styles from './styles/HomeScreenStyle'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Stores'
  };

  state = {
    stores: [
      { storeId: 1, status: 'pending', tradingName: 'Vine 21' },
      { storeId: 2, status: 'pending', tradingName: 'Vine 11233' },
      { storeId: 3, status: 'pending' },
      { storeId: 4, status: 'verified', tradingName: 'Vine 993' },
      { storeId: 5, status: 'verified' },
      { storeId: 6, status: 'pending', tradingName: 'Vine' }
    ],
    isFetching: true
  }

  static getDerivedStateFromProps (props, state) {
    const { loading, stores } = props
    const { isFetching } = state
    if (loading !== isFetching) {
      console.log(stores)
      return { stores }
    }
    return null
  }

  componentDidMount () {
    this.props.getStores()
  }

  render () {
    const { stores } = this.state
    return (
      <View style={styles.container}>
        <FlatList
          data={stores}
          renderItem={this.renderItem}
          keyExtractor={(item) => `store_${item.storeId}`}
        />
      </View>
    )
  }

  renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity onPress={() => this.navigateToStoreDetail(item)}>
          <Text>{item.tradingName || 'no name'}</Text>
        </TouchableOpacity>

      </View>
    )
  }

  navigateToStoreDetail = (item) => {
    // navigation function
  }
}
const mapStateToProps = state => ({
  stores: state.store.stores,
  loading: state.store.loading
})

const mapDispatchToProps = dispatch => ({
  getStores: () => dispatch(getAllStoresRequest())
})
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
