import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux/actions/actionCreators';
import { View, ScrollView, StyleSheet, Dimensions, Image } from 'react-native';
import MenuList from '../components/MenuList';
import ConfirmOrderModal from '../components/ConfirmOrderModal';
import { Icon } from 'native-base';

const width = Dimensions.get('window').width; //full width

class MenuPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: this.props.menu,
      visible: false,
      selected: {},
      value: '1',
      basket: [],
      note: null,
    };
  }
  static navigationOptions = ({ navigation }) => {
    const { storeDetail } = navigation.state.params
    return {
      title: storeDetail ? storeDetail.storeName : 'Store Name',
      headerStyle: {
        backgroundColor: '#EF9F88',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: (
        <Icon
          onPress={() => navigation.navigate('Order')}
          name="list"
          color="#fff"
          style={styles.iconHeader}
        />
      ),
    }
  };
  addToBasket = (selected, amount, note) => {
    if (amount !== '0') {
      const params = this.props.navigation.state.params
      const { storeName } = params.storeDetail
      this.props.addItem(storeName, selected, amount, note)
      this.setState({
        basket: [...this.state.basket, {
          selected: selected,
          amount: amount
        }],
        visible: false,
        note: ''
      })
    } else {
      this.setState({
        visible: false,
        value: '1',
        note: ''
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
  changeNote = (note) => {
    this.setState({ note })
  }
  showModal = (visible, selected, amount) => {
    this.setState({
      visible,
      selected,
      value: amount
    })
  }

  closeModal = () => {
    this.setState({ visible: false })
  }
  render() {
    const params = this.props.navigation.state.params
    const { storeDetail } = params
    const { menu } = params.storeDetail
    const { visible, selected, value } = this.state
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1 }}>
          <Image source={{ uri: storeDetail.uri }} style={styles.headerimg} />
          <MenuList storeDetail={storeDetail} menu={menu} onOrder={this.addOrder} showDialog={this.showModal} />
          <ConfirmOrderModal
            type='addToBasket'
            visible={visible}
            selected={selected}
            value={value}
            onClose={this.closeModal}
            onAdd={this.addToBasket}
            increase={this.addValue}
            decrease={this.minusValue}
            onChangeNote={this.changeNote} />
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
  fixedView: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  headerimg: {
    width: width,
    height: 180
  }
});
const mapStateToProps = (state) => ({
  // items: state.items,
})
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuPage)

