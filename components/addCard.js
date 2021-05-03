import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput, Button } from 'react-native'

import { handleAddCard } from '../actions'
import { CreateQuestionStyles } from '../assets/styles/createQuestion'
import { defaultStyles } from '../assets/styles/defaultStyles'
import { colors } from '../helpers/constants'

function AddCard(props) {
  const [question, onChangeQuestion] = React.useState('')
  const [answer, onChangeAnswer] = React.useState('')

  const { navigation, deck, id, dispatch } = props

  const isDisabled = () => {
    return (question === '' || answer === '')
  }

  const handleSubmit = () => {

    new Promise((res, rej)=> {
      dispatch(handleAddCard({id, question, answer}))
      setTimeout(() => res('success'), 1000);
    }).then(()=> {
      onChangeQuestion('')
      onChangeAnswer('')
      navigation.navigate('Home')
    })
  }

    return (
        <View style={CreateQuestionStyles.container}>
          <Text style={CreateQuestionStyles.deckTitle}>Add Question for '{ deck.title }'</Text>
          <View style={CreateQuestionStyles.formWrapper}>
            <TextInput
              style={defaultStyles.textInput}
              onChangeText={onChangeQuestion}
              value={question}
              placeholder="Question"
            />
            <TextInput
              style={defaultStyles.textInput}
              onChangeText={onChangeAnswer}
              value={answer}
              placeholder="Answer"
            />
            <Button
              onPress={handleSubmit}
              disabled={isDisabled()}
              color={ colors.primary }
              title="Submit"
            />
         </View>
       </View>
    )
}

function mapState({ decks }, {navigation, route, dispatch}) {
    const { id } = route.params
    const deck = decks[id]
    return {
        navigation,
        dispatch,
        deck,
        id
    }
}

export default connect(mapState)(AddCard)
