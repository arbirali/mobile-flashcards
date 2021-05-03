import { StyleSheet } from 'react-native'

import { colors } from '../../helpers/constants'

export const CreateDeckStyles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formWrapper: {
    borderRadius: 3,
    paddingVertical: 30,
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
  deckTitle: {
    fontSize: 23,
    color: colors.primary,
    marginBottom: 10,
    fontWeight: 'bold'
  }
});
