import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Item, Input, Label, Button } from 'native-base';
import * as firebaseService from '../services/firebaseServices'
import Spinner from 'react-native-loading-spinner-overlay';

export default class SignUp extends React.Component {

    constructor() {
        super();
        this.state = {
            email: '',
            senha: '',
            confirmsenha: '',
            spinner: false
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <Image source={require('../../assets/fundo-login.png')} style={styles.backImage} ></Image>
                <Spinner
                    visible={this.state.spinner}
                    textContent={'Carregando...'}
                    textStyle={styles.spinnerTextStyle}
                />
                <View style={styles.formArea} >
                    <Input value={this.state['email']} onChange={ev => this.setState({ email: ev.nativeEvent.text })} placeholder="E-mail" style={styles.inputStyle} />
                    <Input value={this.state['senha']} secureTextEntry={true} onChange={ev => this.setState({ senha: ev.nativeEvent.text })} placeholder="Senha" style={styles.inputStyle} />
                    <Input value={this.state['confirmsenha']} secureTextEntry={true} onChange={ev => this.setState({ confirmsenha: ev.nativeEvent.text })} placeholder="Confirmar Senha" style={styles.inputStyle} />
                    <TouchableOpacity style={styles.buttonStyle} onPress={() => this.signupButtonFunction()} ><Text style={{ color: "#fff" }}>CADASTRAR</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} ><Text style={styles.signupText} >Voltar</Text></TouchableOpacity>
                </View>
            </View>
        )
    }

    async signupButtonFunction() {
        this.setState({
            spinner: true,
        });
        if (this.state['senha'] == this.state['confirmsenha'] && this.state['senha'].length>=6  ) {
            try {
                let user = await firebaseService.createUser(this.state['email'], this.state['senha']);
                // if(user){
                alert("Conta criada com sucesso!");
                // await firebaseService.sendEmailVer();
                this.props.navigation.navigate('Login');
                // }
            } catch (e) {
                alert(e);
            }

            this.setState({
                email: '',
                senha: '',
                confirmsenha: '',
                spinner: false
            });
        } else {
            if(this.state['senha'] == this.state['confirmsenha']) 
                alert("Senhas não correspondem!");

            else if( this.state['senha'].length>=6)
                alert("A senha deve ter no mínimo 6 caracteres!");

            this.setState({
                spinner: false,
            });
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
        paddingLeft: 20,
        paddingRight: 20,
    },
    formArea: {
        marginTop: 100,
        height: 260,
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
        height: 45
    },
    signupText: {
        fontSize: 18,
        color: '#ff8745',
        textAlign: "center",
        textDecorationLine: 'underline',
    },
    spinnerTextStyle: {
        color: "#FFF"
    }

});