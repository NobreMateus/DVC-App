import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Item, Input, Label, Button } from 'native-base';
import * as firebase from 'firebase';
import * as firebaseService from '../services/firebaseServices'
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';
import { login } from '../store/actions/user';
import { setData } from '../store/actions/data';

class Login extends React.Component {

  constructor(){
    super();
    this.state = {
      email: '',
      senha: '',
      spinner: false,
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
          <Input value={this.state['email']} autoCapitalize="none" onChange={ev=> this.setState({email: ev.nativeEvent.text}) } placeholder="E-mail" style={styles.inputStyle} />
          <Input value={this.state['senha']} secureTextEntry={true} onChange={ev=>this.setState({senha: ev.nativeEvent.text}) } placeholder="Senha" style={styles.inputStyle} />
          <TouchableOpacity style={styles.buttonStyle} onPress={() => this.enterButtonFunction() } ><Text style={{ color: "#fff" }}>ENTRAR</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>this.signUpClick()} ><Text style={styles.signupText} >Cadastre-se</Text></TouchableOpacity>
        </View>
      </View>
    )
  }

  async enterButtonFunction(){
    this.setState({
      spinner: true
    })

    

    try{
      let credential = await firebase.auth().signInWithEmailAndPassword(this.state['email'], this.state['senha']);
    }catch(e){
      console.log(e);
    }

    this.props.onLogin({
      email: this.state['email'],
      uid: firebase.auth().currentUser.uid
    })
    let data = await firebaseService.getDVCData();
    this.props.setData({...data});

    if(firebase.auth().currentUser != null){
      this.props.navigation.navigate('Principal');
    }else{
      console.log("Falha no Login!")
    }
    this.setState({
      spinner: false
    })
  }

  signUpClick(){
    this.props.navigation.navigate('SignUp');
  }

}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: user => dispatch(login(user)),
    setData: data => dispatch(setData(data))
  }  
}

export default connect(null, mapDispatchToProps)(Login);

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
    height: 210,
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
  signupText:{
    fontSize: 18,
    color: '#ff8745',
    textAlign:"center",
    textDecorationLine: 'underline',
  },
  spinnerTextStyle:{
    color: "#FFF"
  }

});