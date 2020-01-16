import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Textarea, Button } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class DVCForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editMode: true,
            name: "",
            phone: "",
            university: "",
            vision: "",
            change: "",
            promise: "",
            order: "",
            cristhian: {
                c1: "",
                c2: "",
                c3: "",
                c4: "",
                c5: "",
            },
            ncristhian: {
                c1: "",
                c2: "",
                c3: "",
                c4: "",
                c5: "",
            }
        }
    }

    _scrollToInput(reactNode) {
        // Add a 'scroll' ref to your ScrollView
        this.scroll.props.scrollToFocusedInput(reactNode, 220)
    }

    render() {
        return (
            <Container style={styles.container}>
                <KeyboardAwareScrollView
                    innerRef={ref => {
                        this.scroll = ref
                    }}>
                    <Form style={{ ...styles.form, marginTop: 15 }}>

                        {this.state['editMode'] ? null :
                            <Button light onPress={() => this.enableEditForm()} style={styles.button}><Text style={{ ...styles.textButton, color: "#a8c5c8" }} > Editar </Text></Button>}

                        <View style={styles.input} >
                            <Label style={styles.labelStyle}>Nome</Label>
                            <Input onFocus={event => this._scrollToInput(event.target)} style={styles.textInput} value={this.state['name']} onChangeText={t => this.setState({ name: t })} disabled={!this.state['editMode']} />
                        </View>

                        <View style={styles.input} >
                            <Label style={styles.labelStyle}>Telefone</Label>
                            <Input onFocus={event => this._scrollToInput(event.target)} style={styles.textInput} value={this.state['phone']} onChangeText={t => this.setState({ phone: t })} disabled={!this.state['editMode']} />
                        </View>

                        <View style={styles.input} >
                            <Label style={styles.labelStyle}>Universidade</Label>
                            <Input onFocus={event => this._scrollToInput(event.target)} style={styles.textInput} value={this.state['university']} onChangeText={t => this.setState({ university: t })} disabled={!this.state['editMode']} />
                        </View>

                        <View style={styles.input} >
                            <Label style={styles.labelStyle}>Qual é a sua visão?</Label>
                            <Textarea onFocus={(event) => {
                                this._scrollToInput(event.target)
                            }} rowSpan={5} bordered style={styles.bigTextInput} value={this.state['vision']} onChangeText={t => this.setState({ vision: t })} disabled={!this.state['editMode']} />
                        </View>

                        <View style={styles.input} >
                            <Label style={styles.labelStyle}>Qual a mudança você deseja ver no seu Campus?</Label>
                            <Textarea onFocus={event => this._scrollToInput(event.target)} rowSpan={5} bordered style={styles.bigTextInput} value={this.state['change']} onChangeText={t => this.setState({ change: t })} disabled={!this.state['editMode']} />
                        </View>

                        <View style={styles.input} >
                            <Label style={styles.labelStyle}>Leia <Text style={{color:"#ff8745"}}>Mateus 28.18-20</Text>. O que Jesus promete?</Label>
                            <Textarea onFocus={event => this._scrollToInput(event.target)} rowSpan={5} bordered style={styles.bigTextInput} value={this.state['promise']} onChangeText={t => this.setState({ promise: t })} disabled={!this.state['editMode']} />
                            <Text ><Text style={{color:"#ff8745"}}>Ir</Text> - Ganhar</Text>
                            <Text ><Text style={{color:"#ff8745"}}>Fazer discípulos</Text> - Edificar</Text>
                            <Text ><Text style={{color:"#ff8745"}}>Todas as nações</Text> -  Enviar</Text>
                        </View>

                        <View style={styles.input} >
                            <Label style={styles.labelStyle}>Leia <Text style={{color:"#ff8745"}}>2 Timóteo 2.2</Text>. O que Paulo está dizendo?</Label>
                            <Textarea onFocus={event => this._scrollToInput(event.target)} rowSpan={5} bordered style={styles.bigTextInput} value={this.state['order']} onChangeText={t => this.setState({ order: t })} disabled={!this.state['editMode']} />
                        </View>

                        <View style={styles.input} >
                            <Label style={{...styles.labelStyle, ...styles.input}}>Liste 5 cristãos para fazerem o DVC:</Label>
                            <View style={styles.input}>
                                <Input onFocus={event => this._scrollToInput(event.target)} style={styles.textInput} value={this.state['cristhian']['c1']} onChangeText={t => this.setState({ cristhian: { ...this.state['cristhian'], c1: t } })} disabled={!this.state['editMode']} />
                            </View>
                            <View style={styles.input}>
                                <Input onFocus={event => this._scrollToInput(event.target)} style={styles.textInput} value={this.state['cristhian']['c2']} onChangeText={t => this.setState({ cristhian: { ...this.state['cristhian'], c2: t } })} disabled={!this.state['editMode']} />
                            </View>
                            <View style={styles.input}>
                                <Input onFocus={event => this._scrollToInput(event.target)} style={styles.textInput} value={this.state['cristhian']['c3']} onChangeText={t => this.setState({ cristhian: { ...this.state['cristhian'], c3: t } })} disabled={!this.state['editMode']} />
                            </View>
                            <View style={styles.input}>
                                <Input onFocus={event => this._scrollToInput(event.target)} style={styles.textInput} value={this.state['cristhian']['c4']} onChangeText={t => this.setState({ cristhian: { ...this.state['cristhian'], c4: t } })} disabled={!this.state['editMode']} />
                            </View>
                            <View style={styles.input}>
                                <Input onFocus={event => this._scrollToInput(event.target)} style={styles.textInput} value={this.state['cristhian']['c5']} onChangeText={t => this.setState({ cristhian: { ...this.state['cristhian'], c5: t } })} disabled={!this.state['editMode']} />
                            </View>
                        </View>

                        <View style={styles.input} >
                            <Label style={{...styles.labelStyle, ...styles.input}}>Liste 5 não cristãos para evangelizar:</Label>
                            <View style={styles.input}>
                                <Input onFocus={event => this._scrollToInput(event.target)} style={styles.textInput} value={this.state['ncristhian']['c1']} onChangeText={t => this.setState({ ncristhian: { ...this.state['ncristhian'], c1: t } })} disabled={!this.state['editMode']} />
                            </View>
                            <View style={styles.input}>
                                <Input onFocus={event => this._scrollToInput(event.target)} style={styles.textInput} value={this.state['ncristhian']['c2']} onChangeText={t => this.setState({ ncristhian: { ...this.state['ncristhian'], c2: t } })} disabled={!this.state['editMode']} />
                            </View>
                            <View style={styles.input}>
                                <Input onFocus={event => this._scrollToInput(event.target)} style={styles.textInput} value={this.state['ncristhian']['c3']} onChangeText={t => this.setState({ ncristhian: { ...this.state['ncristhian'], c3: t } })} disabled={!this.state['editMode']} />
                            </View>
                            <View style={styles.input}>
                                <Input onFocus={event => this._scrollToInput(event.target)} style={styles.textInput} value={this.state['ncristhian']['c4']} onChangeText={t => this.setState({ ncristhian: { ...this.state['ncristhian'], c4: t } })} disabled={!this.state['editMode']} />
                            </View>
                            <View style={styles.input}>
                                <Input onFocus={(event) => {
                                    this._scrollToInput(event.target)
                                }} style={styles.textInput} value={this.state['ncristhian']['c5']} onChangeText={t => this.setState({ ncristhian: { ...this.state['ncristhian'], c5: t } })} disabled={!this.state['editMode']} />
                            </View>
                        </View>

                        {this.state['editMode'] ?
                            <Button primary onPress={() => { this.saveData() }} style={{ ...styles.button, color: "#f8a26c", marginBottom: 200 }}><Text style={styles.textButton} > Salvar </Text></Button>
                            : null}

                    </Form>
                </KeyboardAwareScrollView>
            </Container>
        );
    }

    saveData() {
        this.setState({ editMode: false });
        this.props.changeNames(this.state);
    }

    enableEditForm() {
        this.setState({ editMode: true });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // paddingHorizontal: '5%',
        backgroundColor: '#a8c5c8',
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
        borderRadius: 25,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 16
    },

    bigTextInput: {
        backgroundColor: "#fff",
        borderRadius: 25,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15,
        fontSize: 16
    },

    textButton: {
        color: "#fff",
        fontSize: 20
    },
    
    labelStyle:{
        color:"#4f4f4f",
        marginBottom:5
    },

    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,
        borderRadius: 25,
        marginHorizontal: 35,
        height: 45,
        backgroundColor: "#ff8745"
    }
});