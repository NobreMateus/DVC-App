import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation-stack';
import Login from '../screens/Login';
import Principal from '../screens/Principal';
import SignUp from '../screens/SignUp';
import LogoutButton from '../components/LogoutButton';

export const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions:{
        headerShown: false,
      },
      
    },
    Principal: {
      screen: Principal,
      navigationOptions:{
        headerShown: true,
        headerLeft: null,
        headerRight: <LogoutButton />,
        headerTitleStyle:{
          color:"#fff",
        },
        headerStyle:{
          backgroundColor: '#ff8745',
          elevation: 0,
        }
      },
    },
    SignUp:{
      screen: SignUp,
      navigationOptions:{
        headerShown: false,
      },
    }
  }, 

  {
      initialRouteName: 'Login',
  },
   
);
  