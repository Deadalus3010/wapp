import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';

export default class HomeScreen extends Component {
  render() {
      return (
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.text}>
              1{"\n"}
              2{"\n"}
              3{"\n"}
              4{"\n"}
              5{"\n"}
              6{"\n"}
              7{"\n"}
              8{"\n"}
              9{"\n"}
              10{"\n"}
              11{"\n"}
              12{"\n"}
              13{"\n"}
              14{"\n"}
              15{"\n"}
              16{"\n"}
              17{"\n"}
              18{"\n"}
              19{"\n"}
              20{"\n"}
            </Text>
          </ScrollView>
        </View>
    );
  }
}

module.exports.HomeScreen     = HomeScreen;

const styles = StyleSheet.create({
  container: {
    //alignItems: 'center'
  },
  text: {
    flex: 1,
    fontSize:96
  }
});