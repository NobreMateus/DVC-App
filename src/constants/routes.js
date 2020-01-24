import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login';
import Principal from '../screens/Principal';
import SignUp from '../screens/SignUp';

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
  