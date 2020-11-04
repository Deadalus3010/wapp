import React from 'react';
import { Text, View } from 'react-native';
import { stylescreen, styleVersion, Version } from '../stylesheetcontainer.js';

class MemberScreen extends React.Component {
    render() {
      return (
        <View style={stylescreen.all_background}>
          <View style={{flex:1, alignSelf:'center', justifyContent:'center'}}>
            <Text style={{color:'yellow', fontSize:30, textAlign:'center'}}>
              Hier kommen die Mitglieder hin
            </Text>
            <Text style={{color:'yellow', fontSize:30, textAlign:'center'}}>
              Wird in späteren Patches nachgeliefert
            </Text>
          </View>
          <View style={styleVersion.info}>
            <Text style={{ color: 'yellow', fontSize: 6 }}>
              {Version}
            </Text>
          </View>
        </View>
      );
    }
  }

module.exports.MemberScreen     = MemberScreen;
