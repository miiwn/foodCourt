import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { db, auth } from '../providers/FirebaseProvider';
import FirebaseFunction from '../providers/FirebaseFunction';
import ProfileHeader from '../components/ProfileHeader';


export default class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile:{
        firstname: '',
        lastname: '',
        email: '',
        phoneNumber: '',
      }
    };
  } 
  componentWillMount = async () => {
    this.focusListener = this.props.navigation.addListener("didFocus",()=>{
     this._load() ;
      }) 
      await this._load()
  }
  _load =()=> {
    if(auth.currentUser){
      const ref= db.ref(`/users/${auth.currentUser.uid}/profile`)
       ref.once("value")
      .then((snapshot) =>{
        snapshot.forEach((childSnapshot) =>{
          this.setState({profile: childSnapshot})
        }
        )
      })
    }else{
      console.log("auth",auth)
    }
  }
  
  render() {
    const {profile} =this.state
    console.log("first",this.state.profile)
    return (
      <View style={styles.container}>
        <Text style={styles.profileText} >{profile.email}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  profileText:{
    marginTop: 50,
    alignSelf: 'center',
  }
});