import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { stylescreen, styleVersion, Version } from '../stylesheetcontainer.js';
import * as rssParser from 'react-native-rss-parser';
import { FlatList } from 'react-native-gesture-handler';


class NewsScreen extends React.Component {
  rssPar() {
    return fetch('http://www.nasa.gov/rss/dyn/breaking_news.rss')
      .then((response) => response.text())
      .then((responseData) => rssParser.parse(responseData))
      .then((rss) => {
        console.log(rss.title);
        console.log(rss.items.lenght);
      });
  }
  render() {
    return (
      <View style={stylescreen.all_background}>
        <ScrollView>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'yellow', fontSize: 30, padding: 20, textDecorationLine: 'underline' }}>
              News Ticker
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

module.exports.NewsScreen = NewsScreen;
