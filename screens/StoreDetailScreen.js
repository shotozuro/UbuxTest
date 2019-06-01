import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class StoreDetailScreen extends React.Component {
  render () {
    console.log(this.props.navigation)
    return (
      <View>
        <Text>{'Store detail'}</Text>
      </View>
    )
  }
}

export default connect()(StoreDetailScreen)
