import React, { Component } from 'react';
import { View, StyleSheet, Animated, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux/actions/actionCreators';
import { Button, Text } from 'native-base'
import { auth } from '../providers/FirebaseProvider'
import { Form, login, loginOptions } from '../components/LoginForm'

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: null,
    };
  }

  handleLogin = () => {
    const value = this.refs._form.getValue()
    const { email, password } = value
    auth.signInWithEmailAndPassword(email, password)
      .then((auth) => this.props.navigation.navigate('Home', { "user": auth }))
      .catch(error => this.setState({ errorMessage: error.message }))
    // TODO: Firebase stuff...
    console.log('handleLogin')

  }


  render() {
    return (
      <View style={styles.loginContainer}>
        <Image source={require('../images/suanmak.png')} style={{ width: 200, height: 200, margin: 20 }} />
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <View style={styles.loginForm}>
          <Form
            ref="_form"
            type={login}
            options={loginOptions}
          />
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('SignUp')}>
          <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
        <Button
          onPress={this.handleLogin}
          style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#7D6E6A',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  },
  loginForm: {
    alignItems: 'stretch',
    width: 300
  },
  loginButton: {
    backgroundColor: '#FCEBD9',
    alignSelf: 'center',
    margin: 10
  },
  loginText: {
    color: '#000',
  },
  signUpButton: {
    alignSelf: 'center',
  },
  signUpText: {
    color: '#FFF'
  }
});
const mapStateToProps = (state) => ({
  // items: state.items,
})
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
