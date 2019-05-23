import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet,TouchableOpacity} from 'react-native';

import { Card, CardItem, Body, Left, Thumbnail } from 'native-base'
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
      <TouchableOpacity onPress={()=>this.renderMenu(item)}>
      <CardItem  style={styles.card} >
          <Left>
            <Thumbnail source={{ uri : item.uri}} />
            </Left>
            <Body style={styles.bodyText}>
              <Text style={styles.title}>
                {item.storeName}
              </Text>
              <Text style={styles.category}>
                {item.category}
              </Text>
            </Body>
      </CardItem>
      </TouchableOpacity>
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
    width: 260,
    height: 80,
    // padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    width: 240,
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
  category:{
    fontSize: 12,
  }
})
export default RecommendList;
