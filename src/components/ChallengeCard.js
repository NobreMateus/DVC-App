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
                <Text style={styles.title}>{this.props.name}</Text>
                <View style={styles.subContainer}>
                  <Text style={styles.subtitle}>{this.props.university} - {this.props.phone} </Text> 
                  {/* <Text> - </Text>
                  <Text> {this.props.phone} </Text> */}
                </View>
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
      height: 90,
      backgroundColor: "#fff",
      //marginBottom:5,
      borderRadius: 20
    },
    title: {
      fontSize: 20,
      color:"#000",
    },
    subtitle: {
      fontSize: 16,
      // color:"#000",
      color: "#696969"
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
    //   flexDirection: 'row',
    // justifyContent: 'space-between',  
    },
    subContainer:{
      flexDirection: 'row',
      alignItems:"center",
      color: "#A9A9A9"
    }

  });