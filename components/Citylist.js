
import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View,Alert  } from 'react-native';


const styles = StyleSheet.create({

    container: {
   flex: 1,
   paddingTop: 22,
 backgroundColor: 'gray',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
     flex:0.3,
     backgroundColor: 'skyblue',
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center' ,
    }
  
});

 var kyotoTemp;
export default class Citylist extends Component {

constructor(props) {
    super(props);
    this.state = {kyotoTemp: ''};
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }


 

fetchData(renderItem){
// "+${rendertIem}+"
let myApiUrl ='https://api.openweathermap.org/data/2.5/weather?q=';
let myApiUrl1='&units=imperial&APPID=9c3ba47b955550578df50d6127791790';
let myApiUrl2 =renderItem;
console.log(myApiUrl+myApiUrl2+ myApiUrl1)
  fetch(myApiUrl+myApiUrl2+ myApiUrl1)
  .then(response => response.json())
  .then(data => {
     console.log(data,data.main,"main"); 

     var kyoto = data; 
     console.log(kyoto); 

     var kyotoMainWeather = data.weather[0].main;
     kyotoTemp = data.main.temp; 
     console.log(kyotoTemp)
     var kyotoDescription = data.weather[0].description; 

      this.setState({kyoto: kyoto, kyotoMainWeather: kyotoMainWeather,kyotoTemp: kyotoTemp,kyotoDescription: kyotoDescription}); 
      this.props.navigation.navigate('Weather', {Tempname :kyotoTemp, Cityname :renderItem, });
  })
  .catch(error => console.log('parsing failed', error))


}

  GetItem (renderItem) {
   
  Alert .alert(renderItem);

  this.fetchData(renderItem);
   
   console.log(renderItem);

//return  fetch('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=9c3ba47b955550578df50d6127791790')
    
 
 // .then((response) => response.json())
 //    .then((responseJson) => {
 //      return responseJson.renderItem;
 //      console.log(renderItem);
 //    })
 //    .catch((error) => {
 //      console.error(error);
 //    });

 
  }
  render() {
const randomNumber = Math.random();
 
//console.log("citylist");
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Chennai'},
            {key: 'Bangalore'},
            {key: 'Mumbai'},
            {key: 'Kerala'},
             {key: 'Londan'},
             {key: 'Delhi'}, {key: 'China'}, {key: 'Mexico'}, {key: 'Dubai'}, {key: 'USA'},
          ]}   
           ItemSeparatorComponent = {this.FlatListItemSeparator}
          renderItem={({item}) => <Text style={styles.item} onPress={this.GetItem.bind(this,item.key)} >{item.key}</Text>}

          />
      </View>
    );
  }
}

///AppRegistry.registerComponent('Projectexample', () => Citylist);