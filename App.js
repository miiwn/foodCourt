import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { reducer } from './redux/reducers/orderReducers';

import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './navigations/AppNavigator';

const store =createStore(reducer)
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
