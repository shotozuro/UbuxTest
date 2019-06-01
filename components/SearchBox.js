import React from 'react'
import { View, TextInput } from 'react-native'
import BaseIcon from './BaseIcon'

export default class Separator extends React.Component {
  render () {
    return (
      <View style={{ height: 48, backgroundColor: '#f0f0f0', alignSelf: 'stretch', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 10 }}>
        <View style={{ alignItems: 'center', justifyContent: 'center', height: 40, width: 40 }}>
          <BaseIcon name={'ios-search'} />
        </View>
        <TextInput style={{ alignSelf: 'stretch', marginLeft: 5, flex: 1 }}
          placeholder={'Search'}
          value={this.props.value}
          onSubmitEditing={() => this.props.onSearch(this.props.value)}
          onChangeText={text => this.props.onChange(text)} />
      </View>
    )
  }
}
