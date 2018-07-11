import React, { Component } from "react";
import { Text, StyleSheet, View,Animated, ListView, TextInput, Button,ActivityIndicator, Alert } from 'react-native'; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',fontWeight: 'bold',
  },
  formView: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 8,fontWeight: 'bold',
  },
  inputForm: {
    backgroundColor: '#fff',
    width: 320,
    height: 40,
    padding: 8,
    marginBottom: 8,fontWeight: 'bold',
  },
   input1: {
        width: 20,
    height: 10,
        marginTop: 30,
        padding: 4,  alignSelf: 'center',fontWeight: 'bold',
    },

  todoItem: {
    alignItems: 'center',
    padding: 8,
    width: 320,
    borderBottomWidth: 1.5,
    borderColor: '#000000',
    backgroundColor: '#32cd32',
    flex: 1,
    flexDirection: 'row',fontWeight: 'bold',
  },
  todoText: {
    flex: 1,
  },
});
export default class Searchlist extends React.Component {

   constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      inputValue: '',
      dataSource: ds.cloneWithRows([]),
    };
    this._handleTextChange = this._handleTextChange.bind(this);
    this._handleDeleteButtonPress = this._handleDeleteButtonPress.bind(this);
  }
  _handleTextChange = (value) => {
    const inputValue = value;
    this.setState(() => ({
      inputValue,
    }));
  }
  _handleSendButtonPress = () => {
    if (!this.state.inputValue) {
      return;
    }
    const textArray = this.state.dataSource._dataBlob.s1;
    textArray.push(this.state.inputValue);
    this.setState(() => ({
      dataSource: this.state.dataSource.cloneWithRows(textArray),
      inputValue: '',
    }));
  };
  _handleDeleteButtonPress = (id) => {
    this.setState((a) => {
      const newItem = a.dataSource._dataBlob.s1.filter((item, i) => (parseInt(id) !== i));
      return {
        dataSource: this.state.dataSource.cloneWithRows(newItem),
      }
    });
  };

  render() {
   
    return (
    <View style={styles.container}>
        <View style={styles.formView}>
          <TextInput
            style={styles.inputForm}
            value={this.state.inputValue}
            onChangeText={this._handleTextChange}
            placeholder="Type here.."
          />
          <Button  style={styles.deleteButton}
            title="✔️"
            onPress={this._handleSendButtonPress}
          />
        </View>
        <ListView
          style={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={(rowData, sectionID, rowID) => {
            const handleDelete = () => {
              return this._handleDeleteButtonPress(rowID);
            }
            return (
              <View style={styles.todoItem}>
                <Text style={styles.todoText}>{rowData}</Text>
                <Button
                  title="X"
                  onPress={handleDelete}
                  style={styles.deleteButton}
                />
              </View>
              );
            }
          }
        />
      </View>
    );
  }
}

