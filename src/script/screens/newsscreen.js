import React, { Component } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { Version} from '../../../App.js';

class NewsScreen extends React.Component {
    render() {
      return (
        <View style={styles.screen}>
          <View style={{flex:1, alignSelf:'center', justifyContent:'center'}}>
            <Text style={{color:'yellow', fontSize:30, textAlign:'center'}}>
              Platzhalter
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

module.exports.NewsScreen     = NewsScreen;

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