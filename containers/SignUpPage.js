import React from 'react'
import { StyleSheet, TextInput, View, Image} from 'react-native'
import { auth, db } from '../providers/FirebaseProvider';
import { Button, Text, Row, Col  } from 'native-base'
import { Form, signUp, signUpOptions } from '../components/SignUpForm';

export default class SignUpPage extends React.Component {

  state = { email: '', password: '', errorMessage: null }
handleSignUp = () => {
  const value = this.refs._signUp.getValue()
    const { email, password, firstName, lastName, phoneNumber } =value
    
  auth.createUserWithEmailAndPassword(email,password)
      .then((auth) => {
        db.ref(`/users/${auth.user.uid}/profile`).push({
          email: email,
          firstname: firstName,
          lastname: lastName,
          phoneNumber: phoneNumber,
        })
        this.props.navigation.navigate('Login')
      }
      )
      .catch(error => this.setState({ errorMessage: error.message }))
      
  console.log('handleSignUp')
}
render() {
    return (
      <View style={styles.container}>
      <Image source={require('../images/signup.png')} style={{ width: 200, height:100, marginTop: 50}}/>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
          <View style={styles.signUpForm}>
          <Form
            ref="_signUp"
            type={signUp}
            options={signUpOptions}
            />
            <Row >
              <Col style={styles.buttonContainer}>
            <Button block
            style={styles.loginButton}
            onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.loginText}>Back to Login</Text>
            </Button>
              </Col>
              <Col style={styles.buttonContainer}>
            <Button block
            style={styles.signUpButton}
            onPress={this.handleSignUp} >
              <Text style={styles.signUpText}>Sign Up</Text>
            </Button>
              </Col>
            </Row>
            </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7D6E6A',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer:{
    alignItems:'center',
    justifyContent:'center'
  },
  signUpForm:{
    alignItems: 'stretch',
    width: 300,
    flex: 1
  },
  loginButton:{
    backgroundColor: '#D9C3B5',
    alignSelf: 'stretch',
    margin: 10
  },
  loginText:{
    color: '#000',
  },
  signUpButton:{
    backgroundColor: '#FCEBD9',
    alignSelf: 'stretch',
    margin: 10
  },
  signUpText:{
    color: '#000',
  },
})