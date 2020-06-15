import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SignupScreen = () => {
  return (
    <View>
      <AuthForm
        headerText='Sign Up for Tracker'
        submitButtonText='Sign Up'
      />
      <NavLink
          routeName='Signin'
          text='Already have an account Sign In instead'
        />
    </View>
  )
}

const styles = StyleSheet.create({})

export default SignupScreen;
