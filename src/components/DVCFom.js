import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Textarea, Button } from 'native-base';

export default class DVCForm extends React.Component {

    constructor(props){
        super(props);
        this.state={
            editMode:true,

            name: "",
            phone: "",
            university:"",
            vision:"",
            change:"",
            promise:"",
            order:"",
            cristhian:{
                c1:"",
                c2:"",
                c3:"",
                c4:"",
                c5:"",
            },
            ncristhian:{
                c1:"",
                c2:"",
                c3:"",
                c4:"",
                c5:"",
            }
        }
    }
    
    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <Form style={{ ...styles.form, marginTop: 15 }}>
                        {this.state['editMode']?null:
                            <Button light style={styles.button}><Text style={{...styles.textButton, color:"#a8c5c8"}} onPress={()=>this.setState({editMode: true })}> Editar </Text></Button>}
                        <View style={styles.input} >
                            <Label>Nome</Label>
                            <Input style={styles.textInput} value={this.state['name']} onChangeText={t => this.setState({ name:t })} disabled={!this.state['editMode']} />
                        </View>
                        <View style={styles.input} >
                            <Label>Telefone</Label>
                            <Input style={styles.textInput} value={this.state['phone']} onChangeText={t => this.setState({ phone:t })} disabled={!this.state['editMode']} />
                        </View>
                        <View style={styles.input} > 
                            <Label>Universidade</Label>
                            <Input style={styles.textInput} value={this.state['university']} onChangeText={t => this.setState({ university:t })} disabled={!this.state['editMode']} />
                        </View>

                        <View style={styles.input} >
                            <Label>Qual é a sua visão?</Label>
                            <Textarea rowSpan={5} bordered style={styles.textInput} value={this.state['vision']} onChangeText={t => this.setState({ vision:t })} disabled={!this.state['editMode']}/>
                        </View>
                        <View style={styles.input} >
                            <Label>Qual a mudança você deseja ver no seu Campus?</Label>
                            <Textarea rowSpan={5} bordered style={styles.textInput} value={this.state['change']} onChangeText={t => this.setState({ change:t })} disabled={!this.state['editMode']}/>
                        </View>
                        <View style={styles.input} >
                            <Label>Leia Mateus 28.18-20. O que Jesus promete?</Label>
                            <Textarea rowSpan={5} bordered style={styles.textInput} value={this.state['promise']} onChangeText={t => this.setState({ promise:t })} disabled={!this.state['editMode']}/>
                        </View>
                        <View style={styles.input} >
                            <Label>Leia 2 Timóteo 2.2. O que Paulo está dizendo?</Label>
                            <Textarea rowSpan={5} bordered style={styles.textInput} value={this.state['order']} onChangeText={t => this.setState({ order:t })} disabled={!this.state['editMode']}/>
                        </View>
                        <View style={styles.input} >
                            <Label>Liste 5 cristãos para fazerem o DVC:</Label>
                            <Item regular>
                                <Input style={styles.textInput} value={this.state['cristhian']['c1']} onChangeText={t => this.setState({ cristhian: { ...this.state['cristhian'], c1: t }})} disabled={!this.state['editMode']}/>
                            </Item>
                            <Item regular>
                                <Input style={styles.textInput} value={this.state['cristhian']['c2']} onChangeText={t => this.setState({ cristhian:{ ...this.state['cristhian'], c2: t } })} disabled={!this.state['editMode']}/>
                            </Item>
                            <Item regular>
                                <Input style={styles.textInput} value={this.state['cristhian']['c3']} onChangeText={t => this.setState({ cristhian:{ ...this.state['cristhian'], c3: t } })} disabled={!this.state['editMode']}/>
                            </Item>
                            <Item regular>
                                <Input style={styles.textInput} value={this.state['cristhian']['c4']} onChangeText={t => this.setState({ cristhian:{ ...this.state['cristhian'], c4: t } })} disabled={!this.state['editMode']}/>
                            </Item>
                            <Item regular>
                                <Input style={styles.textInput} value={this.state['cristhian']['c5']} onChangeText={t => this.setState({ cristhian:{ ...this.state['cristhian'], c5: t } })} disabled={!this.state['editMode']}/>
                            </Item>
                        </View>
                        <View style={styles.input} >
                            <Label>Liste 5 não cristãos para evangelizar:</Label>
                            <Item regular>
                                <Input style={styles.textInput} value={this.state['ncristhian']['c1']} onChangeText={t => this.setState({ ncristhian: { ...this.state['ncristhian'], c1: t }})} disabled={!this.state['editMode']}  />
                            </Item><Item regular>
                                <Input style={styles.textInput} value={this.state['ncristhian']['c2']} onChangeText={t => this.setState({ ncristhian: { ...this.state['ncristhian'], c2: t }})} disabled={!this.state['editMode']}/>
                            </Item><Item regular>
                                <Input style={styles.textInput} value={this.state['ncristhian']['c3']} onChangeText={t => this.setState({ ncristhian: { ...this.state['ncristhian'], c3: t }})} disabled={!this.state['editMode']}/>
                            </Item><Item regular>
                                <Input style={styles.textInput} value={this.state['ncristhian']['c4']} onChangeText={t => this.setState({ ncristhian: { ...this.state['ncristhian'], c4: t }})} disabled={!this.state['editMode']}/>
                            </Item><Item regular>
                                <Input style={styles.textInput} value={this.state['ncristhian']['c5']} onChangeText={t => this.setState({ ncristhian: { ...this.state['ncristhian'], c5: t }})} disabled={!this.state['editMode']}/>
                            </Item>
                        </View>
                        {this.state['editMode']?
                            <Button primary style={{...styles.textButton, color:"#f8a26c"}}><Text style={styles.textButton} onPress={()=>{this.setState({editMode: false }); this.props.changeNames(this.state) }}> Salvar </Text></Button>
                            :null}
                    </Form>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // paddingHorizontal: '5%',
        backgroundColor: '#E5E5E5',
    },

    form: {
        paddingHorizontal: '5%',
    },

    input: {
        marginBottom: 15,
        // backgroundColor: "#fff"
    },
    textInput: {
        backgroundColor: "#fff",
        borderRadius:8
    },
    textButton: {
        color: "#fff",
        fontSize: 24
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,
        borderRadius: 8
    }
});