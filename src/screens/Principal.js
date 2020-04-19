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

  constructor(props) {
    super(props)
    this.state = {
      isModalVisible: false,
    };
  }


  logoutFunction() {
    this.props.navigation.navigate('Login');
  }

  async componentDidMount() {
    let data = await firebaseServices.getDVCData();

    await this.props.setStartData({ ...data });
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  logout = () => {
    firebaseServices.logout();
  };

  render() {
    return (
      <Container>

        <Header style={{ backgroundColor: "#045066" }}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.toggleDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Text>Header</Text>
          </Body>
        </Header>

        <Container style={styles.container}>
          <View style={styles.principalArea}>
            <View style={styles.statsArea}>
              <Text style={{ fontSize: 48 }} >4</Text>
              <Text style={{ fontSize: 14, textAlign: "center" }}>{`DVC\nPreenchidos`}</Text>
            </View>

            <Button
              onPress={() => this.props.navigation.navigate('Adicionar DVC')}
              style={styles.mainButton}>
              <Text style={{ color: "#fff" }} >Adicionar Novo DVC</Text>
            </Button>

            <View style={{ width: "100%" }}>
              <Text style={styles.dvcHeader} >DVC Preenchidos</Text>
            </View>
          </View>
        </Container>
        <View style={styles.dvcsArea}>
          <AllFormsDone></AllFormsDone>
        </View>
        {/* <Modal isVisible={this.state.isModalVisible}
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
        </Modal> */}

      </Container>
    )
  }

}

const mapStateToProps = ({ data }) => {
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
    paddingHorizontal: "4%"
  },
  principalArea: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  dvcsArea: {
    flex: 1,
    paddingHorizontal:0
  },
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },

  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },

  mainButton: {
    height: 40,
    backgroundColor: "#EE6352",
    borderRadius: 5,
    width: "100%",
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 0,

    elevation: 8,
  },
  dvcHeader: {
    // height: 30,
    marginTop:"6%",
    fontSize: 20,
    width: "100%",
    alignSelf: "flex-start",
    paddingBottom: "1%",
    borderColor: "#C4C4C4",
    borderBottomWidth: 2,
    marginBottom: 0,
    fontWeight: "bold"
  },
  statsArea: {
    marginTop: "4%",
    marginBottom: "4%",
    height: 128,
    width: 128,
    borderColor: "#000",
    borderRadius: 15,
    borderWidth: 2,
    backgroundColor:"#fff",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#045066",
    shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: .25,
        shadowRadius: 0,

        elevation: 6,
  }


});