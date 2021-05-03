import { StyleSheet } from 'react-native'

import { colors } from '../../helpers/constants'

export const defaultStyles = StyleSheet.create({
  button: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: colors.primary,
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  textInput: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.primary,
    borderRadius: 3,
    height: 35,
    fontSize: 16,
    marginBottom: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '100%'
  }
});
