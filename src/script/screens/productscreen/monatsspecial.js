import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';

export default class Monatsspecial extends Component {
    constructor(props) {
      super(props);
      this.state = {
        //defauilt value of the date time
        date: '',
      };
    }
    componentDidMount() {
      var that = this;
      var monthNames = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
      var date = new Date().getDate(); //Current Date
      var month = monthNames[new Date().getMonth()]; //Current Month
      var year = new Date().getFullYear(); //Current Year
      var hours = new Date().getHours(); //Current Hours
      var min = new Date().getMinutes(); //Current Minutes
      var sec = new Date().getSeconds(); //Current Seconds
      that.setState({
        date:
          month,
      });
    }
    render() {
      return (
        <View style={styles.screen}>
          <ScrollView contentContainerStyle={styles.bot_scroll_special}>
            <View style={styles.topic_special}>
              <Text
                style={{ fontSize: 60, color: b_color_text, textAlignVertical: 'center' }}>
                {this.state.date}
              </Text>
            </View>
            <View style={{ paddingTop: 150, alignItems: 'center' }}>
              <Text style={{ color: b_color_text, fontSize: 40 }}>
                Whiskey-Cola
              </Text>
            </View>
            <View style={{ padding: 20, alignItems: 'center' }}>
              <Text style={{ color: b_color_text, fontSize: 30 }}>
                für
              </Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: 'red', fontSize: 50 }}>
                2,50€
              </Text>
            </View>
          </ScrollView>
        </View>
      )
    }
}
module.exports.Monatsspecial     = Monatsspecial; 

  
const b_color_background = 'black'
const b_color_text = 'yellow'
const styles = StyleSheet.create({
  screen: {
    height: '100%',
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  topic_special: {
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: b_color_background,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: 'yellow',
    justifyContent: 'center',
  },
  bot_scroll_special: {
    justifyContent: 'space-around',
    padding: 20,
    paddingTop: 40,
  }
});