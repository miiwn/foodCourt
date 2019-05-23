import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { db, auth } from '../providers/FirebaseProvider';
import Loading from './Loading';
import HistoryList from '../components/HistoryList';

class HistoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      loading: false,
    };
  }
  static navigationOptions = {
    title: 'History',
    headerStyle: {
      backgroundColor: '#EF9F88',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  componentWillMount = () => {
    this.focusListener = this.props.navigation.addListener("didFocus", () => {
      this._load();
    })
    this._load()
  }

  _load = () => {
    this.setState({ loading: true })
    let allOrders = []
    try {
      const ref = db.ref(`/users/${auth.currentUser.uid}/orders`)
      ref.once("value")
        .then((snapshot) => {
          snapshot.forEach((childSnapshot) => {
            allOrders.push(childSnapshot.val())
            allOrders.reverse()

            this.setState({ orders: allOrders })
          }
          )
        })
      this.setState({ loading: false })
    } catch (error) {
      console.log(error.message)
    }
  }

  _renderItem = ({ item }) => {
    return <HistoryList order={item} orderDetail={this.seeDetail} />
  }
  seeDetail = (order) => {
    this.props.navigation.navigate('HistoryDetail', { order })
  }

  render() {
    const { orders, loading } = this.state
    if (loading) {
      return (
        <Loading />
      )
    }
    return (
      <View style={styles.container}>
        {orders.length !== 0 ?
          <FlatList
            data={orders}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index}
          /> : <View style={styles.noOrderContainer}>
            <Text style={styles.noOrder}>No history data</Text>
          </View>}
      </View>
    );
  }
}

export default HistoryPage;
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  noOrderContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noOrder: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
