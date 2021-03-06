import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { List, ListItem, Left, Body, Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'


export default class ProfileDetail extends Component {

  render() {
    const { profile } = this.props
    return (
      <List>
        <ListItem icon>
          <Left>
            <Icon name='user-o' size={25} />
          </Left>
          <Body>
            <Text style={styles.name}>
              {profile.firstname} {profile.lastname}
            </Text>
          </Body>
        </ListItem>
        <ListItem icon >
          <Left>
            <Icon name='envelope-o' size={25} />
          </Left>
          <Body>
            <Text style={styles.email}>
              {profile.email}
            </Text>
          </Body>
        </ListItem>
        <ListItem icon >
          <Left>
            <Icon name='phone' size={25} />
          </Left>
          <Body>
            <Text style={styles.call}>
              {profile.phoneNumber}
            </Text>
          </Body>
        </ListItem>
      </List>
    );
  }
}
const styles = StyleSheet.create({
  name: {
    color: "#7D6E6A",
    fontSize: 16,
    fontWeight: "bold",
  },
  email: {
    color: "#EF9F88",
    fontSize: 16,
  },
  call: {
    color: "#BA9F8C",
    fontSize: 16,

  },
});
