import React from 'react'

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import ChatlistScreen from './src/screens/ChatlistScreen'
import ChatScreen from './src/screens/ChatScreen'
import ContactScreen from './src/screens/ContactScreen'


const switchNavigatior = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen
  }),
  mainFlow: createBottomTabNavigator({
    Chatlist: ChatlistScreen,
    Chat: ChatScreen,
    Contact: ContactScreen
  })
})

const App = createAppContainer(switchNavigatior)

export default () => {
  return(
    <App ref={(navigator) => { setNavigator(navigator) }} />
  )
}
