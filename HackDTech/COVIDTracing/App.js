import * as React from 'react';
import { StyleSheet, TouchableOpacity,Button, View, Text, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapView from "react-native-maps";
import {LineChart} from "react-native-chart-kit";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.mapButton}
	onPress={() => navigation.navigate('Maps')}
      >
	<Text style={styles.buttonText} >Record my location</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.healthButton}
	onPress={() => navigation.navigate('Health')}
      >
	<Text style={styles.buttonText} >Record how I'm feeling</Text>
      </TouchableOpacity>

    </View>
  );
}


function MapScreen({ navigation }) {
  return (

    <View style={styles.container}>
        <MapView style={styles.mapStyle} />
    </View>
    
  );
}

function HealthScreen({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>My Temperature</Text>
        <LineChart
          data={{
            labels: ["7/1", "7/5", "7/10", "7/15"],
            datasets: [
              {
                data: [
                  98.7,
                  99.3,
                  99.8,
                  97.9
                ]
              }
            ]
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisLabel=""
          yAxisSuffix="°F"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#005da1",
            backgroundGradientTo: "#1f5d7f",
            decimalPlaces: 1, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 15
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          style={{
            marginVertical: 8,
            borderRadius: 10
          }}
        />
    </View>
  );
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Maps" component={MapScreen} />
	<Stack.Screen name="Health" component={HealthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    color: "#F5FFFA",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapButton: {   
    flex: 1,
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
    flex: 1,
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
    textAlign:'center',},

   mapStyle: {
    marginTop:10,
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    width: 360,
    height: 300  },

})

export default App;
