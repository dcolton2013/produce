import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';
//styles
import styles from '../Containers/Styles/AppStyle'

//firebase
import firebase from '../Config/firebase';
export const fbAuth = firebase.auth();

//mobx
import {inject} from 'mobx-react';

@inject('userStore')
class CreateAccountContainer extends Component {
    constructor(){
        super();
        this.createAccount = this.createAccount.bind(this);
        this.state = {
            username: "",
            email: "",
            password: "",
            phone: "",
        };
    }
    createAccount(email,password,navigate){
        fbAuth.createUserWithEmailAndPassword(email, password)
          .then((user) => {
            console.log('user created', user);
            navigate('Hub');
          })
          .catch((err) => {
              //Alert: account in use
            console.error('An error occurred', err);
          });
    }

    onChangeUser(text){
        this.setState({username:text})
    }
    onChangeEmail(text){
        this.setState({email:text})
    }
    onChangePassword(text){
        this.setState({password:text})
    }
    onChangePhone(text){
        this.setState({phone:text})
    }


  render() {
    const { navigate } = this.props.navigation
    return (
        <View style = {styles.container}>
        <Text> {"\n\n"}</Text>
        <Text onPress={() => this.props.navigation.goBack()} > Back </Text>
        <TextInput
            style = {{height: 40}}
            placeholder='username'
            onChangeText={ (text) => {this.onChangeUser(text)} }
            value = {this.state.username}
            autocorrect = 'false'
            autoCapitalize = 'none'
        />
        <TextInput
            style = {{height: 40}}
            placeholder='email'
            onChangeText={ (text) => {this.onChangeEmail(text)} }
            value = {this.state.email}
            autocorrect = 'false'
            autoCapitalize = 'none'
        />
        <TextInput
            style = {{height: 40}}
            placeholder='password'
            onChangeText={ (text) => {this.onChangePassword(text)} }
            value = {this.state.password}
            autocorrect = 'false'
            autoCapitalize = 'none'
        />
        <TextInput
            style = {{height: 40}}
            placeholder='phone'
            onChangeText={ (text) => {this.onChangePhone(text)} }
            value = {this.state.phone}
            autocorrect = 'false'
            autoCapitalize = 'none'
        />
        <TouchableHighlight
            style = {{padding:50}}
            onPress = {() => this.createAccount(this.state.email,this.state.password,navigate)}>
            <Text>Create Account</Text>
        </TouchableHighlight>
        </View>
    );
  }
}

export default CreateAccountContainer;
