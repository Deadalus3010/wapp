import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

class NewsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 0, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Hallo, du bist gerade bei den News!</Text>
          <Button
            title="Go to Settings"
            onPress={() => this.props.navigation.navigate('SettingsScreen')}
          />
        </View>
      );
    }
  }

module.exports.NewsScreen     = NewsScreen;