import React from 'react'
import Constants from 'expo-constants'
import { Provider } from 'react-redux'
import { Text } from 'react-native'

import AnimatedAppLoader from './components/animatedSplashScreen'
import MainScreen from './components/mainScreen'
import store from './helpers/store'

// Instruct SplashScreen not to hide yet, we want to do this manually
// SplashScreen.preventAutoHideAsync()
// .catch(() => { /* reloading the app might trigger some race conditions, ignore them */ })

export default function App() {
  return (
    <Provider store={store}>
      <AnimatedAppLoader image={{ uri: Constants.manifest.splash.image }}>
        <MainScreen />
      </AnimatedAppLoader>
    </Provider>
  )
}
