import React from 'react'
import { View, ListView, Text, TouchableOpacity,
     TouchableHighlight,Image,TextInput } from 'react-native'
//styles
import styles from './Styles/AppStyle';
//firebase
import firebase from '../Config/firebase';
const fbDB = firebase.database();
export const fbAuth = firebase.auth();
const fbStor = firebase.storage();

//mobx
import { observable } from "mobx";
import { observer, inject } from "mobx-react";

import userStore from '../Mobx/Stores/UserStore';

@observer
@inject('userStore')
class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.onLogin = this.onLogin.bind(this);
        this.onSignUp = this.onSignUp.bind(this);
        this.state = {
            email: this.props.email,
            password: this.props.password
        };
    }
    static defaultProps = {
        email: "admin@wfg.com",
        password: "admin99"
    }
    onChangeEmail(text){
        this.setState({email: text});
    }
    onChangePassword(text){
        this.setState({password: text});
    }
    onSignUp(navigate){
        navigate('CreateAccount');
    }
    onLogin(email, password, navigate){
        fbAuth.signInWithEmailAndPassword(email, password)
          .then((user) => {
            console.log('User successfully logged in', user);
            navigate('Hub');
          })
          .catch((err) => {
            console.error('User signin error', err);
          });
          this.props.userStore.setEmail(email);
    }
    render () {
        const { navigate } = this.props.navigation
        return (
                <View style = {styles.container}>
                    <View style = {styles.centered}>
                        <Text>
                            {"Home"}
                        </Text>
                        <View>
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
                                onChangeText={(text) =>{this.onChangePassword(text)}}
                                value = {this.state.password}
                                autocorrect = 'false'
                                autoCapitalize = 'none'
                            />
                        </View>
                        <View>
                            <TouchableHighlight
                                style = {{padding:50}}
                                onPress = {() => this.onSignUp(navigate)}>
                                <Text>Sign Up</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style = {{padding:50}}
                                onPress = {()=>     this.onLogin(this.state.email,this.state.password,navigate)}>
                                <Text>Login</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>

        )
    }
}


export default LoginContainer;
