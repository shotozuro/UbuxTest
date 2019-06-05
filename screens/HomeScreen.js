import React from 'react'
import {
  View,
  FlatList,
  Text,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { getAllStoresRequest, searchStoreRequest } from '../actions/StoreActions'

import styles from './styles/HomeScreenStyle'
import { Platform } from 'expo-core'
import SearchBox from '../components/SearchBox'
import Separator from '../components/Separator'
import BaseIcon from '../components/BaseIcon'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Stores'
  };

  state = {
    isFetching: false
  }

  static getDerivedStateFromProps (props, state) {
    const { loading, stores } = props
    const { isFetching } = state
    if (loading !== isFetching) {
      return { stores, isFetching: false }
    }
    return null
  }

  componentDidMount () {
    this.props.getStores()
    this.setState({ isFetching: true })
  }

  onSearch = (keyword) => {
    this.props.searchStore(keyword)
    this.setState({ isFetching: true })
  }

  render () {
    const { stores } = this.props
    return (
      <View style={styles.container}>
        <SearchBox
          value={this.state.keyword}
          onChange={text => this.setState({ keyword: text })}
          onSearch={this.onSearch} />
        <FlatList
          refreshing={this.state.isFetching}
          data={stores}
          renderItem={this.renderItem}
          ItemSeparatorComponent={() => (<Separator />)}
          ListEmptyComponent={() => <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 20 }}><Text>{`No store available.`}</Text></View>}
          keyExtractor={(item) => `store_${item.storeId || item._id}`}
        />
      </View>
    )
  }

  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => this.navigateToStoreDetail(item)}>
        <View style={styles.storeItem}>
          <Text>{item.tradingName || ''}</Text>
          {
            item.status === 'verified' &&
            <BaseIcon
              name={Platform.OS === 'ios' ? 'ios-ribbon' : 'md-ribbon'}
              size={24}
              style={{ marginBottom: 0 }}
              color={'#d35400'}
            />
          }

        </View>
      </TouchableOpacity>
    )
  }

  navigateToStoreDetail = (item) => {
    this.props.navigation.navigate('StoreDetail', { storeId: item.storeId || item._id })
  }
}
const mapStateToProps = state => ({
  stores: state.store.stores,
  loading: state.store.loading
})

const mapDispatchToProps = dispatch => ({
  getStores: () => dispatch(getAllStoresRequest()),
  searchStore: (keyword) => dispatch(searchStoreRequest(keyword))
})
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
