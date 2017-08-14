import React, { Component } from 'react';
import {StackNavigator, TabNavigator,DrawerNavigator} from 'react-navigation'
//routes
import Login from '../Containers/LoginContainer'
import Hub from '../Containers/HubContainer'
import CreateAccount from '../Containers/CreateAccountContainer'
import Order from '../Containers/OrderContainer'
import Settings from '../Containers/SettingsContainer'

//tab nav after login---------------------------------------------------------------------
const RouteConfigsDrawer = {
    Hub: {screen:Hub},
    Order:{screen:Order},
    Settings:{screen:Settings},
}

const DrawerNavigatorConfig = {
    initialRouteName: 'Hub',
}
        const drawernav = DrawerNavigator(RouteConfigsDrawer, DrawerNavigatorConfig);

//initial stack---------------------------------------------------------------------------
const RouteConfigsStack = {
    Login: {screen:Login},
    //drawernav nested
    Hub: {screen:drawernav},
    CreateAccount: {screen: CreateAccount},
}
const StackNavigatorConfig = {
    headerMode: 'none',
}
        const stacknav = StackNavigator(RouteConfigsStack, StackNavigatorConfig);


export default stacknav;
