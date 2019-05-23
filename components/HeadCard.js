import React, { Component } from 'react';
import { View, Text,  StyleSheet,  ImageBackground,Dimensions} from 'react-native';
import { Card, CardItem } from 'native-base'

const width = Dimensions.get('window').width; //full width


class HeadCard extends Component {

  render() {
    const { user } =this.props
    return (
      <View style={styles.cardContainer}>
      <Card style={styles.card}>
        <CardItem cardBody style={styles.cardItem}>
          <ImageBackground
            source={require('../images/headerbg.jpeg')}
            style={styles.imageBg}
            imageStyle={{ borderRadius: 10 }}
          >
            <Text style={styles.title}>
              Welcome ! {user.firstname}
          </Text>
          </ImageBackground>
        </CardItem>
      </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer:{
    justifyContent: 'center', 
    alignItems:'center'
  },
  card: {
    width: width-20,
    height: 160,
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "transparent",
    marginTop: 40,
  },
  cardItem: {
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageBg: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1, 
    height: 160, 
    width: width-20,
    borderRadius: 20, 
    resizeMode: 'cover'
  },
  header: {
    backgroundColor: 'skyblue',
    padding: 15,
  },
  title: {
    fontSize: 20,
    color: '#202020',
    fontWeight: '700',
    padding: 20

  },
})
export default HeadCard;
