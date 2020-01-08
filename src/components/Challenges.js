import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import { Container, Header, Content, ListItem, CheckBox, Text, Body } from 'native-base';
import ChallengeCard from './ChallengeCard';

export default class Challenges extends React.Component {

  constructor() {
    super();
    this.state = {

      c1: false,
      c2: false,
      c3: false,
      c4: false,
      c5: false,


      nc1: false,
      nc2: false,
      nc3: false,
      nc4: false,
      nc5: false
    }
  }
  cCount = 0;
  ncCount = 0;

  render() {
    return (
      <Container style={styles.container}>
        <Content >
          <View style={styles.checks}>
            <View style={styles.menu}>
              <Text style={styles.principalText}>
                Falar de Cristo para 5 não Cristãos
              </Text>
              <Text style={styles.pointsText}>
                {this.ncCount}/5
              </Text>
            </View>
            {this.props.nCristhian.map((nC, n) => {
              return (
                <TouchableHighlight key={n} style= {{marginBottom:5}}
                  onPress={check => { this.setState({ ['nc' + (n + 1)]: !this.state['nc' + (n + 1)] }); this.state['nc' + (n + 1)] ? this.ncCount-- : this.ncCount++ }}>
                  <ChallengeCard text={nC} checked={this.state['nc' + (n + 1)]}/>
                </TouchableHighlight>
              )
            })}
            <View style={styles.menu}>
              <Text style={styles.principalText}>Desafiar 5 Cristãos a fazer o mesmo</Text>
              <Text style={styles.pointsText}>{this.cCount}/5</Text>
            </View>
            {this.props.cristhian.map((c, n) => {
              return (
                <TouchableHighlight underlayColor="white" key={n} style= {{marginBottom:5}}
                  onPress={check => { this.setState({ ['c' + (n + 1)]: !this.state['c' + (n + 1)] }); this.state['c' + (n + 1)] ? this.cCount-- : this.cCount++ }}>
                  <ChallengeCard text={c} checked={this.state['c' + (n + 1)]}/>
                </TouchableHighlight>
              )
            })}
          </View>
        </Content>
      </Container>
    );
  }
}

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
    alignItems:"flex-end"
  }, 
  principalText:{
    color:"#4f4f4f",
    fontSize:16,
    marginBottom:4
  },
  pointsText:{
    color:"#527376",
    fontSize: 30,
    fontWeight: 'bold',
  }
});