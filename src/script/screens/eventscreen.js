import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { Version } from 'C:/Users/Nicol/Documents/GitHub/wapp/App.js'

export default class EventScreen extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
          <View style={{ flex: 0.15, alignItems: 'center', paddingVertical: 20 }}>
            <Text style={{ fontSize: 30, color: 'yellow', textDecorationLine: 'underline' }}>
              Nächste Veranstaltung
            </Text>
          </View>
          <View style={{ flex: 0.40, }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 40, color: 'red', textAlign: 'center' }}>
                Semester Absch(l)uss
              </Text>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 20 }}>
              <View style={{ alignItems: 'center', borderRadius: 15, borderWidth: 3, borderColor: 'red', width: '50%' }}>
                <Text style={{ fontSize: 30, color: 'yellow' }}>
                  25.05.20
              </Text>
              </View>
              <View style={{ alignItems: 'center', borderRadius: 15, borderWidth: 3, borderColor: 'red', width: '50%' }}>
                <Text style={{ fontSize: 30, color: 'yellow' }}>
                  20:00
              </Text>
              </View>
            </View>
            <View style={{ alignItems: 'center', borderRadius: 15, borderWidth: 0, borderColor: 'red', paddingTop: 20, }}>
              <Text style={{ fontSize: 25, color: 'white', textAlign: 'center' }}>
                Fassbier 1€ bis 22.00 {'\n'}
              3 für 2 Aktion für Liköre {'\n'}
              Horrorshots für Kostümierte
            </Text>
            </View>
          </View>
          <View style={{ flex: 0.15, alignItems: 'center', paddingBottom: 20, paddingTop: 30 }}>
            <Text style={{ fontSize: 30, color: 'yellow', textDecorationLine: 'underline' }}>
              Kommende Veranstaltung
            </Text>
          </View>
          <View style={{flex: 0.40,}}>
            <View style={{ paddingVertical: 20, paddingHorizontal: 10, flexDirection: "row", alignItems: 'flex-start', width: '100%' }}>
              <View style={{ flex: 0.8, alignself: 'flex-start'}} >
                <Text style={{ color: 'white', fontSize: 22 }}>
                  Candy Party
              </Text>
              </View>
              <View style={{ flex: 0.2, alignself: 'flex-start'}}>
                <Text style={{ color: 'white', fontSize: 22 }}>
                  01.06
              </Text>
              </View>
            </View>
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

module.exports.EventScreen = EventScreen;

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  info: {
    alignItems: 'flex-end',
    textAlign: 'center',
  }
});