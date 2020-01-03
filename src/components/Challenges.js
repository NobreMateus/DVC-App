import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Content, ListItem, CheckBox, Text, Body } from 'native-base';

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
  cCount= 0;
  ncCount= 0;
  
  render() {
    return (
      <Container style={styles.container}>
        <Content >
        <View style={styles.checks}>
          <Text>Falar de Cristo para 5 não Cristãos</Text>
          <Text>{this.ncCount}/5</Text>
          {this.props.nCristhian.map((nC, n)=> {
            return (
              <ListItem key={n}>
                <CheckBox checked={this.state['nc'+(n+1)]} onPress={check => {this.setState({ ['nc'+(n+1)]: !this.state['nc'+(n+1)] }); this.state['nc'+(n+1)]?this.ncCount--: this.ncCount++ }} />
                <Body>
                  <Text>{nC}</Text>
                </Body>
              </ListItem>
            )
          })}

          <Text>Desafiar 5 Cristãos a fazer o mesmo</Text>
          <Text>{this.cCount}/5</Text>
          {this.props.cristhian.map((c, n)=> {
            return (
              <ListItem key={n}>
                <CheckBox checked={this.state['c'+(n+1)]} onPress={check => {this.setState({ ['c'+(n+1)]: !this.state['c'+(n+1)] }); this.state['c'+(n+1)]?this.cCount--: this.cCount++ } } />
                <Body>
                  <Text>{c}</Text>
                </Body>
              </ListItem>
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
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  checks:{
    marginHorizontal: "5%"
  }
});