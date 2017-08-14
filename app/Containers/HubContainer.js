import React from 'react'
import { View, Text, KeyboardAvoidingView, TouchableOpacity,Image } from 'react-native'

// Styles
import styles from './Styles/AppStyle'

//Firebase
import firebase from '../Config/firebase'

class HubContainer extends React.Component {
    constructor(props){
        super(props);
        this._logout = this._logout.bind(this);
    }
    _logout(navigate){
        navigate('Login');
    }

    render () {
        const { navigate } = this.props.navigation
        return (
            <View style = {styles.container}>
                <View style = {styles.centered}>
                    <Text onPress = {()=> navigate('DrawerOpen')}>
                        drawermenu
                    </Text>
                    <Text>
                        Hub
                    </Text>
                    <Text onPress ={()=> this._logout(navigate) }>
                        Logout
                    </Text>
                </View>
            </View>
        )
    }
}


export default (HubContainer)
