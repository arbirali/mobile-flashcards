import React from 'react'
import { Button, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import CreateDeck from './createDeck'
import DeckList from './deckList'
import { colors } from '../helpers/constants'

const Tabs = createBottomTabNavigator()

function Decks() {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'green'
        }
      }}
      tabBarOptions={{
        activeTintColor: colors.white,
        inactiveTintColor: colors.primary,
        activeBackgroundColor: colors.primary,
        inactiveBackgroundColor: colors.white
      }}
    >
      <Tabs.Screen
        name="Home"
        component={DeckList}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          )
        }}
      />
      <Tabs.Screen
        name="CreateDeck"
        component={CreateDeck}
        options={{
          tabBarLabel: 'Create Deck',
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons name="add-task" color={color} size={size} />
          )
        }}
      />
    </Tabs.Navigator>
  );
}

export default Decks
