import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { db, auth } from '../providers/FirebaseProvider';
import FirebaseFunction from '../providers/FirebaseFunction';
import { Button, Text } from 'native-base';
import HeaderComponent from '../components/Header';
import ProfileDetail from '../components/ProfileDetail';

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        firstname: '',
        lastname: '',
        email: '',
        phoneNumber: '',
      }
    };
  }
  componentWillMount =  () => {
    this.focusListener = this.props.navigation.addListener("didFocus", () => {
      this._load();
    })
     this._load()
  }

  _load = () => {
    try {
      const ref = db.ref(`/users/${auth.currentUser.uid}/profile`)
      ref.once("value")
        .then((snapshot) => {
          snapshot.forEach((childSnapshot) => {
            this.setState({ profile: childSnapshot.val() })
          }
          )
        })
    } catch (error) {
      console.log(error.message)
    }
  }

  render() {
    const { profile } = this.state
    return (
      <View style={styles.container}>
        <HeaderComponent title='Profile' />
        <View style={{ flex: 0.12 }} />
        <Image source={require("../images/user.png")} style={styles.img} />
        <View style={styles.profile}>
        <ProfileDetail profile={profile} />
        </View>

          <Button
            onPress={this.handleLogin}
            style={styles.editButton}>
            <Text style={styles.editText}>Edit profile</Text>
          </Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  profileText: {
    marginTop: 50,
    alignSelf: 'center',
  },
  profile: {
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(252, 235, 217, 0.35)',
    margin: 16,
    borderRadius: 16,
  },
  img: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    margin: 24,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF",

  },
  editButton: {
    backgroundColor: '#EF9F88',
    alignSelf: 'center',
    marginTop: 20
  },
  editText: {
    color: '#FFF',
  },
});


