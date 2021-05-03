import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'

import { deckListStyles } from '../assets/styles/deckList'

function DeckList ({decks, navigation}) {

    const navogateToDtails = (id) => {
      navigation.navigate('DeckDetails', { id })
    }
    return (
        <View style={deckListStyles.container}>
            {decks && Object.keys(decks).map((deck)=>(
                <TouchableOpacity key={deck} onPress={()=>navogateToDtails(deck)} style={deckListStyles.link}>
                    <View style={deckListStyles.item}>
                        <View style={deckListStyles.title}>
                            <Text style={deckListStyles.titleText}>{decks[deck].title}</Text>
                        </View>
                        <View style={deckListStyles.number}>
                          <Text style={{fontWeight: 'bold'}}>{decks[deck].questions.length}</Text>
                          <Text>Cards</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    )
}

function mapState({ decks }) {
    return {
        decks
    }
}

export default connect(mapState)(DeckList)
