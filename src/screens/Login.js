import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Item, Input, Label, Button } from 'native-base';
import * as firebase from 'firebase';
import * as firebaseService from '../services/firebaseServices'

export default class Login extends React.Component {

  constructor(){
    super();
    this.state = {
      email: '',
      senha: '',
    }
  }

  render(){
    
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/fundo-login.png')} style={styles.backImage} ></Image>
        <View style={styles.loginArea} >
          <Input value={this.state['email']} onChange={ev=> this.setState({email: ev.nativeEvent.text}) } placeholder="E-mail" style={styles.inputStyle} />
          <Input value={this.state['senha']} onChange={ev=>this.setState({senha: ev.nativeEvent.text}) } placeholder="Senha" style={styles.inputStyle} />
          <Button style={styles.buttonStyle} onPress={() => this.enterButtonFunction() } ><Text style={{ color: "#fff" }}>ENTRAR</Text></Button>
        </View>
      </View>
    )
  }

  async enterButtonFunction(){
    try{
      let credential = await firebase.auth().signInWithEmailAndPassword(this.state['email'], this.state['senha']);
    }catch(e){
      console.log(e);
    }

    if(firebase.auth().currentUser != null){
      this.props.navigation.navigate('Principal');
    }else{
      console.log("Falha no Login!")
    }
  }

}

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
    paddingHorizontal: 7
  },
  loginArea: {
    marginTop:100,
    height: 190,
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
    backgroundColor: "#ff8745"
  }

});