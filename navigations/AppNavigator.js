import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator, createDrawerNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomePage from '../containers/HomePage';
import MenuPage from '../containers/MenuPage';
import OrderPage from '../containers/OrderPage';
import LoginPage from '../containers/LoginPage';
import SignUpPage from '../containers/SignUpPage';
import Loading from '../containers/Loading';
import ProfilePage from '../containers/ProfilePage';
import StorePage from '../containers/StorePage';



const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomePage,
    },
    Menu: {
      screen: MenuPage
    }
  },
  {
    initialRouteName: "Home",
    // headerMode: 'none',
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: AppNavigator
    },
    Store: {
      screen: StorePage
    },
    Order:{
      screen: OrderPage
    },
    Profile: {
      screen: ProfilePage
    }

  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = FontAwesome;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home`;
         } else if(routeName==='Store'){
           iconName = 'list-alt'
         }else if(routeName ==='Order'){
           iconName ='list'
         } else if(routeName ==='Profile'){
           iconName ='user'
         }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={20} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeBackgroundColor: '#D9C3B5',
      activeTintColor: '#FCEBD9',
      inactiveBackgroundColor: '#BA9F8C',
      inactiveTintColor: '#FFFFFF',
      labelStyle: {
        color: '#FFFFFF',
      },
    },
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
);
const SwitchApp = createSwitchNavigator(
  {
    Login: {
      screen: LoginPage
    },
    SignUp: {
      screen: SignUpPage
    },
    Loading: {
      screen: Loading
    },
    Main:{
      screen: TabNavigator
    }
  },

)
// const RootStack = createStackNavigator(
//   {
//     Main: {
//       screen: TabNavigator,
//     },
//     Login: {
//       screen: LoginScreen,
//     },

//   },
//   {
//     mode: 'modal',
//     headerMode: 'none',
//   }
// );

const AppContainer = createAppContainer(SwitchApp);
const styles = StyleSheet.create({
  logo: {
    width: 40,
    height: 40,
  },
  profile: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 16
  },
  profileColumnName: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileColumnPic: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  profileName: {
    fontSize: 22,
    color: '#FEC208',
    fontWeight: '900'
  },
  profilePic: {
    width: 55,
    height: 55,
    borderRadius: 28,
  },
  tabIcon: {
    borderWidth: 20
  }
});
console.disableYellowBox = true ; 
export default AppContainer;
