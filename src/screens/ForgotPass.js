import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Item, Input, Label, Button } from 'native-base';
import * as firebaseService from '../services/firebaseServices'
import Spinner from 'react-native-loading-spinner-overlay';
import { setData } from '../store/actions/data';
import * as firebase from 'firebase';

class ForgotPass extends React.Component {

  constructor(){
    super();
    this.state = {
      email: '',
      spinner: false
    }
  }

  render(){
    
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/fundo-login.png')} style={styles.backImage} ></Image>
        <Spinner
          visible={this.state.spinner}
          textContent={'Carregando...'}
          textStyle={styles.spinnerTextStyle}
        />
        <View style={styles.loginArea} >
          <Input value={this.state['email']} autoCapitalize="none" onChange={ev=> this.setState({email: ev.nativeEvent.text}) } placeholder="E-mail Cadastrado" style={styles.inputStyle} />
          <TouchableOpacity style={styles.buttonStyle} onPress={() => this.sendButtonFunction() } ><Text style={{ color: "#fff" }}>Enviar</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Text style={styles.backText}>Voltar</Text></TouchableOpacity>
        </View>
      </View>
    )
  }

  async sendButtonFunction(){
    await firebase.auth().sendPasswordResetEmail(this.state['email']);
  }



}


export default ForgotPass;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backImage: {
    backgroundColor: '#ccc',
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  inputStyle: {
    backgroundColor: "#fff",
    borderRadius: 25,
    marginBottom: 14,
    paddingLeft: 20,
    paddingRight: 20,
  },
  loginArea: {
    marginTop:100,
    height: 160,
    width: 250
  },
  buttonStyle: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
    borderRadius: 25,
    marginHorizontal: 25,
    // height: 12,
    backgroundColor: "#ff8745",
    height: 45,
  },
  backText:{
    fontSize: 18,
    color: '#ff8745',
    textAlign:"center",
    textDecorationLine: 'underline',
  },
  spinnerTextStyle:{
    color: "#FFF"
  }

});