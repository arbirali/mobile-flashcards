import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Button } from 'react-native'
import { navigation } from 'react-navigation'

import { deckDetailsStyles } from '../assets/styles/deckDetails'
import { defaultStyles } from '../assets/styles/defaultStyles'
import { colors } from '../helpers/constants'

function DeckDetails (props) {
    const { deck, id, navigation } = props
    return (
        <View style={deckDetailsStyles.container}>

            <View style={deckDetailsStyles.item}>
                <View style={deckDetailsStyles.title}>
                    <Text style={deckDetailsStyles.titleText}>{ deck.title }</Text>
                </View>
                <View style={deckDetailsStyles.number}>
                  <Text style={deckDetailsStyles.count}>{ deck.questions.length }</Text>
                  <Text style={{ color: colors.primary }}>Cards</Text>
                </View>
            </View>

            <View style={deckDetailsStyles.contentWrapper}>
                <Button
                    title="Add Card"
                    color={ colors.primary }
                    onPress={()=> navigation.navigate('AddCard', { id }) }
                />
                {
                    (deck.questions.length !== 0)? (
                        <View style={{ marginTop: 20 }}><Button title="Start Quiz"
                        onPress={()=> navigation.navigate('Quiz', { id }) }
                        color={ colors.primary }
                    /></View>): null
                }
            </View>
        </View>
    )
}

function mapState({ decks }, {navigation, route}) {
    const { id } = route.params
    const deck = decks[id]
    return {
        navigation,
        deck,
        id
    }
}

export default connect(mapState)(DeckDetails)
