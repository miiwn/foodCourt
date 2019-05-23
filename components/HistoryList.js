import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Left, Right, Text, CardItem, Body, Card, Row } from 'native-base';
import moment from 'moment'

class HistoryList extends Component {

    render() {
        const { order } = this.props
        return (
            <Card style={styles.card}>
                <TouchableOpacity onPress={() => this.props.orderDetail(order)}>
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
                                        </Left>
                                        <Right >
                                            <Text >{item.price}</Text>
                                        </Right>
                                    </Row>
                                )
                            })}
                        </Body>
                    </CardItem>
                    <CardItem footer bordered style={styles.dateContainer}>
                        <Text style={styles.date}>{moment(order.create).format('MMMM Do YYYY, HH:mm')}</Text>
                    </CardItem>
                </TouchableOpacity>
            </Card>
        );
    }
}

export default HistoryList;
const styles = StyleSheet.create({
    dateContainer: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    date: {
        fontSize: 12,
        fontWeight: '300',
    },
    bodyContainer: {
        minHeight: 50
    },
    card: {
        margin: 10,
    }
});
