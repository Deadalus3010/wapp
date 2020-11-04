import React from 'react';
import { Component } from 'react';
import { View, ScrollView, SafeAreaView, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { stylescreen, styleVersion, Version } from '../stylesheetcontainer.js';

const { Monatsspecial } = require('./productscreen/monatsspecial.js');
const { Getränke } = require('./productscreen/getraenke.js');
const { getSnacks } = require('../api/get/getsnacks.js');

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={stylescreen.all_background}>
        <ScrollView>
        <View style={styles.topic}>
          <Image style={styles.picture}
            source={require('../../img/Studentenclub_Wärmetauscher2.png')} />
        </View>
        <View style={{paddingVertical: abstand, alignItems:'center' }}>
          <View style={styles.button_feat}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Monatsspecial')}  >
              <Text style={{ color: b_color_text, textAlign: 'center', fontSize: 30 }}>
                Monatsspecial
            </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{paddingVertical: abstand, alignItems:'center' }}>
          <View style={styles.button_feat}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Getränke')}>
              <Text style={{ color: b_color_text, textAlign: 'center', fontSize: 30 }}>
                Getränke
            </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{paddingVertical: abstand, alignItems:'center'  }}>
          <View style={styles.button_feat}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Snacks')}>
              <Text style={{ color: b_color_text, textAlign: 'center', fontSize: 30 }}>
                Snacks
            </Text>
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
        <View style={styleVersion.info}>
          <Text style={{ color: 'yellow', fontSize: 6 }}>
            {Version}
          </Text>
        </View> 
      </View>
    )
  }
}
module.exports.HomeScreen = HomeScreen;

const abstand = 35;
const b_color_background = 'black'
const b_color_text = 'yellow'
const styles = StyleSheet.create({
  screen: {
    height: '100%',
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  topic: {
    alignItems: 'center',
    padding: abstand,
    
  },
  picture: {
    width: 300,
    height: 120,
  },
  bot: {
    //flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    //padding: 40,
    backgroundColor: 'white'
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
    justifyContent:'flex-end',
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

module.exports.ProductsScreen = ProductsScreen;