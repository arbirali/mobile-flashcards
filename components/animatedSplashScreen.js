import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Asset } from 'expo-asset'
import Constants from 'expo-constants'
import AppLoading from 'expo-app-loading'
import * as SplashScreen from 'expo-splash-screen'
import { Animated, Button, StyleSheet, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { SYNC_STORAGE_KEY, SAMPLE_DECKS } from '../helpers/constants'
import { handleAllDecks } from '../actions'

class AnimatedAppLoader extends Component {

  state = {
    isSplashReady: false
  }

  startAsync = () => {
    const { image, dispatch } = this.props
    dispatch(handleAllDecks())

    return (
      // If you use a local image with require(...), use `Asset.fromModule`
      () => () => Asset.fromURI(image).downloadAsync(),
      [image]
    )
  }

  onFinish = () => {
    this.setState({isSplashReady: true})
  }

  render () {
    const { children, image } = this.props
    const { isSplashReady } = this.state

    if (!isSplashReady) {
      return (
        <AppLoading
          // Instruct SplashScreen not to hide yet, we want to do this manually
          startAsync={this.startAsync}
          onError={console.error}
          onFinish={this.onFinish}
        />
      )
    }
  return <AnimatedSplashScreen image={image}>{children}</AnimatedSplashScreen>
  }
}

function AnimatedSplashScreen({ children, image }) {
  const animation = React.useMemo(() => new Animated.Value(1), [])
  const [isAppReady, setAppReady] = React.useState(false)
  const [isSplashAnimationComplete, setAnimationComplete] = React.useState(
    false
  )

  React.useEffect(() => {
    if (isAppReady) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => setAnimationComplete(true))
    }
  }, [isAppReady])

  const onImageLoaded = React.useMemo(() => async () => {
    try {
      await SplashScreen.hideAsync()
      // Load stuff
      await Promise.all([])
    } catch (e) {
      // handle errors
    } finally {
      setAppReady(true)
    }
  })

  return (
    <View style={{ flex: 1 }}>
      {isAppReady && children}
      {!isSplashAnimationComplete && (
        <Animated.View
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFill,
            {
              flex: 1
            },
            {
              backgroundColor: Constants.manifest.splash.backgroundColor,
              opacity: animation,
            },
          ]}
        >
          <Animated.Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: Constants.manifest.splash.resizeMode || "contain",
              transform: [
                {
                  scale: animation,
                },
              ],
            }}
            source={image}
            onLoadEnd={onImageLoaded}
            fadeDuration={0}
          />
        </Animated.View>
      )}
    </View>
  )
}

export default connect()(AnimatedAppLoader)
