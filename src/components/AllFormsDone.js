import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Container, Header, Content, ListItem, CheckBox, Text, Body } from 'native-base';
import ChallengeCard from './ChallengeCard';
import * as firebaseServices from '../services/firebaseServices'
import { connect } from 'react-redux';
import { setData } from '../store/actions/data';


class AllFormsDone extends React.Component {


    getAllFormsIds() {
        let allFormsIds = [];
        for (let id in this.props['data']['forms']) {
            allFormsIds.push(id);
        }
        let thisForm = this.props['data']['forms']
        let orderArray = allFormsIds.sort((a, b)=>{
            return (thisForm[a]['name'] > thisForm[b]['name']) ? 1: ((thisForm[b]['name'] > thisForm[a]['name'])? -1 :0);
        });
        return orderArray;
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content >
                    <View style={styles.checks}>
                        <View style={styles.menu}>
                            <Text style={styles.principalText}>
                                Todos os DVC já preenchidos
              </Text>
                        </View>
                        {this.getAllFormsIds().map((c, n) => {
                            let thisForm = this.props['data']['forms'][c]
                            return (
                                <TouchableOpacity key={n} style={{ marginBottom: 15 }} onPress={()=>this.props.navigate('DVCDetails', {key: c})} >
                                    <ChallengeCard name={thisForm['name']} university={thisForm['university']} phone={thisForm['phone']} />
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </Content>
            </Container>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(AllFormsDone);


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#a8c5c8',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    checks: {
        marginHorizontal: "5%"
    },
    menu: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        marginBottom: 10,
        alignItems: "flex-end"
    },
    principalText: {
        color: "#4f4f4f",
        fontSize: 20,
        marginBottom: 4
    },
    pointsText: {
        color: "#527376",
        fontSize: 30,
        fontWeight: 'bold',
    }
});