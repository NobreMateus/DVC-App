import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import DVCForm from '../components/DVCFom';
import Challenges from '../components/Challenges';
import * as firebaseServices from '../services/firebaseServices'

export default class Principal extends React.Component {

  constructor() {
    super();
    this.state = {
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


      nc1: {
        name: '',
        done: false
      },
      nc2: {
        name: '',
        done: false
      },
      nc3: {
        name: '',
        done: false
      },
      nc4: {
        name: '',
        done: false
      },
      nc5: {
        name: '',
        done: false
      },
    }
  }

  async componentWillMount() {
    if (await firebaseServices.DVCIsReady()) {
      await this.updateData();
    }
  }

  async updateData() {
    let data = await firebaseServices.getDVCData();
    this.setState({
      c1: data['cristhian']['c1'],
      c2: data['cristhian']['c2'],
      c3: data['cristhian']['c3'],
      c4: data['cristhian']['c4'],
      c5: data['cristhian']['c5'],

      nc1: data['ncristhian']['c1'],
      nc2: data['ncristhian']['c2'],
      nc3: data['ncristhian']['c3'],
      nc4: data['ncristhian']['c4'],
      nc5: data['ncristhian']['c5']
    })
  }

  render() {
    return (
      <Container style={styles.container}>
        <Tabs>
          <Tab heading={<TabHeading style={styles.tabStyle}><Text style={styles.textTabStyle}>DVC</Text></TabHeading>} >
            <DVCForm updateFunction = {this.updateData.bind(this)}  />
          </Tab>
          <Tab heading={<TabHeading style={styles.tabStyle}><Text style={styles.textTabStyle}>Desafios</Text></TabHeading>}>
            <Challenges data={this.state} />
          </Tab>
          <Tab heading={<TabHeading style={styles.tabStyle}><Text style={styles.textTabStyle}>Informações</Text></TabHeading>}>
            <Text>Informações da CRU</Text>
          </Tab>
        </Tabs>
      </Container>
    )
  }
}


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