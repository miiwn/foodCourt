import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { ListItem, List, Row, Col } from 'native-base'
import Title from './Title.js';
import Description from './Description.js';
class ListStore extends Component {

  renderMenu = (item) => {
    this.props.renderMenuList(item)
  }
  renderStore = () => {
    this.props.seeAll()
  }
  _renderItem = ({ item }) => {
    return (
      <ListItem onPress={() => this.renderMenu(item)}>
        <Row>
          <Col size={1}>
            <Image source={{ uri: item.uri }} style={styles.image} />
          </Col>
          <Col size={2}>
            <Text style={styles.title}>
              {item.storeName}
            </Text>
            <Description description={item.description} />
          </Col>

        </Row>

      </ListItem>
    )
  }
  render() {
    const { title, description, food } = this.props
    return (
      <View style={styles.listContainer}>
        <Title title={title} description={description} buttonRight='more' onMore={this.renderStore} />
        <List>
          <FlatList
            data={food}
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
  listContainer: {
    marginLeft: 15,
    margin: 10
  },
  recommendContainer: {
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
  cardItem: {
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    textAlign: 'left',
    color: '#484848',
    fontWeight: '700',
  },
  image: {
    height: 90,
    width: 100,
    borderRadius: 16,
    marginRight: 10
  }

})
export default ListStore;
