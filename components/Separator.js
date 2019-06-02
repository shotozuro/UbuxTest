import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import Colors from '../constants/Colors'

export default class Separator extends React.Component {
  render () {
    return (<View style={[{
      flex: 1,
      backgroundColor: this.props.color,
      height: this.props.height
    }, this.props.style]} />)
  }
}

Separator.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string,
  style: PropTypes.object
}

Separator.defaultProps = {
  height: 1,
  color: Colors.gray
}
