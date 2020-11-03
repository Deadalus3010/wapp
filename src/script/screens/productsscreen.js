import React from 'react';
import { Component } from 'react';
import { View, ScrollView, SafeAreaView, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Version } from '../stylesheetcontainer.js';

const { Monatsspecial }   =   require('./productscreen/monatsspecial.js');
const { Getränke }        =   require('./productscreen/getraenke.js');
const { getSnacks }       =   require('../api/get/getsnacks.js');

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.topic}>
          <Image style={styles.picture}
            source={require('../../img/Studentenclub_Wärmetauscher2.png')} />
        </View>
        <View style={styles.bot}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Monatsspecial')}  >
            <View style={styles.button_feat}>
              <Text style={{ color: b_color_text, textAlign: 'center', fontSize: 30 }}>
                Monatsspecial
            </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Getränke')}>
            <View style={styles.button_feat}>
              <Text style={{ color: b_color_text, textAlign: 'center', fontSize: 30 }}>
                Getränke 
            </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Snacks')}>
            <View style={styles.button_feat}>
              <Text style={{ color: b_color_text, textAlign: 'center', fontSize: 30 }}>
                Snacks
            </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.info}>
          <Text style={{ color: 'yellow', fontSize: 6 }}>
            {Version}
          </Text>
        </View>
      </View>
    )
  }
}
module.exports.HomeScreen =  HomeScreen; 

const b_color_background = 'black'
const b_color_text = 'yellow'
const styles = StyleSheet.create({
  screen: {
    height: '100%',
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  topic: {
    flex: 0.3,
    alignItems: 'center',
    padding: 30,
  },
  picture: {
    width: 300,
    height: 120,
  },
  bot: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 40,
  },
  button_feat: {
    backgroundColor: b_color_background,
    borderRadius: 15,
    width: 250,
    height: 50,
    lineHeight: 15,
    textShadowRadius: 20,
    borderWidth: 2,
    borderColor: 'yellow',
    textAlign: 'center',
    justifyContent: 'space-around',
  },
  info: {
    alignItems: 'flex-end',
    textAlign: 'center',
  }
});

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Getränke: Getränke,
    Monatsspecial: Monatsspecial,
    Snacks: getSnacks,
  },
  {
    initialRouteName: "Home",
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default class ProductsScreen extends React.Component {
  render() {
    return <AppContainer />;
  }
}

module.exports.ProductsScreen     = ProductsScreen;