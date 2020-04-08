import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';

export default class EventScreen extends Component {
  render() {
      return (
        <View style={styles.screen}>
        <ScrollView contentContainerStyle={{alignItems: 'center'}}>
          <View style={{ alignItems: 'center', paddingVertical: 20, borderBottomWidth:3, borderColor: 'white', height:'15%',width:'85%'}}>
            <Text style={{ fontSize: 30, color: 'yellow' }}>
              Nächste Veranstaltung
              </Text>
          </View>
          <View style={{ alignItems: 'center', paddingHorizontal: 30, borderRadius: 15, borderWidth: 0, borderColor: 'red', paddingTop:20 }}>
            <Text style={{ fontSize: 40, color: 'red', textAlign: 'center' }}>
              Semester Absch(l)uss
              </Text>
          </View>
          <View style={{flexDirection: 'row', paddingTop:20 }}>
            <View style={{ alignItems: 'center', borderRadius: 15, borderWidth: 3, borderColor: 'red', width: '50%' }}>
              <Text style={{ fontSize: 30, color: 'yellow' }}>
                25.05
              </Text>
            </View>
            <View style={{ alignItems: 'center', borderRadius: 15, borderWidth: 3, borderColor: 'red', width: '50%' }}>
              <Text style={{ fontSize: 30, color: 'yellow' }}>
                20:00
              </Text>
            </View>
          </View>
          <View style={{ alignItems: 'center', paddingHorizontal: 5, borderRadius: 15, borderWidth: 0, borderColor: 'red', paddingTop:20 }}>
            <Text style={{ fontSize: 25, color: 'white', textAlign: 'center'}}>
              Fassbier 1€ bis 22.00 {'\n'}
              3 für 2 {'\n'}
              Horrorshots für Kostümierte
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

module.exports.EventScreen     = EventScreen;

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    flexDirection: 'column',
    backgroundColor: 'black',
  }
});