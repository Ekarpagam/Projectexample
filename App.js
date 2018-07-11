import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator,NavigationActions} from 'react-navigation';

import LoginScreen from './components/Login';

import ProfileScreen from './components/Profile';
import CitylistScreen from './components/Citylist';
import WeatherScreen from './components/Weather';
import SearchlistScreen from './components/Searchlist';



// export default class App extends Component {
//   render() {
//     return (
//      <View>
//         <Login />
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

const MainNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: ({navigation}) => ({
      header: null
    }),
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Profile',
    }),
  },

Citylist: {
    screen: CitylistScreen,
    navigationOptions: ({navigation}) => ({
       title: 'CityList',
    }),
  },

Weather: {
    screen: WeatherScreen,
    navigationOptions: ({navigation}) => ({
       title: 'Weather',
    }),
  },

Searchlist: {
    screen: SearchlistScreen,
    navigationOptions: ({navigation}) => ({
       title: 'Todolist',
    }),
  },

 });

export default MainNavigator