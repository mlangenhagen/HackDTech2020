//Borrowed code from:
//	https://reactnavigation.org/docs/navigating/
//	https://medium.com/@arvind.chak128/how-to-auto-zoom-into-your-current-location-using-react-native-maps-88f9b3063fe7
//	https://github.com/react-native-community/react-native-maps



import * as React from 'react';
import { StyleSheet, TouchableOpacity,Button, View, Text, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Marker } from 'react-native-maps';
import { createStackNavigator } from '@react-navigation/stack';
import MapView from "react-native-maps";
import {Marker} from 'react-native-maps';
import {LineChart} from "react-native-chart-kit";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.positiveTestButton}
	onPress={() => navigation.navigate('Positive')}
      >
	<Text style={styles.buttonText} >I tested positive! Alert the community.</Text>
      </TouchableOpacity>

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

      <TouchableOpacity
        style={styles.healthButton}
	onPress={() => navigation.navigate('Health')}
      >
	<Text style={styles.buttonText} >Record how I'm feeling</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.mapButton}
	onPress={() => navigation.navigate('Maps')}
      >
	<Text style={styles.buttonText} >Record my location</Text>
      </TouchableOpacity>

    </View>
  );
}

function PositiveScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>The community has been notfied. Thank you for doing your part in keeping our community safe!</Text>
    </View>
    
  );
}


function MapScreen({ navigation }) {


  return (

   <View style={styles.container}>
      <Text>Positive Test Cases Near Me</Text>
        <MapView 
	  style={styles.mapStyle} 
	  initialRegion={{
	        latitude: 37.78825,
          	longitude: -122.4324,      
          	latitudeDelta: 0.0922,
          	longitudeDelta: 0.0421,	
	  }}>

	<Marker
          coordinate={{latitude: 37.78825, longitude: -122.4324}}
          title="TESTED POSITIVE: July 17th"
          description="Visited: July 14th, 12:04pm"
        />

	<Marker
          coordinate={{latitude: 37.79825, longitude: -122.4334}}
          title="TESTED POSITIVE: July 14th"
          description="Visited: July 11th, 11:36am"
        />

	
	<Marker
          coordinate={{latitude: 37.79835, longitude: -122.4344}}
          title="TESTED POSITIVE: July 16th"
          description="Visited: July 15th, 2:22pm"
        />

	<Marker
          coordinate={{latitude: 37.79635, longitude: -122.4244}}
          title="TESTED POSITIVE: July 12th"
          description="Visited: July 18th, 6:19pm"
        />



       </MapView>

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
        <Stack.Screen name="Positive" component={PositiveScreen} />
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
    marginBottom:10,
    backgroundColor:'#9BE8C3',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
	width: 300,
	  height: 100
  },

  positiveTestButton: {   
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10,
    paddingTop:2,
    paddingBottom:2,
    marginLeft:30,
    marginRight:30,
    marginBottom:30,
    backgroundColor:'#eb4934',
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
