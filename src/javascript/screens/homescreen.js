import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';

class HomeScreen extends React.Component {
    render() {
      return (
        <View style={styles.style}>
         <Text>Home!</Text>
         <Button
           title="Go to Settings"
           onPress={() => this.props.navigation.navigate('SettingsScreen')}
         />

       <FontAwesome icon={SolidIcons.smile} />
       <FontAwesome icon={RegularIcons.smileWink} />
       <FontAwesome icon={BrandIcons.github} />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  home:{
    flex: 0,
    height: 850,
    margin: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    fontFamily: "FontAwesome5_Brands"
   },
});

module.exports.HomeScreen     = HomeScreen;