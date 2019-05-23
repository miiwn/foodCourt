import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

export default class Loading extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})