import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Icon } from 'native-base';
import * as firebaseServices from '../services/firebaseServices';

export default class LogoutButton extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <TouchableOpacity onPress={this.logoutFunction.bind(this)} style={styles.container}>
                <Icon name='exit' style={{ color: "#FFF" }} />
            </TouchableOpacity>
        );
    }

    logoutFunction() {
        Alert.alert(
            'Logout',
            'Deseja realmente sair do DVC App?',
            [
                { text: 'Sim', onPress: () => {
                    // this.props.navigation.navigate('Login');
                } },
                { text: 'Cancelar'},
            ],
            { cancelable: false },
        );
        
    }

    logout(){
        // firebaseServices.logout();
        // this.props.navigation.navigate('Login');
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "flex-end",
        marginRight: 10,
        width: 45,
    }
});
