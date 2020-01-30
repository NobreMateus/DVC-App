import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import DVCForm from '../components/DVCFom';
import Challenges from '../components/Challenges';
import Info from '../components/Info';
import NoDVCData from '../components/NoDVCData'
import * as firebaseServices from '../services/firebaseServices'
import { setData } from '../store/actions/data';
import { connect } from 'react-redux';


class Principal extends React.Component {


  logoutFunction(){
    this.props.navigation.navigate('Login');
  }

  async componentDidMount(){
    let data = await firebaseServices.getDVCData();
    this.props.setData({...data});
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
            {this.props.name?<Challenges /> : <NoDVCData />}
          </Tab>
          <Tab heading={<TabHeading style={styles.tabStyle}><Text style={styles.textTabStyle}>Informações</Text></TabHeading>}>
            <Info navigate={this.props.navigation.navigate} />
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

const mapDispatchToProps = dispatch => {
  return {
    setData: data => dispatch(setData(data))
  }  
}

export default connect(mapStateToProps, mapDispatchToProps)(Principal)


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