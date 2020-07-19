
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, FlatList, StyleSheet, Text, View } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { openDatabase } from "expo-sqlite";
import { useState } from 'react';
import {useEffect} from 'react'

const db = openDatabase("db");

const temp= () => {

  let [flatListItems, setFlatListItems] = useState([]);
  
    React.useEffect(() => {
      db.transaction((tx) => {
        tx.executeSql('SELECT * FROM Temperature', [], (tx, results) => {
          var tempo = [];
          var len = results.rows.length;
          if (len>0){
          for (let i = 0; i < len; ++i)
            tempo.push(results.rows.item(i));
          setFlatListItems(tempo);}
          else{ alert('Sorry. Try again')};
      
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
           <Text>Week: {item.Week}</Text>
           <Text>Day: {item.day}</Text>
          <Text>Temperature: {item.temperature}</Text>
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

 
}

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

 export default temp;
