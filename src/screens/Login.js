import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Item, Input, Label, Button } from 'native-base';

export default class Login extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/fundo-login.png')} style={styles.backImage} ></Image>
        <View style={styles.loginArea} >
          {/* <Input placeholder="E-mail" style={styles.inputStyle} />
              <Input placeholder="Senha" style={styles.inputStyle} /> */}
          <Button style={styles.buttonStyle} onPress={() => this.props.navigation.navigate('Principal')} ><Text style={{ color: "#fff" }}>ENTRAR</Text></Button>
        </View>
      </View>
    )
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
    height: 70,
    width: 250
  },
  buttonStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
    borderRadius: 25,
    marginHorizontal: 25,
    height: 12,
    backgroundColor: "#ff8745"
  }

});