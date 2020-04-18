import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Principal from './Principal';
import DVCForm from '../components/DVCFom'
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'
import ForgotPass from '../screens/ForgotPass'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
let auth = true;

export default class Start extends React.Component {

    render() {
        return (
            <NavigationContainer>
                {auth ?
                    <Drawer.Navigator initialRouteName="Home">
                        <Drawer.Screen name="Home" component={Principal} />
                        <Drawer.Screen name="Adicionar DVC" component={DVCForm} />
                    </Drawer.Navigator>
                :
                    <Stack.Navigator >
                        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
                        <Stack.Screen name="ForgotPass" component={ForgotPass} options={{ headerShown: false }} />
                    </ Stack.Navigator>
                }
            </NavigationContainer>
        );
    }
}
