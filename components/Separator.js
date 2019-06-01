import React from 'react'
import { View } from 'react-native'

export default class Separator extends React.Component {
  render () {
    return (<View style={{ height: 1, backgroundColor: '#f0f0f0', flex: 1, alignSelf: 'stretch' }} />)
  }
}
