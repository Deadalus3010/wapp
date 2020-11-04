import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { stylescreen, styleVersion, Version } from '../stylesheetcontainer.js';

class ContactScreen extends React.Component {
  render() {
    return (
      <View style={stylescreen.all_background}>
        <ScrollView>
        <View style={styles.topic}>
          <Image style={{ width: '85%' , height: 200 }}
            source={require('../../img/HdS_Waermi.jpg')} />
        </View>
        <View style={{ paddingHorizontal: 25}}>
          <View>
            <Text style={{ fontSize: 20, color: 'yellow' }}>
              Studentenclub Wärmetausche e.V.
            </Text>
          </View>
          <View>
          <View style={{paddingTop: 30, justifyContent: 'center'}}> 
              <Text style={{color: normaltextcolor, fontSize: 18}}>
                Öffnungszeiten
              </Text>
            </View>
            <View style={{paddingTop: 10}}>
              <View style={styles.openTimeFlexBox}>
                <Text style={{color: normaltextcolor}}>
                  Montag: 20:00 Uhr - 01:00 Uhr
                </Text>
              </View>
              <View style={styles.openTimeFlexBox}>
                <Text style={{color: normaltextcolor}}>
                  Mittwoch: 20:00 Uhr - 01:00 Uhr
                </Text>
              </View>
              <View style={styles.openTimeFlexBox}>
                <Text style={{color: normaltextcolor}}>
                  Freitag: 20:00 Uhr - 01:00 Uhr
                </Text>
              </View>
            </View>
          </View>
          <View style={{ paddingTop: 24 }}>
            <Text style={{ color: normaltextcolor, fontSize: 18, }}>
              Vorstandsvorsitzender:
            </Text>
          </View>
          <View >
            <Text style={{ color: normaltextcolor, fontSize: 18 }}>
              Anton Sparfeld
            </Text>
          </View>
          <View style={{ paddingTop: 30 }}>
            <Text style={{ color: normaltextcolor, fontSize: 18 }}>
              Telefon:  01520 3265462
            </Text>
          </View>
          <View style={{ paddingTop: 30 }}>
            <Text style={{ color: normaltextcolor, fontSize: 18, }}>
              E-Mail:     info@waermi.de
            </Text>
          </View>
          <View style={{ paddingVertical: 30 }}>
            <Text style={{ color: normaltextcolor, fontSize: 18, }}>
              Adresse: {'\t'}Rudolph-Bahro-Straße 18 {'\n'}
              {'\t\t\t\t\t\t\t\t\t\t\t\t'}06217 Merseburg
            </Text>
          </View>
        </View>
        </ScrollView>
        <View style={styleVersion.info}>
          <Text style={{ color: 'yellow', fontSize: 6 }}>
            {Version}
          </Text>
        </View>
      </View>
    );
  }
}

module.exports.ContactScreen = ContactScreen;
const normaltextcolor = 'white';

const styles = StyleSheet.create({
  topic: {
    flex: 0.3,
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: -30,
  },
  info: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    textAlign: 'center',
  },
  openTimeFlexBox:{
    paddingBottom:6
  }
});