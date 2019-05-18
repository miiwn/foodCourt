import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default class Description extends Component {
    
    render() {
        const {description} = this.props
        
        return (
            <View>
        <Text style={styles.description}>{description}</Text>
      </View>
    )
}
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'skyblue',
    padding: 15,
  },
  title: {
    fontSize: 14,
    textAlign: 'left',
    color: 'white',
    fontWeight: '300',
  },
  description:{
    fontSize: 12,
    textAlign: 'left',
    fontWeight: '300',
    color: '#484848',
  }
})