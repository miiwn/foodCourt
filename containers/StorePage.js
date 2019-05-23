import React, { Component } from 'react';
import { View } from 'react-native';
import ListStore from '../components/ListStore';


export default class StorePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allStore: []
    };
  }
  static navigationOptions = ({ navigation }) => {
    const { store } = navigation.state.params
    return {
      title: store ? store.name : 'All Restaurants',
      headerStyle: {
        backgroundColor: '#EF9F88',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }

  _renderMenu = (item) => {
    this.props.navigation.navigate('Menu', { storeDetail: item })

  }

  render() {
    let title = 'All Restaurants'
    let store = null
    let allStore = null
    if (this.props.navigation.state.params) {
      const params = this.props.navigation.state.params
      if (params.store) {
        store = params.store
        title = store.name
      } else if (params.allStore) {
        allStore = params.allStore
      }

    }
    return (
      <View style={{ flex: 1 }}>
        <ListStore title={title} renderMenuList={this._renderMenu} food={store ? store.storelist : allStore} />

      </View>
    );
  }
}
