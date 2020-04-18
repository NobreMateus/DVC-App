import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Principal from './Principal';
import DVCForm from '../components/DVCFom'
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'
import ForgotPass from '../screens/ForgotPass'
import Auth from '../screens/Auth'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
let auth = true;

class LoginStack extends React.Component {
    render() {
        return (
            <Stack.Navigator >
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
                <Stack.Screen name="ForgotPass" component={ForgotPass} options={{ headerShown: false }} />
            </ Stack.Navigator>
        )
    }
}

class MainStack extends React.Component {
    render() {
        return (
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={Principal} />
                <Drawer.Screen name="Adicionar DVC" component={DVCForm} />
            </Drawer.Navigator>
        )
    }
}

export default class Start extends React.Component {

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator >
                    <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
                    <Stack.Screen name="Login" component={LoginStack} options={{ headerShown: false }} />
                    <Stack.Screen name="Main" component={MainStack} options={{ headerShown: false }} />
                </ Stack.Navigator>
            </NavigationContainer>
        );
    }
}
