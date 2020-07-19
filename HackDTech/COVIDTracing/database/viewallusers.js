
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, FlatList, StyleSheet, Text, View } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { openDatabase } from "expo-sqlite";
import { useState } from 'react';
import {useEffect} from 'react'

const db = openDatabase("db");


  const ViewAllUser = () => {

    React.useEffect(() => {
      db.transaction(tx => {
        tx.executeSql("Drop Table Temperature",[], (tx) => {console.log('tempdropped');});
        tx.executeSql( "create table if not exists Users(u_id TEXT, display_name	TEXT, location	TEXT, PRIMARY KEY(u_id, display_name));",[], (tx) => {
          console.log('----created---');});
        tx.executeSql("create table if not exists Temperature(u_id TEXT, Week INTEGER, day INTEGER, temperature  NUMERIC, FOREIGN KEY(u_id) REFERENCES Users(u_id))",[], (tx) => {
          console.log('tempcreated');});
        tx.executeSql("create table if not exists Location(u_id TEXT, week INTEGER, day INTEGER, address TEXT, FOREIGN KEY(u_id) REFERENCES Users(u_id))");
        tx.executeSql("create table if not exists Status(u_id TEXT, status TEXT,PRIMARY KEY(u_id), FOREIGN KEY(u_id) REFERENCES Users(u_id))");});
      
        db.transaction(tx => {
        tx.executeSql('INSERT INTO Users(u_id, display_name,location) VALUES (?, ?, ?)',['grace', 'Grace Patel', 'durham'], [], (tx) => {console.log('----inserted---');}); 
        tx.executeSql('INSERT INTO Users(u_id, display_name,location) VALUES (?, ?, ?)',['martha', 'Martha Aboagye', 'durham'], [], (tx) => {console.log('----inserted---');}); 
        tx.executeSql('INSERT INTO Users(u_id, display_name,location) VALUES (?, ?, ?)',['morgan', 'Morgan Lagenhagen', 'durham'], [], (tx) => {console.log('----inserted---');}); 
        tx.executeSql('INSERT INTO Temperature(u_id, Week, day, temperature) VALUES (?, ?, ?, ?)',['morgan', 1, 1, 98.4], (tx) => {console.log('----tempins---');}); 
        tx.executeSql('INSERT INTO Temperature(u_id, Week, day, temperature) VALUES (?, ?, ?, ?)',['morgan', 1, 2, 98.0], (tx) => {console.log('----tempins---');}); 
        tx.executeSql('INSERT INTO Temperature(u_id, Week, day, temperature) VALUES (?, ?, ?, ?)',['morgan', 1, 3, 97.4],  (tx) => {console.log('----tempins---');});
        tx.executeSql('INSERT INTO Temperature(u_id, Week, day, temperature) VALUES (?, ?, ?, ?)',['morgan', 1, 4, 99.5],  (tx) => {console.log('----tempins---');});
        tx.executeSql('INSERT INTO Location(u_id, week, day, address) VALUES (?, ?, ?, ?)',['morgan', 1, 1, '1348 Campus Dr, Durham, NC 27708'],  (tx) => {console.log('----locins---');});
        tx.executeSql('INSERT INTO Location(u_id, week, day, address) VALUES (?, ?, ?, ?)',['morgan', 1, 1, '411 Chapel Dr, Durham, NC 27708'], (tx) => {console.log('----locins---');});
        tx.executeSql('INSERT INTO Status(u_id, status) VALUES (?, ?)',['morgan', 'Not infected'], [], (tx) => {console.log('----statins---');});

       
      });
    }, []);


  let [flatListItems, setFlatListItems] = useState([]);
  
    useEffect(() => {
      db.transaction((tx) => {
        tx.executeSql('SELECT * FROM Users', [], (tx, results) => {
          var temp = [];
          var len = results.rows.length;
          if (len>0){
          for (let i = 0; i < len; ++i)
            temp.push(results.rows.item(i));
          setFlatListItems(temp);}
          else{ alert('Sorry Try Again')};
      
        });
      });
    }, []);

 

  
  
    let listViewItemSeparator = () => {
      return (
        <View
          style={styles.container}
        />
      );
    };
  
    let listItemView = (item) => {
      return (
        <View
          //key={item.u_id}
          style={styles.container}>
          <Text>Id: {item.u_id}</Text>
          <Text>Name: {item.display_name}</Text>
          <Text>Location: {item.location}</Text>
        </View>
      );
   }

 

    return (


    <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={flatListItems}
          ItemSeparatorComponent={listViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => listItemView(item)}
      
       />
      </View>

    </View>
  </SafeAreaView>
    

   );

     };


const styles = StyleSheet.create({
        container: {
          flex: 1,
          marginTop: StatusBar.currentHeight || 0,
        },
        item: {
          backgroundColor: '#f9c2ff',
          padding: 20,
          marginVertical: 8,
          marginHorizontal: 16,
        },
        title: {
          fontSize: 32,
        },
       }); 

export default ViewAllUser