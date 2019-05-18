import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ListItem, Row, List, Left, Right, Card, CardItem } from 'native-base';
import { toASCII } from 'punycode';
// import console = require('console');

export default class OrderList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0
        };
    }
    componentWillUpdate(){
        const { orders } = this.props
        const { total } =this.state
        let sum = 0
        orders.map((item,index)=>{
            sum = item.price*item.amount
        })
        this.setState({total: sum})
    }
    _renderItem = ({ item }) => {
        const { total } = this.state
        let sum = item.price * item.amount
        return (
            <View>
                <ListItem>
                    <Left style={styles.nameContainer}>
                        <Text>x{item.amount} {item.name} </Text>
                    </Left>
                    <Right style={styles.priceContainer}>
                        <Text style={styles.price}>{sum}</Text>
                    </Right>
                </ListItem>
            </View>
        )

    }
    render() {
        const { orders } = this.props
        const { total } = this.state

        return (
            <View style={styles.menuList}>
                <Card style={styles.orderCard}>
                    <List>
                        <FlatList
                            data={orders}
                            renderItem={this._renderItem}
                            keyExtractor={(item, index) => item + index}
                        />
                        <ListItem>
                            <Left style={styles.nameContainer}>
                                <Text>Total </Text>
                            </Left>
                            <Right style={styles.priceContainer}>
                                <Text style={styles.price}>{total}</Text>
                            </Right>
                        </ListItem>
                    </List>

                </Card>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    menuList: {
        flex: 4,
    },
    nameContainer: {
        margin: 10,
    },
    priceContainer: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    orderCard: {
        flex: 3
    }
});
