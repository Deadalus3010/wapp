import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

class NewsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 0, justifyContent: 'center', alignItems: 'center' }}>
          <Text>News!</Text>
        </View>
      );
    }
  }

module.exports.NewsScreen     = NewsScreen;