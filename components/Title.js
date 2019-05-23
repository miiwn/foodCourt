import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Description from './Description';
import { Left, Row, Right } from 'native-base';


export default class Title extends Component {

  render() {
    const { title, description, buttonRight } = this.props
    return (
      <View style={styles.titleContainer}>
        {buttonRight ?
          <Row>
            <Left>
              <Text style={styles.title}>{title}</Text>
            </Left>
            <Right>
              <TouchableOpacity onPress={this.props.onMore}>
                <Text >{buttonRight}</Text>
              </TouchableOpacity>
            </Right>
          </Row> :
          <Text style={styles.title}>{title}</Text>
        }
        {description ? <Description description={description} /> : null}

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