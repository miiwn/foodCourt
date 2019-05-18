import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import {auth} from '../providers/FirebaseProvider'
export default class Loading extends React.Component {

  componentWillMount() {
      setTimeout(auth.onAuthStateChanged(user => {
          this.props.navigation.navigate(user ? 'Main' : 'SignUp')
        }), 100000);
        
      }
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
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