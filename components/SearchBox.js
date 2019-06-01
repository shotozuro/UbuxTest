import React from 'react'
import { Platform, View, TextInput } from 'react-native'
import BaseIcon from './BaseIcon'
import PropTypes from 'prop-types'
import styles from './styles/SearchBoxStyle'

export default class SearchBox extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.searchIcon}>
          <BaseIcon name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} />
        </View>
        <TextInput style={styles.inputText}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onSubmitEditing={() => this.props.onSearch(this.props.value)}
          onChangeText={text => this.props.onChange(text)} />
      </View>
    )
  }
}

SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string
}

SearchBox.defaultProps = {
  value: '',
  placeholder: 'Search'
}
