import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login';
import Principal from '../screens/Principal';

export const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      screenOptions:{
        headerShown: false,
      }
    },
    Principal: {
      screen: Principal,
      screenOptions:{
        headerShown: false,
      }
    },
  }, 

  {
      initialRouteName: 'Principal',
  },
   
);
  