import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { stylescreen, styleVersion, Version } from '../stylesheetcontainer.js';

class MemberScreen extends React.Component {
  render() {
    return (
      <View style={stylescreen.all_background}>
        <ScrollView>
          <View style={{ backgroundColor: 'black', paddingTop: 10 }}>
            <Text style={{ color: 'yellow', fontSize: 20 }}>
              Vorstand
              </Text>
          </View>
          <View style={{ backgroundColor: 'grey', height: 200 }}>
            <Text >
              Inhalt
              </Text>
          </View>
          <View style={{ backgroundColor: 'black', paddingTop: 10 }}>
            <Text style={{ color: 'yellow', fontSize: 20 }}>
              aktive Mitglieder
              </Text>
          </View>
          <View style={{ backgroundColor: 'grey', height: 1200 }}>
            <Text>
              Inhalt
              </Text>
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

module.exports.MemberScreen = MemberScreen;
