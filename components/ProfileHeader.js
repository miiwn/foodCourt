import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ProfileHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const{ profile} =this.props
    return (
      <View style={styles.container}>
        <Text style={styles.profileText}> {profile.firstname} </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    profileText:{
        fontSize: 20,
        color: 'blue'
    }
});
