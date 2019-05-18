import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Row, Col, Icon, List, ListItem, Right, Left, Button, Form, Item, Label, Input, Fab } from 'native-base';
import Dialog, { DialogContent, DialogButton, DialogFooter } from 'react-native-popup-dialog';
import Title from './Title';
import { TextInput } from 'react-native-gesture-handler';
import { db } from '../providers/FirebaseProvider';
import ConfirmOrderModal from './ConfirmOrderModal';

let addItem = (menu, amount) => {
  db.ref('/users/miiwn/order').push({
    name: menu.name,
    price: menu.price,
    amount: amount
  });
};

export default class MenuList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      selected: {},
      value: '1',
      basket: [],
    };
  }

  _renderDialog = (menu) => {
    this.setState({ selected: menu })
    this.setState({ visible: true })
  }

  _renderItem = ({ item }) => {
    const {value} =this.state
    return (
      <View style={styles.list}>
        <ListItem itemDivider>
          <Row>
            <Text>{item.category}</Text>
          </Row>
        </ListItem>
        {item.list.map((menu, index) =>
          <ListItem
            key={index}
            onPress={() =>
              this.props.showDialog(true,menu,value)
            }>
            <Left style={styles.nameContainer}>
              <Text>{menu.name}</Text>
            </Left>
            <Right style={styles.priceContainer}>
              <Text style={styles.price}>{menu.price}</Text>
            </Right>
          </ListItem>)}
      </View>)
  }

  render() {
    const { menu } = this.props
    return (
      <View style={styles.menuList}>
        <List>
          <FlatList
            data={menu}
            renderItem={this._renderItem}
            keyExtractor={(item) => item.category}
          />

        </List>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  menuList: {
    flex: 1,
  },
  menulistitem: {
    alignItems: 'stretch',
  },
  nameContainer: {
    margin: 10,
  },
  priceContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  modal: {
    padding: 20,
    height: 140,
    width: 300,
  },
  addTab: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    marginLeft: 30,
    marginRight: 30,
  },
  list: {
    elevation: 1
  },

})
