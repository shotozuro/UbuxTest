import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

export default StyleSheet.create({
  container: {
    height: 48,
    backgroundColor: Colors.gray,
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  searchIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40
  },
  inputText: {
    flex: 1,
    alignSelf: 'stretch',
    marginLeft: 5
  }
})
