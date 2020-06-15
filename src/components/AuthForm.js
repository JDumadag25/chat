import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'

const AuthForm = ({ headerText, submitButtonText }) => {
  return (
    <View>
      <Text h3>{headerText}</Text>
      <Input label='Email' autoCapitalize='none' autoCorrect={false}  />
      <Input label='Password' autoCapitalize='none' autoCorrect={false} secureTextEntry />
      <Button title={submitButtonText} />
    </View>
  )
}

const styles = StyleSheet.create({})

export default AuthForm
