import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

//app main style
import styles from '../Containers/Styles/AppStyle'

class SettingsContainer extends Component {
  render() {
      const {navigate} = this.props.navigation
    return (
    <View style = {styles.container}>
        <View style={styles.centered}>
            <Text onPress = {()=> navigate('DrawerOpen')}>
                drawermenu
            </Text>
            <Text>Not yet implemented</Text>
        </View>
    </View>
    );
  }
}
export default SettingsContainer;
