import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Button, View, TextInput, Text } from 'react-native'

import { handleAddDeck } from '../actions'

import { CreateDeckStyles } from '../assets/styles/createDeck'
import { defaultStyles } from '../assets/styles/defaultStyles'
import { colors } from '../helpers/constants'

function CreateDeck({dispatch, navigation}) {
  const [text, onChangeText] = React.useState('')

  const isDisabled = () => {
    return text === ''
  }

  const handleSubmit = () => {

    new Promise((res, rej)=> {
      dispatch(handleAddDeck(text))
      setTimeout(() => res('success'), 1000);
    }).then(()=> {
      onChangeText('')
      navigation.navigate('Home')
    })
  }

  return (
    <View style={CreateDeckStyles.container}>
      <Text
        style={CreateDeckStyles.deckTitle}
      >Create a Deck</Text>
      <View style={CreateDeckStyles.formWrapper}>
        <TextInput
          style={ defaultStyles.textInput }
          onChangeText={onChangeText}
          value={text}
          placeholder="Deck Title"
        />
        <Button
          onPress={handleSubmit}
          disabled={isDisabled()}
          color={ colors.primary }
          title="Submit"
        />
      </View>
   </View>
  );
}

export default connect()(CreateDeck)
