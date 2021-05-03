import { StyleSheet } from 'react-native'

import { colors } from '../../helpers/constants'

export const deckListStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  link: {
    width: '100%',
  },
  item: {
    width: '100%',
    marginBottom: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
    flexDirection: 'row',
    borderRadius: 6,
    backgroundColor: "#ffffff",
    color: "#000",
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  title: {
    flex: 1,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: 'left'
  },
  number: {
    width: 50,
    paddingLeft: 10,
    borderLeftWidth: 1,
    borderLeftColor: '#cccccc',
    alignItems: 'center',
  }
})
