import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation-stack';
import Login from '../screens/Login';
import Principal from '../screens/Principal';
import SignUp from '../screens/SignUp';
import ForgotPass from '../screens/ForgotPass';
import LogoutButton from '../components/LogoutButton';
import Auth from '../screens/Auth';
import DVCDetails from '../screens/DVCDetails';
import { Icon, Button} from 'native-base';

export const AppNavigator = createStackNavigator(
  {
    Principal: {
      screen: Principal,
      navigationOptions:{
        headerShown: true,
        headerTitle: "DVC App",
        headerLeft: null,
        // headerRight: <LogoutButton />,
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
    },
    DVCDetails:{
      screen: DVCDetails,
      navigationOptions:{
        headerTitle: "Detalhes",
        headerTitleStyle:{
          color:"#fff",
        },
        headerStyle:{
          backgroundColor: '#ff8745',
          elevation: 0,
        }
      }
    }
  }, 

  {
      initialRouteName: 'Principal',
  },
   
);

export const configRoute = {
  Login: {
    screen: Login,
    navigationOptions:{
      headerShown: false,
    },
    
  },

  SignUp:{
    screen: SignUp,
    navigationOptions:{
      headerShown: false,
    },
  },

  ForgotPass:{
    screen: ForgotPass,
    navigationOptions:{
      headerShown: false,
    },
  },
  
  Auth: {
    screen: Auth,
    navigationOptions:{
      headerShown: false,
    },
  
  },
  Logged: AppNavigator  


  // Auth: AppNavigator,
}

export const optionRoute = {
  initialRouteName: 'Auth',
}
  