import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet,Button, Image, TouchableOpacity,TextInput } from 'react-native';


const styles = StyleSheet.create({
    // image: {
    //     width: 100, 
    //     height: 100,
    //     alignSelf: 'center'
    // },
    input: {
        height: 50,
        width: 200,
        marginTop: 30,
        padding: 4,
       // fontSize: 18,
        borderWidth: 1,
        borderColor: 'blue',
        backgroundColor: 'yellow',
         alignSelf: 'center',
        
    }
});

export default class Profile extends Component {

    render() {
        const randomNumber = Math.random();
         console.log("Profile display")

        return (
            <View>
 <TouchableOpacity style={styles.input} onPress={() =>this.navigationFunction1()}>
          <Text >Welcome!</Text>
        </TouchableOpacity>
            </View>
        )
    }
     navigationFunction1(){
    this.props.navigation.navigate('Citylist')
}
}