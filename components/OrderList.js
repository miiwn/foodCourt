import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ListItem, List, Left, Right, Card } from 'native-base';
export default class OrderList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0
        };
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
        const { orders, total } = this.props

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
