import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Food from '../mock-data/food.json'
import { Card, CardItem, Body } from 'native-base'
import Title from './Title.js';
class RecommendList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  _renderItem = ({ item }) => {
    return (
      <Card style={styles.recommendContainer}>
          <Text style={styles.title}>
            {item.storeName}
          </Text>
      </Card>
        )
  }
  render() {
    const { title, description } =this.props
    return (
      <View style={styles.listContainer}>
      <Title title={title} description={description} />
        <FlatList
          data={Food}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => item + index}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer:{
    marginLeft:15
  },
  recommendContainer:{
    margin: 10,
    width: 300,
    height: 80,
    padding: 10,
    borderRightWidth: 1,
    borderRightColor: '#808080',
  },
  card: {
    width: 200,
    height: 100,
    flexDirection: 'row',
    marginRight: 5,
    padding: 10,
  },
  cardItem:{
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    textAlign: 'left',
    color: '#484848',
    fontWeight: '700',
  },
  
})
export default RecommendList;
