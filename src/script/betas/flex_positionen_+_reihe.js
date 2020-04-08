import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar, Button, TouchableOpacity, Image } from 'react-native';

class ProductsScreen extends React.Component {
    render() {
      return (

      <View>
        <View style={styles.container}>
          <View style={styles.image} />
          <View style={styles.text}>
            <Text>Hier ist ein Wärmi Bild{"\n"}{"\n"}{"\n"}</Text>
            <Text>{"\n"}{"\n"}{"\n"}{"\n"}Hier findet Ihr alles was der Wärmi so hergibt</Text>
          </View>
        </View>

        <View style={styles1.container1}>
          <View style={styles1.button1} />
          <View style={styles1.button1} />
        </View>

        <View style={styles2.container2}>
         <View style={styles2.button2} />
          <View style={styles2.button2} />
        </View>
      </View>

      );
    }
  }

module.exports.ProductsScreen     = ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  image: {
    marginTop: 0,
    backgroundColor: 'red',
    width: '100%',
    height: 350
  },
  text: {
    position: 'absolute', 
    top: 250, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});

const styles1 = StyleSheet.create({
  container1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button1: {
    marginTop: 360,
    backgroundColor: 'blue',
    width: '40%',
    height: 175
  }
});

const styles2 = StyleSheet.create({
  container2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button2: {
    marginTop: 550,
    backgroundColor: 'green',
    width: '40%',
    height: 175
  }
});