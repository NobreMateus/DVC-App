import React from 'react';
import {  AsyncStorage } from 'react-native';
import * as firebaseService from '../services/firebaseServices'
import Spinner from 'react-native-loading-spinner-overlay';
import { setData } from '../store/actions/data';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';
import { Button } from 'native-base';

export default class Auth extends React.Component {

  componentDidMount(){
    firebase.auth().onAuthStateChanged(user=>{
      this.props.navigation.navigate(user ? 'Main':'Login')
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})
