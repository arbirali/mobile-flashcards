import { StyleSheet } from 'react-native'

import { colors } from '../../helpers/constants'

export const deckDetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  link: {
    width: '100%',
  },
  titleWrapper: {
    width: '100%',
    marginBottom: 15,
    paddingVertical: 8,
    paddingHorizontal: 10,
    color: colors.primary,
    flexDirection: 'row',
    borderRadius: 6,
    justifyContent: "center",
  },
  item: {
    width: '100%',
    marginBottom: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    flexDirection: 'row',
    color: "#000",
    textAlign: "center"
  },
  title: {
    flex: 1,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: 'left',
    color: colors.primary,
  },
  number: {
    width: 50,
    paddingLeft: 10,
    borderLeftWidth: 1,
    borderLeftColor: '#cccccc',
    alignItems: 'center',
    color: colors.primary
  },
  contentWrapper: {
    borderRadius: 3,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    width: '100%',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  count: {
    fontWeight: 'bold',
    color: colors.primary
  }
})
