import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet,Button, Image, TextInput,TouchableOpacity  } from 'react-native';

//import Profile from './Profile';




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
   alignSelf: 'center',
    },
     input1: {
        height: 50,
        width: 200,
        marginTop: 30,
        padding: 4,
       // fontSize: 18,
        borderWidth: 1,
        borderColor: 'blue',
        backgroundColor: 'skyblue',
      alignSelf: 'center',
        
    }
  
});

export default class Login extends Component {

    render() {
      const randomNumber = Math.random();
      console.log("login renderrrnetn ghyguy")
        return (
            <View style={styles.input2}>
                  <TextInput style={styles.input} 
                      placeholder="Username"
                  />
                <TextInput style={styles.input} 
                    placeholder="Password"
                    secureTextEntry={true}
                />
              <TouchableOpacity style={styles.input1} onPress={() =>this.navigationFunction()}>
          <Text >Login</Text>
        </TouchableOpacity>
            </View>
        )
    }
     navigationFunction(){
    this.props.navigation.navigate('Profile')
  }
  }

