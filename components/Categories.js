import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image, ImageBackground, Dimensions, ScrollView  } from 'react-native';
import { Card, CardItem } from 'native-base'
import Title from './Title';

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height;

class Categories extends Component {

    _renderItem=({item})=>{
        if(item.uri){
        return (
            <Card style={styles.card}>
              <CardItem cardBody style={styles.cardItem}>
              <ImageBackground
               source={{uri: item.uri}}
               style={styles.imageBg}
               imageStyle={{ 
                   borderRadius: 10,
                    opacity: 0.6,
                 }}
               >
                <Text style={styles.title}>
                  {item.name}
                </Text>
              </ImageBackground>
              </CardItem>
            </Card>
            )
        }else{

        }
    }


    render() {
        const {data} =this.props
        return (
            <View style={styles.listContainer}>
                <Title title="Explore restaurants" description="Select Restaurants by Categories" />
                <FlatList
                data={data}
                renderItem={this._renderItem}
                numColumns={3}
                keyExtractor={(item)=> item.name}
                />
                </View>
        );
    }
}

const styles = StyleSheet.create({
    listContainer:{
        marginLeft:10,
        marginRight: 10,
      },
    card: {
        justifyContent: 'center',
        flex:1,
        alignItems: 'center',
        height: 80,
        marginRight: 5,
        marginLeft: 5,
        borderRadius: 12,
    },
    cardItem: {
        // backgroundColor: 'transparent',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageBg: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        height: 80,
        borderRadius: 12,
        resizeMode: 'cover'
    },
    header: {
        backgroundColor: 'skyblue',
        padding: 15,
    },
    title: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: '500',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10

    },
})
export default Categories;
