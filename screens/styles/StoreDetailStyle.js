import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray
  },
  storeDetail: {
    marginBottom: 16,
    paddingHorizontal: 20,
    alignSelf: 'stretch',
    flexDirection: 'row',
    height: 120,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff'
  },
  productItemContainer: {
    height: 72,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#fff'
  }
})
