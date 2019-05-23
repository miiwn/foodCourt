import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { CardItem, Left, Right, Card, Body, Row } from 'native-base';
import moment from 'moment'

export default class HistoryDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { order, total } = this.props
        return (
            <View style={styles.menuList}>
                <Card style={styles.orderCard}>
                    <CardItem header bordered>
                        <Left>
                            <Text>Order Table no. {order.tableno}</Text>
                        </Left>
                        <Right>
                            <Text>{order.status}</Text>
                        </Right>
                    </CardItem>
                    <CardItem bordered>
                        <Body style={styles.bodyContainer}>
                            {order.orders.map((item) => {
                                return (
                                    <Row>
                                        <Left >
                                            <Text>x{item.amount} {item.name} </Text>
                                            <Text>from {item.storeName}</Text>
                                        </Left>
                                        <Right >
                                            <Text >{item.price}</Text>
                                        </Right>
                                    </Row>
                                )
                            })}
                            <Row>
                                <Left style={styles.nameContainer}>
                                    <Text>Total </Text>
                                </Left>
                                <Right style={styles.priceContainer}>
                                    <Text style={styles.price}>{total}</Text>
                                </Right>
                            </Row>
                        </Body>
                    </CardItem>
                    <CardItem footer bordered style={styles.dateContainer}>
                        <Text style={styles.date}>{moment(order.create).format('MMMM Do YYYY, HH:mm')}</Text>
                    </CardItem>

                </Card>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    menuList: {
        flex: 3,
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
        flex: 2
    },
    dateContainer: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    date: {
        fontSize: 12,
        fontWeight: '300',
    },
    bodyContainer: {
        minHeight: 200
    },
    card: {
        margin: 10,
    }
});
