import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SigninScreen = ({ navigation }) => {
  return (
    <View>
      <AuthForm
        headerText="Sign In to your account"
        submitButtonText='Sign In'
        navigation={navigation}
      />
      <NavLink
          text='Dont have an account Sign Up instead'
          routeName='Signup'
        />
    </View>
  )
}

const styles = StyleSheet.create({})

export default SigninScreen;
