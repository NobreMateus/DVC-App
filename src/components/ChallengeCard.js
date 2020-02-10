import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class ChallengeCard extends React.Component {
    
    constructor(){
        super();
    }

    render() {
        return (
          <View style={styles.container} >
            <View style={styles.cardContainer}>
                <Text style={styles.text}>{this.props.text}</Text> 
                {/* <View style ={ this.props.checked?styles.checked:styles.noChecked }></View> */}
            </View> 
          </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
      flex:1, 
      justifyContent :"center",
      paddingHorizontal: 15,  
      height: 100,
      backgroundColor: "#fff",
      //marginBottom:5,
      borderRadius: 5
    },
    text: {
      fontSize: 16,
      color:"#000",
      
      
    },
    checked:{
      height:25,
      width:25,
      borderRadius:13,
      backgroundColor:"#d48472"
    },
    noChecked:{
      height:25,
      width:25,
      borderRadius:13,
      borderWidth: 2,
      borderColor: "#d48472",

    },
    cardContainer:{
      flexDirection: 'row',
    justifyContent: 'space-between',  
    }

  });