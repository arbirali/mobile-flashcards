import React from 'react'
import { View, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Decks from './decks'
import DeckList from './deckList'
import DeckDetails from './deckDetails'
import AddCard from './addCard'
import Quiz from './quiz'
import { colors } from '../helpers/constants'

const Stack = createStackNavigator()

function MainScreen() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={colors.primary}
      />

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="DeckList"
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.primary
            },
            headerTitleStyle: {
              color: colors.white
            }
          }}
        >
          <Stack.Screen name="Home" component={Decks} options={{headerShown:false}} />
          <Stack.Screen
            name="DeckDetails"
            component={DeckDetails}
            options={{
              title: 'Deck Details',
              headerTintColor: '#fff'
            }}
            />
          <Stack.Screen
            name="AddCard"
            component={AddCard}
            options={{
              title: 'Add Card',
              headerTintColor: '#fff'
            }}
          />
          <Stack.Screen
            name="Quiz"
            component={Quiz}
            options={{
              title: 'Quiz',
              headerTintColor: '#fff'
            }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default MainScreen
