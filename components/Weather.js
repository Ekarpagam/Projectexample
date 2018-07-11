
import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet,Button, Image, TouchableOpacity,TextInput } from 'react-native';

const styles = StyleSheet.create({
    // image: {
    //     width: 100, 
    //     height: 100,
    //     alignSelf: 'center'
    // },
    input: {
        height: 100,
        width: 250,
        marginTop: 40,
        padding: 4,
       // fontSize: 18,
        borderWidth: 1,
        borderColor: 'blue',
        backgroundColor: 'skyblue',
         alignSelf: 'center',
        
    },
     input1: {
        height: 50,
        width: 200,
        marginTop: -50,
        padding: 4,
       // fontSize: 18,
        borderWidth: 1,
        borderColor: 'blue',
        backgroundColor: 'skyblue',
      alignSelf: 'center',
        
    }
});


export default class Weather extends Component {

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 5,
          width: "150%",
          backgroundColor: "#607D8B",
          flex:0.1,
        }}
      />
    );
  }



 render() {
const randomNumber = Math.random();

const {state} = this.props.navigation;
    var Tempname = "0";   //state.params ? state.params.Tempname : "<undefined>";
     var Cityname = "Chennai";    ////state.params ? state.params.Cityname : "<undefined>";
     console.log(state,Cityname,"Cityname")
     return (
       <View style={styles.input}>
          <Text style={[{
                flex:1,
                backgroundColor:'rgba(0,0,0,0)',fontWeight: 'bold',fontSize: 20,
                  justifyContent:"center",
                  alignItems:'center', }]}>
                  Details Screen</Text>
          <Text>Temp: {JSON.stringify(Tempname)}</Text>
          <Text>City: {JSON.stringify(Cityname)}</Text>
          <TouchableOpacity onPress={() =>this.navigationFunction1()}>
          <Text style={[{ fontWeight: 'bold',fontSize: 20,
                  justifyContent:"center",
                  alignItems:'center', }]}>                                     Next</Text></TouchableOpacity>
      </View>
       );
  }

   navigationFunction1(){
    this.props.navigation.navigate('Searchlist')
  }
}
