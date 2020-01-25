import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import DVCForm from '../components/DVCFom';
import Challenges from '../components/Challenges';
import * as firebaseServices from '../services/firebaseServices'
import { connect } from 'react-redux';

class Principal extends React.Component {

  logoutFunction(){
    this.props.navigation.navigate('Login');
  }

  render() {
    // console.log(this.state);
    // console.log("RENDER")
    return (
      <Container style={styles.container}>
        <Tabs>
          <Tab heading={<TabHeading style={styles.tabStyle}><Text style={styles.textTabStyle}>DVC</Text></TabHeading>} >
            <DVCForm />
          </Tab>
          <Tab heading={<TabHeading style={styles.tabStyle}><Text style={styles.textTabStyle}>Desafios</Text></TabHeading>}>
            <Challenges />
          </Tab>
          <Tab heading={<TabHeading style={styles.tabStyle}><Text style={styles.textTabStyle}>Informações</Text></TabHeading>}>
            <Text>Informações da CRU</Text>
          </Tab>
        </Tabs>
      </Container>
    )
  }
}

const mapStateToProps = ({data}) => {
  return {
    name: data.name
  }
} 

export default connect(mapStateToProps, null)(Principal)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a8c5c8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabStyle: {
    backgroundColor: "#f8a26c"
  },
  textTabStyle: {
    color: "#fff"
  }

});