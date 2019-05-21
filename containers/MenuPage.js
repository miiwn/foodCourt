import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' ;
import { actionCreators } from '../redux/actions/actionCreators' ; 
import { View, Text, ScrollView, StyleSheet,TouchableOpacity, Button } from 'react-native';
import MenuList from '../components/MenuList';
import HeadStore from '../components/HeadStore';
import ConfirmOrderModal from '../components/ConfirmOrderModal';
import { Icon } from 'native-base';

const user ={
  username: 'Miiwn',
  nickname: 'Miiwn'
}

class MenuPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: this.props.menu,
      visible: false,
      selected: {},
      value: '1',
      basket: [],
    };
  }
  static navigationOptions = ({ navigation }) => {
    const { storeDetail } = navigation.state.params
    return {
    title: storeDetail? storeDetail.storeName :'Store Name',
    headerStyle: {
      backgroundColor: '#EF9F88',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: (
      <Icon
        onPress={() =>  navigation.navigate('Order')}
        name="list"
        color="#fff"
        style={styles.iconHeader}
      />
    ),
  }
  };
 addToBasket = (selected, amount) => {
    if (amount !== '0') {
      const  params = this.props.navigation.state.params
    const { storeName } = params.storeDetail
    this.props.addItem(storeName,selected,amount) 
      this.setState({
        basket: [...this.state.basket, {
          selected: selected,
          amount: amount
        }],
        visible: false,
      })
    } else {
      this.setState({
        visible: false,
        value: '1'
      })
    }
  }

  addValue = () => {
    let add = Number.parseInt(this.state.value, 10) + 1
    let addText = add.toString()
    this.setState({ value: addText })
  }

  minusValue = () => {
    if (this.state.value !== '0') {
      let minus = Number.parseInt(this.state.value, 10) - 1
      let minusText = minus.toString()
      this.setState({ value: minusText })

    }
  }
  showModal=(visible,selected,amount)=>{
    this.setState({visible,
      selected,
      value:amount})
  }

  closeModal =()=>{
    this.setState({visible: false})
  }
  render() {
    const  params = this.props.navigation.state.params
    const { storeDetail } = params
    const { menu } = params.storeDetail
    const {visible,selected,value} = this.state
    return (
      <ScrollView
      showsVerticalScrollIndicator={false}>
      <View style={{ flex:1 }}>
      <MenuList storeDetail={storeDetail} menu={menu} onOrder={this.addOrder} showDialog={this.showModal}/>
      <ConfirmOrderModal type='addToBasket' visible={visible} selected={selected} value={value}  onClose= {this.closeModal} onAdd={this.addToBasket} increase={this.addValue} decrease={this.minusValue}/>
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
  fixedView : {
    position: 'absolute',
    left: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: '#03A9F4',
    borderRadius: 30,
    elevation: 8
  },
  fabIcon: {
    fontSize: 40,
    color: 'white'
  }
});
const mapStateToProps = (state) => ({
  // items: state.items,
 }) 
 const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators,dispatch) ;
 } 

 export default connect(mapStateToProps,mapDispatchToProps)(MenuPage)

