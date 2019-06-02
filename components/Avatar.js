import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import Colors from '../constants/Colors'
import styles from './styles/AvatarStyle'

export default class Avatar extends React.Component {
  render () {
    return (
      <View style={[styles.container, {
        height: this.props.size,
        width: this.props.size,
        borderRadius: this.props.size / 2,
        backgroundColor: this.props.color
      }]}>
        <Text style={{
          fontSize: this.props.size / 2.5,
          color: this.props.titleColor
        }}>{this.props.title}</Text>
      </View>
    )
  }
}

Avatar.propTypes = {
  title: PropTypes.string,
  titleColor: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string
}

Avatar.defaultProps = {
  size: 60,
  color: Colors.gray
}
