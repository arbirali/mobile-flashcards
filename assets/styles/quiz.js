import { StyleSheet } from 'react-native'

import { colors } from '../../helpers/constants'

export const QuizStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  resultContainer: {
    flex: 1,
    padding: 10,
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
  title: {
    fontSize: 23,
    color: colors.primary,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  questionWrapper: {

  },
  question: {
    fontSize: 23,
    color: colors.primary,
    marginBottom: 10
  },
  answer: {
    marginBottom: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  success: {
    fontSize: 70,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 10
  },
  fails: {
    fontSize: 70,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 10
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    padding: 20
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
