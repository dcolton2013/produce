import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './app/app';
import { Provider } from 'mobx-react/native';
import userStore from './app/Mobx/Stores/UserStore';
const stores = { userStore };

export default class ProduceApp extends Component {
  render() {
    return (
        //entry point to the app
        //provider gives access to all mobx stores
        <Provider {...stores}>
            <App/>
        </Provider>
    );
  }
}

AppRegistry.registerComponent('ProduceApp', () => ProduceApp);
