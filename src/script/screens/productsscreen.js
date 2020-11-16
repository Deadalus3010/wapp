import React from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { stylescreen, styleVersion, Version } from '../stylesheetcontainer.js';

const { Monatsspecial } = require('./productscreen/monatsspecial.js');
const { Getraenke } = require('./productscreen/getraenke.js');
const { getSnacks } = require('../api/get/getsnacks.js');
const { getBeer } = require('../api/get/getbeer.js');
const { getCocktail } = require('../api/get/getcocktail.js');
const { getLongdrink } = require('../api/get/getlongdrink.js');
const { getShots } = require('../api/get/getshots.js');
const { getAFG } = require('../api/get/getafg.js');

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
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Getraenke')}  >
              <Text style={{ color: b_color_text, textAlign: 'center', fontSize: 30 }}>
                Monatsspecial
            </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{paddingVertical: abstand, alignItems:'center' }}>
          <View style={styles.button_feat}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Getraenke')}>
              <Text style={{ color: b_color_text, textAlign: 'center', fontSize: 30 }}>
                Getraenke
            </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{paddingVertical: abstand, alignItems:'center'  }}>
          <View style={styles.button_feat}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Getraenke')}>
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

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Getraenke: Getraenke,
    Monatsspecial: Monatsspecial,
    Snacks: getSnacks,
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
export default class ProductsScreen extends React.Component {
  render() {
    return <AppContainer />;
  }
}

module.exports.ProductsScreen = ProductsScreen;

/*****************  
#
#     [css]
#
#     Hier geben wir eine Form (ein Style) an und definieren,
#     wie die Daten ausgegeben werden sollen.
#
*****************/ 

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