import React, { Component } from 'react';
import { View, Text, ScrollView,StyleSheet } from 'react-native';
import RecommendList from '../components/RecommendList';
import HeadCard from '../components/HeadCard';
import Categories from '../components/Categories';
import { Button, Icon } from 'native-base';
import ListStore from '../components/ListStore';
import { auth, db } from '../providers/FirebaseProvider'
import CategoryData from '../mock-data/categories.json'


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
      categoryData: [],
      allStore: [],
      profile: {},
    };
  }
  componentWillMount = async()=>{
     await this._load()
  }
  
  _load =async()=>{
    let data =[]
    let store =[]
    const ref = db.ref(`/stores/categories`)
    await ref.once("value")
        .then((snapshot) => {
          snapshot.forEach((childSnapshot) => {
            let childData = childSnapshot.val()
            data.push(childData)
            if(childData.storelist){
              // console.log(childData.storelist[0])
              store.push(childData.storelist[0])

            }
          }
          )
        })   
    const refProfile = db.ref(`/users/${auth.currentUser.uid}/profile`)
      await refProfile.once("value")
        .then((snapshot) => {
          snapshot.forEach((childSnapshot) => {
            this.setState({ profile: childSnapshot.val() })
          }
          )
        }) 
    this.setState({
      categoryData: data,
      allStore: store
    })
        
  }
  renderStoreList=(storeName)=>{
    console.log("store",storeName.storelist)
  }
  _renderMenu=(item)=>{
    this.props.navigation.navigate('Menu',{storeDetail: item})
  }
  render() {
    const { categoryData, allStore ,profile} =this.state
    console.log('testall',profile)
    return (
      <ScrollView
      showsVerticalScrollIndicator={false}>
      <View style={{ flex:1 }}>
      <HeadCard user={profile} onProfile={this.seeProfile}/>
      <Categories category={categoryData} storeList={this.renderStoreList}/>
      <RecommendList title='Recommended for you' description='You may like these' renderMenuList={this._renderMenu} food={allStore}/>
      <ListStore title='All restaurants' renderMenuList={this._renderMenu} food={allStore} />
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