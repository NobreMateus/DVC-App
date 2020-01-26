import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Container, Header, Content, ListItem, CheckBox, Text, Body } from 'native-base';
import ChallengeCard from './ChallengeCard';
import * as firebaseServices from '../services/firebaseServices'
import { connect } from 'react-redux';
import { setData } from '../store/actions/data';


class Challenges extends React.Component {

  cCount = 0;
  ncCount = 0;
  cStrings = ['c1', 'c2', 'c3', 'c4', 'c5']
  ncStrings = ['nc1', 'nc2', 'nc3', 'nc4', 'nc5']

  cristhianCount() {
    let start = 0;
    this.props['data']['cristhian']['c1']['done'] ? start++ : null;
    this.props['data']['cristhian']['c2']['done'] ? start++ : null;
    this.props['data']['cristhian']['c3']['done'] ? start++ : null;
    this.props['data']['cristhian']['c4']['done'] ? start++ : null;
    this.props['data']['cristhian']['c5']['done'] ? start++ : null;
    return start;
  }

  ncristhianCount(){
    let start = 0;
    this.props['data']['ncristhian']['c1']['done'] ? start++ : null;
    this.props['data']['ncristhian']['c2']['done'] ? start++ : null;
    this.props['data']['ncristhian']['c3']['done'] ? start++ : null;
    this.props['data']['ncristhian']['c4']['done'] ? start++ : null;
    this.props['data']['ncristhian']['c5']['done'] ? start++ : null;
    return start;
  }

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
                {this.ncristhianCount()}/5
              </Text>
            </View>
            {this.cStrings.map((c, n) => {
              return (
                <TouchableOpacity key={n} style={{ marginBottom: 5 }}
                  onPress={check => this.mark("ncristhian", c)}
                >
                  <ChallengeCard text={this.props['data']['ncristhian'][c]['name']} checked={this.props['data']['ncristhian'][c]['done']} />
                </TouchableOpacity>
              )
            })}

            <View style={styles.menu}>
              <Text style={styles.principalText}>Desafiar 5 Cristãos a fazer o mesmo</Text>
              <Text style={styles.pointsText}>{this.cristhianCount()}/5</Text>
            </View>
 
            {this.cStrings.map((nc, n) => {
              return (
                <TouchableOpacity key={n} style={{ marginBottom: 5 }}
                  onPress={check => this.mark("cristhian", nc)}
                >
                  <ChallengeCard text={this.props['data']['cristhian'][nc]['name']} checked={this.props['data']['cristhian'][nc]['done']} />
                </TouchableOpacity>
              )
            })}
          </View>
        </Content>
      </Container>
    );
  }

  async mark(type, ref) {
    let check = !this.props['data'][type][ref]['done'];
    
    let obj = {
      [type]: {
        ...this.props['data'][type],
        [ref]: {
          name: this.props['data'][type][ref]['name'],
          done: check
        }
      }
    }

    await this.props.setData({
      name: this.props['data']['name'],
      phone: this.props['data']['phone'],
      university: this.props['data']['university'],
      vision: this.props['data']['vision'],
      change: this.props['data']['change'],
      promise: this.props['data']['promise'],
      order: this.props['data']['order'],
      cristhian: this.props['data']['cristhian'],
      ncristhian: this.props['data']['ncristhian'],
      ...obj
    })

    try{
      await firebaseServices.markItem(type, ref, check);
    }catch(e){
      alert("Erro!");
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Challenges);


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