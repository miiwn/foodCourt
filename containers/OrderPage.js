import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux/actions/actionCreators';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ListItem, Left, Right, Row, Button } from 'native-base';
import OrderList from '../components/OrderList';
import ConfirmOrderModal from '../components/ConfirmOrderModal';
import HeaderComponent from '../components/HeaderComponent';
import { db , auth} from '../providers/FirebaseProvider';
import Firebase from 'firebase'


const user = {
    username: 'Miiwn',
    nickname: 'Miiwn'
}


class OrderPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            total: 0,
        };
    }
    componentWillMount=()=>{
        this.focusListener = this.props.navigation.addListener("didFocus", () => {
            this._loadTotalPrice();
          })
        // this._loadTotalPrice()
    }
    _loadTotalPrice =()=>{
        const { orders } = this.props
        let sum = 0
        orders.map((item,index)=>{
            sum += item.price*item.amount
            if(orders.length-1===index){
                return sum
            }
        })

        this.setState({total: sum})
    }
    confirmOrder =(table)=>{
        const { orders } = this.props;
        db.ref(`/users/${auth.currentUser.uid}/orders`).push({
            orders: orders,
            tableno: table.tableNo,
            status: 'SENT',
            create: Firebase.database.ServerValue.TIMESTAMP,
          })
          this.closeModal()
          alert("Your order have been sent")
          this.props.clearOrder();
    }
    closeModal =()=>{
        this.setState({ visible: false })
    }
    render() {
        const { orders } = this.props;
        const { visible, total } = this.state
        return (
            <View style={styles.orderContainer}>
                <HeaderComponent title='Orders' />
                {orders.length !==0 ? <OrderList orders={orders} total={total}/>
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
                <ConfirmOrderModal visible={visible} order={orders} total={total} onClose={this.closeModal} onSubmit={this.confirmOrder} />
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
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators,dispatch) ;
   } 
  

export default connect(mapStateToProps,mapDispatchToProps)(OrderPage)

