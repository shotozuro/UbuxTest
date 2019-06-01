import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import Colors from '../constants/Colors'

export default class Separator extends React.Component {
  render () {
    return (<View style={{
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: this.props.height,
      height: this.props.height
    }} />)
  }
}

Separator.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
}

Separator.defaultProps = {
  height: 1,
  color: Colors.gray
}
