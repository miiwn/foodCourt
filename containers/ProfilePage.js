import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { db, auth } from '../providers/FirebaseProvider';
import { Button, Text, Col, Row } from 'native-base';
import HeaderComponent from '../components/HeaderComponent';
import ProfileDetail from '../components/ProfileDetail';
import Loading from './Loading';
import ProfileEdit from '../components/ProfileEdit';

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        firstname: '',
        lastname: '',
        email: '',
        phoneNumber: '',
      },
      newPhone: '',
      loading: false,
      editable: false
    };
  }
  componentWillMount = () => {
    this.focusListener = this.props.navigation.addListener("didFocus", () => {
      this._load();
    })
    this._load()
  }

  _load = () => {
    this.setState({ loading: true })
    try {
      const ref = db.ref(`/users/${auth.currentUser.uid}/profile`)
      ref.once("value")
        .then((snapshot) => {
          snapshot.forEach((childSnapshot) => {
            this.setState({
              profile: childSnapshot.val(),
              loading: false
            })
          }
          )
        })
    } catch (error) {
      console.log(error.message)
    }
  }
  changePhoneText = (text) => {
    this.setState({ newPhone: text })
  }
  editProfile = () => {
    this.setState({ editable: true })
  }
  confirmChangeProfile = () => {
    const { newPhone } = this.state
      try {
      const ref = db.ref(`/users/${auth.currentUser.uid}/profile`)
      ref.once("value")
        .then((snapshot) =>
          snapshot.forEach((childSnapshot) => {
            db.ref(`/users/${auth.currentUser.uid}/profile/${childSnapshot.key}`).update({
              phoneNumber: newPhone
            });
            this._load()

          }
          ))
    } catch (error) {
      console.log(error.message)
    }

    this.setState({ editable: false })
  }

  logOut=()=>{
   auth.signOut().then(()=> this.props.navigation.navigate('Login')
    , ()=> {
      console.error('Sign Out Error', error);
    });
  }
  render() {
    const { profile, loading, editable } = this.state
    if (loading) {
      return <View style={styles.container}>
        <HeaderComponent title='Profile' />
        <Loading />
      </View>
    }
    if (editable) {
      return (
        <View style={styles.container}>
          <HeaderComponent title='Profile' />
          <View style={{ flex: 0.12 }} />
          <Image source={require("../images/user.png")} style={styles.img} />
          <View style={styles.profile}>
            <ProfileEdit profile={profile} changePhone={this.changePhoneText} />
          </View>
          <Button
            onPress={this.confirmChangeProfile}
            style={styles.editButton}>
            <Text style={styles.editText}>Confirm</Text>
          </Button>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <HeaderComponent title='Profile' />
        <View style={{ flex: 0.12 }} />
        <Image source={require("../images/user.png")} style={styles.img} />
        <View style={styles.profile}>
          <ProfileDetail profile={profile} />
        </View>
      <Row>
        <Col style={styles.buttonContainer}>
        <Button
          onPress={this.editProfile}
          style={styles.editButton}>
          <Text style={styles.editText}>Edit profile</Text>
        </Button>
        </Col>
        <Col style={styles.buttonContainer}>
        <Button
          onPress={this.logOut}
          style={styles.logoutButton}>
          <Text style={styles.editText}>Logout</Text>
        </Button>
        </Col>
      </Row>
        
        
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
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  editButton: {
    backgroundColor: '#EF9F88',
    alignSelf: 'center',
    marginTop: 20
  },
  logoutButton: {
    backgroundColor: '#D9C3B5',
    alignSelf: 'center',
    marginTop: 20
  },
  editText: {
    color: '#FFF',
  },
});


