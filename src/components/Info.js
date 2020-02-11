import React from 'react';
import { StyleSheet, View, TouchableOpacity, Alert } from 'react-native';
import { Container, Text, Icon, Content } from 'native-base';
import * as firebaseServices from '../services/firebaseServices';
import { connect } from 'react-redux';
import { resetData } from '../store/actions/data';

class Info extends React.Component {

    render() {
        return (
            <Container style={styles.container}>
                <Content style={{paddingHorizontal:15}}>
                    
                    <Text style={styles.text}>
                        {`Bem-vindo ao DVC App!
                        
O Desafio do Voluntário-Chave é uma forma de mostrar ao estudante cristão como ele pode ser um discípulo multiplicador ou (como nós chamamos) um voluntário-chave.

O DVC é simples e fácil de compartilhar com outros.

O objetivo é trazer à tona a visão que Deus tem dado ao estudante para seu campus, encorajando-o e equipando-o para dar passos de fé.

Você pode compartilhar esse desafio com um estudante que acabou de receber a Cristo ou com um estudante que já é cristão - na universidade, na igreja ou em um evento cristão.

SUGESTÕES DE COMO INICIAR UMA CONVERSA

Você pode começar falando algo assim:

- Olá, meu nome é Lucas, faço parte da Cru Campus, um movimento que ajuda estudantes a desenvolverem um relacionamento com Deus através do evangelismo e do discipulado. Durante esses dias, estamos procurando outros estudantes cristãos evangélicos que gostariam de conhecer mais o nosso movimento. Você é evangélico? (Se for numa igreja ou evento cristão, troque por "Você é universitário"?).

Se a resposta for positiva, pergunte se a pessoa tem um tempo para conversar e então faça o Desafio do Voluntário-Chave.

Se a resposta for negativa, pergunte se a pessoa conhece algum estudante cristão e se poderia lhe apresentar.

Caso ela não conheça ninguém, simplesmente agradeça pela sua atenção e continue procurando voluntários-chave.`}
                    </Text>
                    <View style={{alignItems:"center"}}>
                        <TouchableOpacity style={styles.logoutButton} onPress={() => this.logoutFunction()}>
                            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                <Text style={{ color: "white", marginRight: 8 }}> Sair </Text>
                                <Icon name='exit' style={{ color: "#FFF" }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        );

    }

    async logoutFunction() {
        Alert.alert(
            'Logout',
            'Deseja realmente sair do DVC App?',
            [
                {
                    text: 'Sim', onPress: async () => {
                        await firebaseServices.logout();
                        this.props.resetData();
                        this.props.navigate('Login');
                    }
                },
                { text: 'Cancelar' },
            ],
            { cancelable: false },
        );

    }


}

const mapDispatchToProps = dispatch => {
    return {
        resetData: () => dispatch(resetData())
    }
}

export default connect(null, mapDispatchToProps)(Info);



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a8c5c8',
        // alignItems: 'top',
        // justifyContent: 'center',
    },
    logoutButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 30,
        borderRadius: 25,
        // marginHorizontal: 25,
        // height: 12,
        backgroundColor: "#ff8745",
        height: 45,
        width: 200,
        flexDirection: "row"
    },
    text:{
        fontSize: 18,
        marginBottom:10,
        marginTop:20,
        color: "#4f4f4f",
    }
});