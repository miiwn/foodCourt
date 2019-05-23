import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import HistoryDetail from '../components/HistoryDetail';


class HistoryDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            total: 0,
        };
    }
    static navigationOptions = {
        title: 'Order Detail',
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
            this._loadTotalPrice();
        })
        // this._loadTotalPrice()
    }
    _loadTotalPrice = () => {
        const { order } = this.props.navigation.state.params
        let sum = 0
        order.orders.map((item, index) => {
            sum += item.price * item.amount
            if (order.orders.length - 1 === index) {
                return sum
            }
        })

        this.setState({ total: sum })
    }

    render() {
        const { order } = this.props.navigation.state.params;
        const { total } = this.state
        return (
            <View style={styles.orderContainer}>
                <HistoryDetail order={order} total={total} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    orderContainer: {
        flex: 1
    },

});


export default HistoryDetailPage

