import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar, Button, TouchableOpacity, Image } from 'react-native';

class ProductsScreen extends React.Component {
    render() {
      return (
        <View style={styles.bot}>
          <TouchableOpacity onPress={() => console.log('Die Getränke')}>
            <View style={styles.button_feat}>
              <Text style={{ color: b_color_text, textAlign: 'center', fontSize: 30 }}
              >Getränke
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  }

module.exports.ProductsScreen     = ProductsScreen;

const b_color_background = 'black'
const b_color_text = 'yellow'
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  topic: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 20,
  },
  picture: {
    width: 300,
    height: 120
  },
  bot: {
    flex: 4,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 40,
  },
  button_feat: {
    backgroundColor: b_color_background,
    borderRadius: 15,
    width: 250,
    height: 50,
    lineHeight: 15,
    textShadowRadius: 20,
    borderWidth: 2,
    borderColor: 'yellow',
    textAlign: 'center',
    justifyContent: 'space-around',
  },
  info: {
    flex: 0.08,
    alignItems: 'flex-end',
    textAlign: 'center',
  }
});