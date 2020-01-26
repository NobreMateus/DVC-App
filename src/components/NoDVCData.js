import React from 'react';
import { StyleSheet, View, TouchableOpacity, Alert } from 'react-native';
import { Container,  Text, Icon } from 'native-base';
import * as firebaseServices from '../services/firebaseServices';

export default class Info extends React.Component {

  render() {
    return (
      <Container style={styles.container}>
        <View>
            <Text>Preencha o DVC</Text>
        </View>
      </Container>
    );
    
    }
    
    async logoutFunction() {
        Alert.alert(
            'Logout',
            'Deseja realmente sair do DVC App?',
            [
                { text: 'Sim', onPress: async () => {
                    await firebaseServices.logout();
                    this.props.navigate('Login');
                }},
                { text: 'Cancelar'},
            ],
            { cancelable: false },
        );
        
    }


}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a8c5c8',
    alignItems: 'center',
    paddingTop: 50
    // justifyContent: 'center',
  },
  logoutButton:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    marginBottom: 25,
    borderRadius: 25,
    marginHorizontal: 25,
    // height: 12,
    backgroundColor: "#ff8745",
    height: 45,
    width: 200,
    flexDirection: "row"
  }
});