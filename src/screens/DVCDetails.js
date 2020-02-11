import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Textarea, Button, Icon } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as firebaseServices from '../services/firebaseServices';
import { StackActions, NavigationActions } from 'react-navigation';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';
import { setData } from '../store/actions/data';

class DVCDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            name: "",
            phone: "",
            university: "",
            vision: "",
            change: "",
            promise: "",
            order: "",
            cristhian: {
                c1: {
                    name: '',
                    done: false
                },
                c2: {
                    name: '',
                    done: false
                },
                c3: {
                    name: '',
                    done: false
                },
                c4: {
                    name: '',
                    done: false
                },
                c5: {
                    name: '',
                    done: false
                },
            },
            ncristhian: {
                c1: {
                    name: '',
                    done: false
                },
                c2: {
                    name: '',
                    done: false
                },
                c3: {
                    name: '',
                    done: false
                },
                c4: {
                    name: '',
                    done: false
                },
                c5: {
                    name: '',
                    done: false
                },
            },
            spinner: true,
        }
    }

    _scrollToInput(reactNode) {
        // Add a 'scroll' ref to your ScrollView
        this.scroll.props.scrollToFocusedInput(reactNode, 220)
    }

    componentDidMount(){
        console.log(this.props.navigation.state.params.key);
        this.setState({
            ...this.props['data']['forms'][this.props.navigation.state.params.key],
            spinner: false,
        })
    }

    render() {
        return (
            <Container style={styles.container}>
                <Spinner
                    visible={this.state.spinner}
                    textContent={'Carregando...'}
                    textStyle={styles.spinnerTextStyle}
                />
                <KeyboardAwareScrollView
                    innerRef={ref => {
                        this.scroll = ref
                    }}>
                    <Form style={{ ...styles.form, marginTop: 15 }}>

                        {this.state['editMode'] ? null :
                            <TouchableOpacity onPress={() => this.enableEditForm()} style={styles.editButton}><Icon name='create' style={{ color: "#FFF" }} /></TouchableOpacity>}

                        <View style={styles.input} >
                            <Label style={styles.labelStyle}>Nome</Label>
                            <Input onFocus={event => this._scrollToInput(event.target)} style={styles.textInput} value={this.state['name']} onChangeText={t => this.setState({ name: t })} disabled={!this.state['editMode']} />
                        </View>

                        <View style={styles.input} >
                            <Label style={styles.labelStyle}>Telefone</Label>
                            <Input onFocus={event => this._scrollToInput(event.target)} style={styles.textInput} value={this.state['phone']} onChangeText={t => this.setState({ phone: t })} disabled={!this.state['editMode']} />
                        </View>
                        <View style={styles.input} >
                            <Label style={styles.labelStyle}>E-mail</Label>
                            <Input onFocus={event => this._scrollToInput(event.target)} style={styles.textInput} value={this.state['vision']} onChangeText={t => this.setState({ vision: t })} disabled={!this.state['editMode']} />
                        </View>

                        <View style={styles.input} >
                            <Label style={styles.labelStyle}>Universidade</Label>
                            <Input onFocus={event => this._scrollToInput(event.target)} style={styles.textInput} value={this.state['university']} onChangeText={t => this.setState({ university: t })} disabled={!this.state['editMode']} />
                        </View>

                        {/* <View style={styles.input} >
                            <Label style={styles.labelStyle}>Qual é a sua visão?</Label>
                            <Textarea onFocus={(event) => {
                                this._scrollToInput(event.target)
                            }} rowSpan={5} bordered style={styles.bigTextInput} value={this.state['vision']} onChangeText={t => this.setState({ vision: t })} disabled={!this.state['editMode']} />
                        </View> */}

                        <View style={styles.input} >
                            <Label style={styles.labelStyle}>Qual sua visão? Qual a mudança você deseja ver no seu Campus?</Label>
                            <Textarea onFocus={event => this._scrollToInput(event.target)} rowSpan={5} bordered style={styles.bigTextInput} value={this.state['change']} onChangeText={t => this.setState({ change: t })} disabled={!this.state['editMode']} />
                        </View>

                        <View style={styles.input} >
                            <Label style={styles.labelStyle}>Leia <Text style={{ color: "#ff8745" }}>Mateus 28.18-20</Text>. O que Jesus promete?</Label>
                            <Textarea onFocus={event => this._scrollToInput(event.target)} rowSpan={5} bordered style={styles.bigTextInput} value={this.state['promise']} onChangeText={t => this.setState({ promise: t })} disabled={!this.state['editMode']} />
                            <Text ><Text style={{ color: "#ff8745" }}>Ir</Text> - Ganhar</Text>
                            <Text ><Text style={{ color: "#ff8745" }}>Fazer discípulos</Text> - Edificar</Text>
                            <Text ><Text style={{ color: "#ff8745" }}>Todas as nações</Text> -  Enviar</Text>
                        </View>

                        <View style={styles.input} >
                            <Label style={styles.labelStyle}>Leia <Text style={{ color: "#ff8745" }}>2 Timóteo 2.2</Text>. O que Paulo está dizendo?</Label>
                            <Textarea onFocus={event => this._scrollToInput(event.target)} rowSpan={5} bordered style={styles.bigTextInput} value={this.state['order']} onChangeText={t => this.setState({ order: t })} disabled={!this.state['editMode']} />
                        </View>

                        <View style={styles.input} >
                            <Label style={{ ...styles.labelStyle, ...styles.input }}>Liste 5 cristãos para fazerem o DVC:</Label>
                            <View style={styles.input}>
                                <Input onFocus={event => this._scrollToInput(event.target)} style={styles.textInput} value={this.state['cristhian']['c1']['name']} onChangeText={t => this.setState({ cristhian: { ...this.state['cristhian'], c1: { name: t, done: this.state['ncristhian']['c1']['done'] } } })} disabled={!this.state['editMode']} />
                            </View>
                            <View style={styles.input}>
                                <Input onFocus={event => this._scrollToInput(event.target)} style={styles.textInput} value={this.state['cristhian']['c2']['name']} onChangeText={t => this.setState({ cristhian: { ...this.state['cristhian'], c2: { name: t, done: this.state['ncristhian']['c2']['done'] } } })} disabled={!this.state['editMode']} />
                            </View>
                            <View style={styles.input}>
                                <Input onFocus={event => this._scrollToInput(event.target)} style={styles.textInput} value={this.state['cristhian']['c3']['name']} onChangeText={t => this.setState({ cristhian: { ...this.state['cristhian'], c3: { name: t, done: this.state['ncristhian']['c3']['done'] } } })} disabled={!this.state['editMode']} />
                            </View>
                            <View style={styles.input}>
                                <Input onFocus={event => this._scrollToInput(event.target)} style={styles.textInput} value={this.state['cristhian']['c4']['name']} onChangeText={t => this.setState({ cristhian: { ...this.state['cristhian'], c4: { name: t, done: this.state['ncristhian']['c4']['done'] } } })} disabled={!this.state['editMode']} />
                            </View>
                            <View style={styles.input}>
                                <Input onFocus={event => this._scrollToInput(event.target)} style={styles.textInput} value={this.state['cristhian']['c5']['name']} onChangeText={t => this.setState({ cristhian: { ...this.state['cristhian'], c5: { name: t, done: this.state['ncristhian']['c5']['done'] } } })} disabled={!this.state['editMode']} />
                            </View>
                        </View>

                        <View style={styles.input} >
                            <Label style={{ ...styles.labelStyle, ...styles.input }}>Liste 5 não cristãos para evangelizar:</Label>
                            <View style={styles.input}>
                                <Input onFocus={event => this._scrollToInput(event.target)} style={styles.textInput} value={this.state['ncristhian']['c1']['name']} onChangeText={t => this.setState({ ncristhian: { ...this.state['ncristhian'], c1: { name: t, done: this.state['ncristhian']['c1']['done'] } } })} disabled={!this.state['editMode']} />
                            </View>
                            <View style={styles.input}>
                                <Input onFocus={event => this._scrollToInput(event.target)} style={styles.textInput} value={this.state['ncristhian']['c2']['name']} onChangeText={t => this.setState({ ncristhian: { ...this.state['ncristhian'], c2: { name: t, done: this.state['ncristhian']['c2']['done'] } } })} disabled={!this.state['editMode']} />
                            </View>
                            <View style={styles.input}>
                                <Input onFocus={event => this._scrollToInput(event.target)} style={styles.textInput} value={this.state['ncristhian']['c3']['name']} onChangeText={t => this.setState({ ncristhian: { ...this.state['ncristhian'], c3: { name: t, done: this.state['ncristhian']['c3']['done'] } } })} disabled={!this.state['editMode']} />
                            </View>
                            <View style={styles.input}>
                                <Input onFocus={event => this._scrollToInput(event.target)} style={styles.textInput} value={this.state['ncristhian']['c4']['name']} onChangeText={t => this.setState({ ncristhian: { ...this.state['ncristhian'], c4: { name: t, done: this.state['ncristhian']['c4']['done'] } } })} disabled={!this.state['editMode']} />
                            </View>
                            <View style={styles.input}>
                                <Input onFocus={(event) => {
                                    this._scrollToInput(event.target)
                                }} style={styles.textInput} value={this.state['ncristhian']['c5']['name']} onChangeText={t => this.setState({ ncristhian: { ...this.state['ncristhian'], c5: { name: t, done: this.state['ncristhian']['c5']['done'] } } })} disabled={!this.state['editMode']} />
                            </View>
                        </View>

                        {this.state['editMode'] ?
                            <TouchableOpacity primary onPress={() => { this.saveData() }} style={{ ...styles.button, color: "#f8a26c", marginBottom: 200 }}><Text style={styles.textButton} > Salvar </Text></TouchableOpacity>
                            : 
                            <TouchableOpacity primary onPress={() => { this.enableEditForm() }} style={{ ...styles.button, color: "#f8a26c", marginBottom: 200 }}><Text style={styles.textButton} > Editar </Text></TouchableOpacity>
                        }

                    </Form>
                </KeyboardAwareScrollView>
            </Container>
        );
    }

    async saveData() {
        // let formId = new Date().getTime();
        await this.setState({ editMode: false });
        await this.props.setData({
            name: this.state['name'],
            phone: this.state['phone'],
            university: this.state['university'],
            vision: this.state['vision'],
            change: this.state['change'],
            promise: this.state['promise'],
            order: this.state['order'],
            cristhian: {
                c1: {
                    name: this.state['cristhian']['c1']['name'],
                    done: this.props.data['ncristhian']?this.props.data['cristhian']['c1']['done']:false
                },
                c2: {
                    name: this.state['cristhian']['c2']['name'],
                    done: this.props.data['ncristhian']?this.props.data['cristhian']['c2']['done']:false
                },
                c3: {
                    name: this.state['cristhian']['c3']['name'],
                    done: this.props.data['ncristhian']?this.props.data['cristhian']['c3']['done']:false
                },
                c4: {
                    name: this.state['cristhian']['c4']['name'],
                    done: this.props.data['ncristhian']?this.props.data['cristhian']['c4']['done']:false
                },
                c5: {
                    name: this.state['cristhian']['c5']['name'],
                    done: this.props.data['ncristhian']?this.props.data['cristhian']['c5']['done']:false
                },
            },    
            ncristhian: {
                c1: {
                    name: this.state['ncristhian']['c1']['name'],
                    done: this.props.data['ncristhian']?this.props.data['ncristhian']['c1']['done']:false
                },
                c2: {
                    name: this.state['ncristhian']['c2']['name'],
                    done: this.props.data['ncristhian']?this.props.data['ncristhian']['c2']['done']:false
                },
                c3: {
                    name: this.state['ncristhian']['c3']['name'],
                    done: this.props.data['ncristhian']?this.props.data['ncristhian']['c3']['done']:false
                },
                c4: {
                    name: this.state['ncristhian']['c4']['name'],
                    done: this.props.data['ncristhian']?this.props.data['ncristhian']['c4']['done']:false
                },
                c5: {
                    name: this.state['ncristhian']['c5']['name'],
                    done: this.props.data['ncristhian']?this.props.data['ncristhian']['c5']['done']:false
                },
            },
            formId: this.props.navigation.state.params.key,
        })

        try{
            await firebaseServices.addDVCForm(this.state, this.props.navigation.state.params.key);
        }catch(e){
            alert(e)
        }
    
        // await this.setState({
        //     editMode: true,
        //     name: "",
        //     phone: "",
        //     university: "",
        //     vision: "",
        //     change: "",
        //     promise: "",
        //     order: "",
        //     cristhian: {
        //         c1: {
        //             name: '',
        //             done: false
        //         },
        //         c2: {
        //             name: '',
        //             done: false
        //         },
        //         c3: {
        //             name: '',
        //             done: false
        //         },
        //         c4: {
        //             name: '',
        //             done: false
        //         },
        //         c5: {
        //             name: '',
        //             done: false
        //         },
        //     },
        //     ncristhian: {
        //         c1: {
        //             name: '',
        //             done: false
        //         },
        //         c2: {
        //             name: '',
        //             done: false
        //         },
        //         c3: {
        //             name: '',
        //             done: false
        //         },
        //         c4: {
        //             name: '',
        //             done: false
        //         },
        //         c5: {
        //             name: '',
        //             done: false
        //         },
        //     },
        // })

    }

    enableEditForm() {
        this.setState({ editMode: true });
        // console.log(this.props['data'])
    }
}

const mapStateToProps = ({ data }) => {
    return {
        data: {
            ...data
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setData: data => dispatch(setData(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DVCDetails);

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

    labelStyle: {
        color: "#4f4f4f",
        marginBottom: 5
    },

    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,
        borderRadius: 25,
        marginHorizontal: 35,
        height: 45,
        backgroundColor: "#ff8745",
    },
    spinnerTextStyle: {
        color: "#FFF"
    },
    editButton: {
        alignSelf: "flex-end",
        alignItems: "flex-end",
        // height: 25,
        padding: 5,
        width: 60,
        marginBottom: 10,
    }
});