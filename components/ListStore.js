import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Food from '../mock-data/food.json'
import { Card, CardItem, Body, ListItem,List } from 'native-base'
import Title from './Title.js';
import Description from './Description.js';
class ListStore extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  renderMenu = (item)=>{
    this.props.renderMenuList(item)
  }
  _renderItem = ({ item }) => {
    return (
      <ListItem onPress={()=>this.renderMenu(item)}>
      <View style={styles.listContainer}>
          <Text style={styles.title}>
            {item.storeName}
          </Text>
          <Description description={item.description} />

      </View>
      </ListItem>
        )
  }
  render() {
    const { title, description } =this.props
    return (
      <View style={styles.listContainer}>
        <Title title={title} description={description} />
        <List>
          <FlatList
            data={Food}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => item + index}
            showsVerticalScrollIndicator={false}
          />
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer:{
    marginLeft:15,
    margin: 10
  },
  recommendContainer:{
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
export default ListStore;
