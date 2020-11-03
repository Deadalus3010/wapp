import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, Image } from 'react-native';
import { Version } from '../stylesheetcontainer.js';

class MemberScreen extends React.Component {
    render() {
      return (
        <View style={styles.screen}>
          <View style={{flex:1, alignSelf:'center', justifyContent:'center'}}>
            <Text style={{color:'yellow', fontSize:30, textAlign:'center'}}>
              Hier kommen die Mitglieder hin
            </Text>
            <Text style={{color:'yellow', fontSize:30, textAlign:'center'}}>
              Wird in späteren Patches nachgeliefert
            </Text>
          </View>
          <View style={styles.info}>
            <Text style={{ color: 'yellow', fontSize: 6 }}>
              {Version}
            </Text>
          </View>
        </View>
      );
    }
  }

module.exports.MemberScreen     = MemberScreen;

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  info: {
    flex: 0.015,
    alignItems: 'flex-end',
    textAlign: 'center',
  }
})