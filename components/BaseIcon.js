import React from 'react'
import { Icon } from 'expo'

import Colors from '../constants/Colors'

export default class BaseIcon extends React.Component {
  render () {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={24}
        style={this.props.style}
        color={this.props.color || Colors.primaryColor}
      />
    )
  }
}
