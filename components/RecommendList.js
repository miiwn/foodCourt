import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet,Image, TouchableOpacity} from 'react-native';
import Food from '../mock-data/food.json'
import { Card, CardItem, Body, Left, Thumbnail, List, ListItem } from 'native-base'
import Title from './Title.js';
class RecommendList extends Component {
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
      <Card style={styles.recommendContainer}>
      <CardItem  style={styles.card}onPress={()=>this.renderMenu(item)}>
          <Left>
            <Thumbnail source={{ uri : item.uri}} />
            </Left>
            <Body style={styles.bodyText}>
              <Text style={styles.title}>
                {item.storeName}
              </Text>
            </Body>
      </CardItem>
      </Card>
     )
  }
  render() {
    const { title, description,food } =this.props
    return (
      <View style={styles.listContainer}>
      <Title title={title} description={description} />
      
        <FlatList
          data={food}
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
    width: 220,
    height: 80,
    // padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    width: 200,
    height: 70,
    flexDirection: 'row',
    marginRight: 5,
    padding: 0,
  },
  cardItem:{
    borderRadius: 10,
  },
  imageBg:{
    width: 80,
    height:80
  },
  title: {
    fontSize: 16,
    alignSelf: 'flex-start',
    textAlign: 'left',
    color: '#484848',
    fontWeight: '700',
  },
  
})
export default RecommendList;
