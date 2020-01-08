import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class ChallengeCard extends React.Component {
    
    constructor(){
        super();
    }

    render() {
        return (
          <View style={styles.container} >
            <Text style={styles.text}>
                {this.props.text}
                {this.props.checked?"true":"false"}
            </Text> 
          </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent :"center",
      paddingHorizontal: 15,  
      height: 55,
      backgroundColor: "#fff",
      //marginBottom:5,
      borderRadius: 5
    },
    text: {
      fontSize: 16,
      color:"#000"
    }
  });