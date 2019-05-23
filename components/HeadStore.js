import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, CardItem } from 'native-base'

class HeadStore extends Component {

  render() {
    const { storeName, description } = this.props
    return (
      <View style={styles.cardContainer}>
        <Card style={styles.card}>
          <CardItem cardBody style={styles.cardItem}>
            <Text style={styles.title}>
              {storeName}
            </Text>
          </CardItem>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  card: {
    // width: width+10,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: "#FA8072",
    paddingTop: 40,
  },
  cardItem: {
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  header: {
    backgroundColor: 'skyblue',
    padding: 15,
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
    padding: 20,
    flexDirection: 'row'

  },
})
export default HeadStore;
