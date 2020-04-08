import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, Image } from 'react-native';

class ContactScreen extends React.Component {
    render() {
      return (
        <View style={styles.screen}>
        <View style={styles.topic}>
          <Image style={{width:310 ,height:200}}
            source={require('../../img/HdS_Waermi.jpg')}/>
        </View>
        <View style={{paddingHorizontal:25, paddingTop: 180}}>
        <View>
          <Text style={{fontSize:20, color:'yellow'}}>
            Studentenclub Wärmetausche e.V.
          </Text>
        </View>
        <View style={{paddingTop:30}}>
          <Text style={{color:'white',fontSize:18,}}>
            Vorstandsvorsitzender:
          </Text>
        </View>
        <View >
          <Text style={{color:'white',fontSize:18}}>
            Anton Sparfeld
          </Text>
        </View>
        <View style={{paddingTop:30}}>
          <Text style={{color:'white',fontSize:18}}>
            Telefon:  01520 3265462
          </Text>
        </View>
        <View style={{paddingTop:30}}>
          <Text style={{color:'white',fontSize:18,}}>
            E-Mail:     info@waermi.de
          </Text>
        </View>
        <View style={{paddingTop:30}}>
          <Text style={{color:'white',fontSize:18,}}>
             Adresse: {'\t'}Rudolph-Bahro-Straße 18 {'\n'}
             {'\t\t\t\t\t\t\t\t\t\t\t\t'}06217 Merseburg
          </Text>
        </View>
        </View>
      </View>
      );
    }
  }

module.exports.ContactScreen = ContactScreen; 

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
  }
});