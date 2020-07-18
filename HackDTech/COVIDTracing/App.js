import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'

class App extends Component {
  state = {
    count: 0
  }

  onPress = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

 render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
         style={styles.mapButton}
         onPress={this.onPress}
        >
         <Text style={styles.buttonText} >Record my location</Text>
        </TouchableOpacity>

	<TouchableOpacity
         style={styles.healthButton}
         onPress={this.onPress}
        >
         <Text style={styles.buttonText}> Record how I'm feeling </Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    color: "#F5FFFA",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapButton: {   
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#9BE8C3',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
	width: 300,
	  height: 100
  },
	
   healthButton: {   
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#6CC0EF',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
	width: 300,
	  height: 100
  },

   buttonText: {
    fontSize: 20,
    color:'#fff',
      textAlign:'center',}})

export default App;



/*import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Grace's Test!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
