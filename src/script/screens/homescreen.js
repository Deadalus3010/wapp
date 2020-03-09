import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 0, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home!</Text>
          <Button
            title="Go to Settings"
            onPress={() => this.props.navigation.navigate('SettingsScreen')}
          />
        </View>
      );
    }
  }

module.exports.HomeScreen     = HomeScreen;