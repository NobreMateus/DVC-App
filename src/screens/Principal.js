import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Drawer, Button, Left, Body } from 'native-base';
import DVCForm from '../components/DVCFom';
import Challenges from '../components/Challenges';
import Info from '../components/Info';
import AllFormsDone from '../components/AllFormsDone';
import NoDVCData from '../components/NoDVCData'
import * as firebaseServices from '../services/firebaseServices'
import { setData, setStartData } from '../store/actions/data';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';

class Principal extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      isModalVisible: false,
    };
  }


  logoutFunction(){
    this.props.navigation.navigate('Login');
  }

  async componentDidMount(){
    let data = await firebaseServices.getDVCData();

    await this.props.setStartData({...data});
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    // console.log(this.state);
    // console.log("RENDER")
    return (
      <Container style={styles.container}>
        {/* <Tabs>
          <Tab heading={<TabHeading style={styles.tabStyle}><Text style={styles.textTabStyle}>DVC</Text></TabHeading>} >
            <DVCForm />
          </Tab>
          <Tab heading={<TabHeading style={styles.tabStyle}><Text style={styles.textTabStyle}>Desafios</Text></TabHeading>}>
            <AllFormsDone navigate={this.props.navigation.navigate} />
          </Tab>
          <Tab heading={<TabHeading style={styles.tabStyle}><Text style={styles.textTabStyle}>Instruções</Text></TabHeading>}>
            <Info navigate={this.props.navigation.navigate} />
          </Tab>
        </Tabs> */}
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.toggleDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Text>Header</Text>
          </Body>
        </Header>
        <View style={styles.estatsAreas}>
          <Text>Estatistica</Text>
          <Button onPress={() => this.toggleModal()} >
            <Text>Adicionar Novo DVC</Text>
          </Button>
        </View>
        <View style={styles.dvcsArea}>
          <AllFormsDone></AllFormsDone>
        </View>
        <Modal isVisible={this.state.isModalVisible}
          testID={'modal'}
          onSwipeComplete={this.close}
          swipeDirection={['down']}
          style={styles.view}
          onBackdropPress={()=>this.setState({isModalVisible:false})}
        >
          <View style={styles.content}>
            <Text style={styles.contentTitle}>Hi 👋!</Text>
            <Button testID={'close-button'} title="Close" />
          </View>
        </Modal>
      </Container>
    )
  }

}

const mapStateToProps = ({data}) => {
  return {
    data: data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setStartData: data => dispatch(setStartData(data))
  }  
}

export default connect(mapStateToProps, mapDispatchToProps)(Principal)


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#a8c5c8',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  tabStyle: {
    backgroundColor: "#f8a26c"
  },
  textTabStyle: {
    color: "#fff"
  },

  estatsAreas: {
    backgroundColor: "red",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  dvcsArea: {
    flex: 2
  },
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },


});