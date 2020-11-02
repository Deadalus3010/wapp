import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, ScrollView } from 'react-native';
import { Version} from '../../../App.js';

class NewsScreen extends React.Component {
    render() {
      return (
        <View style={styles.screen}>
          <ScrollView>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color:'yellow', fontSize: 30, padding: 20, textDecorationLine: 'underline'}}>
                Newsticker
              </Text>
            </View>
          </ScrollView>
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
  },

})