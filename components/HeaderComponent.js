
import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Header } from 'native-base';


export default class HeaderComponent extends Component {

  render() {
    const { title } = this.props
    return (
      <Header span style={styles.header}>
        <Text style={styles.title}> {title}</Text>
      </Header>

    )
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 16,
    backgroundColor: '#EF9F88',
    height: 64
  },
  titleContainer: {
    marginLeft: 10,
    marginTop: 35,
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
})