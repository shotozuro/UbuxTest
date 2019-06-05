import React from 'react'
import { View, Text, Image } from 'react-native'
import PropTypes from 'prop-types'
import Colors from '../constants/Colors'

const Icons = {
  add: require('../assets/icons/plus.png'),
  remove: require('../assets/icons/minus.png'),
  search: require('../assets/icons/search.png'),
  close: require('../assets/icons/close.png'),
  ribbon: require('../assets/icons/ribbon.png'),
  cart: require('../assets/icons/shopping_cart.png')

}
export default class BaseIcon extends React.Component {
  render () {
    return (
      <View
        style={{
          height: this.props.size,
          width: this.props.size,
          ...this.props.style
        }}>
        <Image
          style={{
            width: this.props.size,
            height: this.props.size
          }}
          source={this.iconType(this.props.name)}
        />
      </View>
    )
  }

  iconType = (iconName) => {
    const index = iconName.indexOf('-')
    const name = iconName.slice(index + 1)

    switch (name) {
      case 'add': return Icons.add
      case 'remove': return Icons.remove
      case 'close': return Icons.close
      case 'search': return Icons.search
      case 'cart': return Icons.cart
      case 'ribbon': return Icons.ribbon

      default: return ''
    }
  }
}

BaseIcon.propTypes = {
  name: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.string,
  size: PropTypes.number
}

BaseIcon.defaultProps = {
  size: 24,
  color: Colors.primaryColor
}
