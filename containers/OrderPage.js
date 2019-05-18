import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux/actions/actionCreators';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ListItem, Left, Right, Row, Button } from 'native-base';
import Title from '../components/Title';
import Description from '../components/Description';
import OrderList from '../components/OrderList';
import ConfirmButton from '../components/ConfirmButton';
import ConfirmOrderModal from '../components/ConfirmOrderModal';
import Header from '../components/Header';
// import console = require('console');


const user = {
    username: 'Miiwn',
    nickname: 'Miiwn'
}

class OrderPage extends Component {
    // static navigationOptions = {
    //     title: 'Orders',
    //     headerStyle: {
    //       backgroundColor: '#EF9F88',
    //     },
    //     headerTintColor: '#fff',
    //     headerTitleStyle: {
    //       fontWeight: 'bold',
    //     },
    //   };
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }
    confirmOrder =()=>{
        alert('confirm')
    }
    closeModal =()=>{
        this.setState({ visible: false })
    }
    render() {
        const { orders } = this.props;
        const { visible } = this.state
        return (
            <View style={styles.orderContainer}>
                <Header title='Orders' />
                {orders.length !==0 ? <OrderList orders={orders}/>
                : <View style={styles.noOrderContainer}>
                    <Text style={styles.noOrder}>No order in the basket</Text>
                    </View>}
                {orders.length !==0? <Row style={styles.buttonContainer}>
                    <Button onPress={()=>this.setState({visible: true})} style={styles.buttonConfirm}>
                    <Text style={styles.buttonText}>
                    Confirm Order
                    </Text>
                </Button>
                </Row>
                : null}
                <ConfirmOrderModal visible={visible} onClose={this.closeModal} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    orderContainer:{
        flex:1
    },
    title: {
        fontSize: 16,
        textAlign: 'left',
        color: '#484848',
        fontWeight: '700',
    },
    recommendContainer: {
        margin: 10,
        width: 300,
        height: 80,
        padding: 10,
        borderRightWidth: 1,
        borderRightColor: '#808080',
    },
    buttonContainer:{
        justifyContent:'center',
        alignItems: 'center',
    },
    buttonConfirm:{
        backgroundColor: '#F67280',
        padding: 20,
    },
    buttonText:{
        color: '#FFF'
    },
    noOrderContainer:{
        flex: 3,
        justifyContent: 'center',
        alignItems:'center'
    },
    noOrder:{
        justifyContent: 'center',
        alignItems:'center'
    }
});
const mapStateToProps = (state) => ({
    orders: state.order,
})

export default connect(mapStateToProps)(OrderPage)

