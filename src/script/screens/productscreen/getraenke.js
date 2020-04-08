import React from 'react';
import { Component } from 'react';
import { View, ScrollView, SafeAreaView, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const { getBeer }          =   require('../../api/get/getbeer.js');
const { getCocktail }     =   require('../../api/get/getcocktail.js');
const { getLongdrink }    =   require('../../api/get/getlongdrink.js');
const { getShots }         =   require('../../api/get/getshots.js');
const { getAFG }           =   require('../../api/get/getafg.js');

class HomeScreen extends Component {
    render() {
      return (
        <View style={styles.screen}>
          <ScrollView contentContainerStyle={styles.bot_scroll}>
            <View style={{ padding: sort_drinks_pad }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Beer')}>
                <View style={styles.button_feat}>
                  <Text style={{ color: b_color_text, textAlign: 'center', fontSize: 30 }}>
                    Biere
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ padding: sort_drinks_pad }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Cocktails')}>
                <View style={styles.button_feat}>
                  <Text style={{ color: b_color_text, textAlign: 'center', fontSize: 30 }}>
                    Cocktails
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ padding: sort_drinks_pad }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Longdrinks')}>
                <View style={styles.button_feat}>
                  <Text style={{ color: b_color_text, textAlign: 'center', fontSize: 30 }}>
                    Longdrinks
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ padding: sort_drinks_pad }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Shots')}>
                <View style={styles.button_feat}>
                  <Text style={{ color: b_color_text, textAlign: 'center', fontSize: 30 }}>
                    Spirituosen
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ padding: sort_drinks_pad }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('AFG')}>
                <View style={styles.button_feat}>
                  <Text style={{ color: b_color_text, textAlign: 'center', fontSize: 24 }}>
                    Alkoholfreie Getränke
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      )
    }
}
module.exports.Getränke     = Getränke; 

const b_color_background = 'black'
const b_color_text = 'yellow'
const sort_drinks_pad = 40
const styles = StyleSheet.create({
  screen: {
    height: '100%',
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  bot_scroll: {
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 40,
    paddingTop: 73,
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
  }
});

const AppNavigator = createStackNavigator(
    {
      Home: HomeScreen,
      Beer: getBeer,
      Cocktails: getCocktail,
      Longdrinks: getLongdrink,
      Shots: getShots,
      AFG: getAFG,
    },
    {
      initialRouteName: "Home",
      headerMode: 'none',
    }
  );
  
  const AppContainer = createAppContainer(AppNavigator);
  export default class Getränke extends React.Component {
    render() {
      return <AppContainer />;
    }
  }
  
  module.exports.Getränke     = Getränke;