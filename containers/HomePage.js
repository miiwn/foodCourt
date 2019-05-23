import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import RecommendList from '../components/RecommendList';
import HeadCard from '../components/HeadCard';
import Categories from '../components/Categories';
import ListStore from '../components/ListStore';
import { auth, db } from '../providers/FirebaseProvider'
import Loading from './Loading';


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
      loading: true,
    };
  }
  componentWillMount = async () => {
    await this._load()
  }
  seeAll = () => {

    const { allStore } = this.state
    this.props.navigation.navigate('Store', { allStore })
  }

  _load = async () => {
    let data = []
    let store = []
    const ref = db.ref(`/stores/categories`)
    await ref.once("value")
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          let childData = childSnapshot.val()
          data.push(childData)
          if (childData.storelist) {
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
      allStore: store,
      loading: false
    })

  }
  renderStoreList = (store) => {
    this.props.navigation.navigate('Store', { store })
  }
  _renderMenu = (item) => {
    this.props.navigation.navigate('Menu', { storeDetail: item })
  }
  render() {
    const { categoryData, allStore, profile, loading } = this.state
    if (loading) {
      return <Loading />
    }
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1 }}>
          <HeadCard user={profile} onProfile={this.seeProfile} />
          <Categories category={categoryData} storeList={this.renderStoreList} />
          <RecommendList title='Recommended for you' description='You may like these' renderMenuList={this._renderMenu} food={allStore} />
          <ListStore title='All restaurants' renderMenuList={this._renderMenu} food={allStore} seeAll={this.seeAll} />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  iconHeader: {
    marginRight: 10,
    color: '#FFFFFF'
  },
});