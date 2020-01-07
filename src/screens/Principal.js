import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import DVCForm from '../components/DVCFom';
import Challenges from '../components/Challenges';

export default class Principal extends React.Component {
  
  constructor(){
    super();
    this.state={
      cristhian: [],
      nCristhian: []
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Tabs>
          <Tab heading={<TabHeading style={styles.tabStyle}><Text style={styles.textTabStyle}>DVC</Text></TabHeading>} >
            <DVCForm changeNames={this.changeName.bind(this)} /> 
          </Tab>
          <Tab heading={<TabHeading style={styles.tabStyle}><Text style={styles.textTabStyle}>Desafios</Text></TabHeading>}>
            <Challenges cristhian={this.state['cristhian']} nCristhian={this.state['nCristhian']}  />
          </Tab>
          <Tab heading={<TabHeading style={styles.tabStyle}><Text style={styles.textTabStyle}>Informações</Text></TabHeading>}>
            <Text>Informações da CRU</Text> 
          </Tab>
        </Tabs>
      </Container>
    )
  }
  
  changeName(state) {
    this.setState(
      { 
        cristhian: [state.cristhian['c1'], state.cristhian['c2'], state.cristhian['c3'], state.cristhian['c4'], state.cristhian['c5']],
        nCristhian: [state.ncristhian['c1'], state.ncristhian['c2'], state.ncristhian['c3'], state.ncristhian['c4'], state.ncristhian['c5']]
      }
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#666699',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabStyle:{
    backgroundColor: "#f8a26c"
  },
  textTabStyle:{
    color: "#fff"
  }

});