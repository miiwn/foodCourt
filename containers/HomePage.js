import React, { Component } from 'react';
import { View, Text, ScrollView,StyleSheet } from 'react-native';
import RecommendList from '../components/RecommendList';
import HeadCard from '../components/HeadCard';
import Categories from '../components/Categories';
import CategoryData from '../mock-data/categories.json'
import { Button, Icon } from 'native-base';
import ListStore from '../components/ListStore';
import { auth, db } from '../providers/FirebaseProvider'

const user ={
  username: 'Miiwn',
  nickname: 'Miiwn'
}






export default class HomePage extends Component {
//   static navigationOptions = ({ navigation }) => {
//     return {
//     title: 'Home',
//     headerStyle: {
//       backgroundColor: '#EF9F88',
//     },
//     headerTintColor: '#fff',
//     headerTitleStyle: {
//       fontWeight: 'bold',
//     },
//     headerRight: (
//       <Icon
//         onPress={() =>  navigation.navigate('Order')}
//         name="list"
//         color="#fff"
//         style={styles.iconHeader}
//       />
//     ),
//   }
// }
static navigationOptions = {
  header: null
}
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  _renderMenu=(item)=>{
    this.props.navigation.navigate('Menu',{storeDetail: item})
  }
  render() {
    console.log('auth', this.props.navigation.state.params.user)
    
    return (
      <ScrollView
      showsVerticalScrollIndicator={false}>
      <View style={{ flex:1 }}>
      <HeadCard user={user} onProfile={this.seeProfile}/>
      <Categories data={CategoryData} />
      <RecommendList title='Recommended for you' description='You may like these'/>
      <ListStore title='All restaurants' renderMenuList={this._renderMenu}/>
      </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  iconHeader:{
    marginRight: 10,
    color: '#FFFFFF'
  },
});