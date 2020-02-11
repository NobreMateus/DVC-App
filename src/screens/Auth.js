import React from 'react';
import {  AsyncStorage } from 'react-native';
import * as firebaseService from '../services/firebaseServices'
import Spinner from 'react-native-loading-spinner-overlay';
import { setData } from '../store/actions/data';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';

class Auth extends React.Component {

  componentDidMount(){
    this.getToken();
  }

  render(){
    
    return (
      <View>
        
      </View>
    )
  }

  async getToken(user) {
    try {
    //   let userData = await AsyncStorage.getItem("userData");
    //   let data = JSON.parse(userData);
    //   console.log("AQUII")
    //   console.log(data);
    //   console.log("ATE AQUIII") 
    //   if(data){
    //       // await firebase.auth().updateCurrentUser(data.accessToken);
    //       await firebase.auth().signInWithCustomToken(data['stsTokenManager'].accessToken)
    //       this.props.navigation.navigate('Logged');
    //     console.log("TENTEI AQUI")
    //   }else{
    //     this.props.navigation.navigate('Login');
    //   }
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'Principal' : 'noAuth')
        })
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }


}


export default Auth;
