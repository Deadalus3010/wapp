import React from 'react';
import { Component } from 'react';
import { View, ScrollView, SafeAreaView, Text, StyleSheet, TouchableOpacity, BackHandler } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import  Icons  from 'react-native-vector-icons/MaterialIcons';
//import { styles } from './monatsspecial';

const { getBeer }          =   require('../../api/get/getbeer.js');
const { getCocktail }      =   require('../../api/get/getcocktail.js');
const { getLongdrink }     =   require('../../api/get/getlongdrink.js');
const { getShots }         =   require('../../api/get/getshots.js');
const { getAFG }           =   require('../../api/get/getafg.js');
const { HomeScreen }       =   require('../productsscreen.js');

class HomeScreen_2 extends Component {
   constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this); //Wichtig!!!
    };
    handleBackButtonClick(){                    /*das ist die OnPress funktion, nur ausgelagert */
      this.props.navigation.navigate('Back');
      return true;
    }

    /*Backhandler hat einen Bug, der Code der beim Monatsspecial klappt geht hier nicht, sicher ein 
      Konflikt mit dem Navigator, beim Versuch den Zurück Button in den bestehenden Navigator
      einzubauen entstand ein weiterer Bug bei dem die Navigation auf der Seite productscreen
      nicht mehr funfktioniert hat. Weitere Lösungen werden demnächst getestest */
    render() {
      return (
        <View style={styles.screen}>
          <View style={{backgroundColor: 'black', paddingVertical:10, paddingLeft:20}}>
            <View style={{backgroundColor:'black',  width:'30%'}}>
              <TouchableOpacity style={styles.backhandler_optic} > 
                <Icons name={'arrow-back'} size={30} color='yellow'/>
                <Text style={{ color:'yellow'}}>
                  Zurück
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView contentContainerStyle={styles.bot_scroll}>
            <View style={{ paddingBottom: sort_drinks_pad, paddingHorizontal: sort_drinks_pad}}>
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
    paddingTop: 20,
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
  backhandler_optic:{
    lineHeight: 15,
    borderColor: 'yellow',
    flexDirection:'row',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: b_color_background,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'yellow',
    justifyContent: 'center'
  }
});

const AppNavigator = createStackNavigator(
    {
      Home: HomeScreen_2,
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