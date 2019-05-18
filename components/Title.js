import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Description from './Description';


export default class Title extends Component {
    
    render() {
        const {title, description} = this.props
        return (
        <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        {description?<Description description={description}/>:null}
      </View>
    )
}
}

const styles = StyleSheet.create({
  titleContainer: {
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    textAlign: 'left',
    color: 'black',
    fontWeight: 'bold',
  },
})