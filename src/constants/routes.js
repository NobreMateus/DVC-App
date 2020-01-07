import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login';
import Principal from '../screens/Principal';

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
        headerTitleStyle:{
          color:"#fff",
        },
        headerStyle:{
          backgroundColor: '#ff8745',
          elevation: 0,
        }
      },
    },
  }, 

  {
      initialRouteName: 'Principal',
  },
   
);
  