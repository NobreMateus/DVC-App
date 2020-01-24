import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Container, Header, Content, ListItem, CheckBox, Text, Body } from 'native-base';
import ChallengeCard from './ChallengeCard';
import * as firebaseServices from '../services/firebaseServices'

export default class Challenges extends React.Component {

  cCount = 0;
  ncCount = 0;
  cStrings = ['c1', 'c2', 'c3', 'c4', 'c5']
  ncStrings = ['nc1', 'nc2', 'nc3', 'nc4', 'nc5']
  

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
            {this.ncStrings.map((c, n)=>{
              return (
                <TouchableOpacity key={n} style={{ marginBottom: 5 }}
                  onPress={check => this.props.markFunction(check, "ncristhian/"+c.substr(1,2) )}
                  >
                  <ChallengeCard text={this.props['data'][c]['name']} checked={this.props['data']['done']} />
                </TouchableOpacity>
              )
            })}

            {/* {this.props.nCristhian.map((nC, n) => {
              return (
                <TouchableOpacity key={n} style={{ marginBottom: 5 }}
                  onPress={check => { this.setState({ ['nc' + (n + 1)]: !this.state['nc' + (n + 1)] }); this.state['nc' + (n + 1)] ? this.ncCount-- : this.ncCount++ }}>
                  <ChallengeCard text={nC} checked={this.state['nc' + (n + 1)]} />
                </TouchableOpacity>
              )
            })} */}

            <View style={styles.menu}>
              <Text style={styles.principalText}>Desafiar 5 Cristãos a fazer o mesmo</Text>
              <Text style={styles.pointsText}>{this.cCount}/5</Text>
            </View>
            
            {this.cStrings.map((nc, n)=>{
              return (
                <TouchableOpacity key={n} style={{ marginBottom: 5 }}
                  // onPress={check => { this.setState({ ['nc' + (n + 1)]: !this.state['nc' + (n + 1)] }); this.state['nc' + (n + 1)] ? this.ncCount-- : this.ncCount++ }}
                  >
                  <ChallengeCard text={this.props['data'][nc]['name']} checked={this.props['data'][nc]['done']} />
                </TouchableOpacity>
              )
            })}  

            {/* {this.props.cristhian.map((c, n) => {
              return (
                <TouchableOpacity key={n} style={{ marginBottom: 5 }}
                  onPress={check => { this.setState({ ['c' + (n + 1)]: !this.state['c' + (n + 1)] }); this.state['c' + (n + 1)] ? this.cCount-- : this.cCount++ }}>
                  <ChallengeCard text={c} checked={this.state['c' + (n + 1)]} />
                </TouchableOpacity>
              )
            })} */}
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
    alignItems: "flex-end"
  },
  principalText: {
    color: "#4f4f4f",
    fontSize: 16,
    marginBottom: 4
  },
  pointsText: {
    color: "#527376",
    fontSize: 30,
    fontWeight: 'bold',
  }
});