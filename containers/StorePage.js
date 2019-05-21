import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ListStore from '../components/ListStore';
import HeaderComponent from '../components/Header';
import { db } from '../providers/FirebaseProvider';

export default class StorePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      allStore: []
    };
  }
  componentWillMount=()=>{
    this._load()
  }
  _load= async()=>{
    try {
      let store =[]
      const ref = db.ref(`/stores/categories`)
      await ref.once("value")
        .then((snapshot) => {
          snapshot.forEach((childSnapshot) => {
            let childData = childSnapshot.val()
            if(childData.storelist){
              store.push(childData.storelist[0])
            }
          }
          )
        })    
    this.setState({
      allStore: store
    })
    } catch (error) {
      console.log(error.message)
    }
  }
  render() {
    const { allStore } =this.state
        return (
      <View style={{flex:1}}>
      <HeaderComponent title='All Restaurants' />
      <ListStore title='All restaurants' renderMenuList={this._renderMenu} food={allStore} />
        
      </View>
    );
  }
}
