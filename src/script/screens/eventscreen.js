import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { Version } from '../stylesheetcontainer.js';


export default class EventScreen extends React.Component {

  _isMounted = false;

  /*****************  
  #
  #     [Screen]
  #
  #     Setzt Elemente auf den Bildschirm     
  #
  *****************/

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Source Listing",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { textAlign: "center", flex: 1 }
    };
  };

  /*****************  
  #
  #     []
  #
  #          
  #
  *****************/

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: []
    };
  }

  /*****************  
  #
  #     [API]
  #
  #     Hier wird die API angegeben, mit der alle Inhalte abgefragt werden können
  #
  *****************/

  componentDidMount() {
    this._isMounted = true;
    fetch("https://waermiapi.platincore.de/api/events/list")
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          loading: false,
          dataSource: responseJson
        })
      })
      .catch(error => console.log(error)) //Fehler catching
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  /*****************  
  #
  #     [Ausgabe]
  #
  #     Der "Trennstrich" zwischen den einzelnen Auflistungen wird hier initialisiert
  #
  *****************/

  FlatListItemSeparator = () => {
    return (
      <View style={{
        height: .5,
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",  //  # Und hier kann man die Farbe des Trennstriches verändern
      }}
      />
    );
  }

  /*****************  
  #
  #     [Ausgabe]
  #
  #     Die angeforderten API-Daten werden hier gefiltert und dargestellt.
  #
  #     Mögliche API Calls:
  #
  #     name:         string  data.item.name
  #     size:         string  data.item.size
  #     price:        string  data.item.price
  #     description:  string  data.item.description
  #
  *****************/

  renderItem = (data) =>
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <View style={{ flex: 0.15, alignItems: 'center', paddingVertical: 20 }}>
          <Text style={{ fontSize: 30, color: 'yellow', textDecorationLine: 'underline' }}>
            Nächste Veranstaltung
          </Text>
        </View>
        <View style={{ flex: 0.40, }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 40, color: 'red', textAlign: 'center' }}>
              {data.item.name}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', paddingTop: 20 }}>
            <View style={{ alignItems: 'center', borderRadius: 15, borderWidth: 3, borderColor: 'red', width: '50%' }}>
              <Text style={{ fontSize: 30, color: 'yellow' }}>
                {data.item.date}
              </Text>
            </View>
            <View style={{ alignItems: 'center', borderRadius: 15, borderWidth: 3, borderColor: 'red', width: '50%' }}>
              <Text style={{ fontSize: 30, color: 'yellow' }}>
                {data.item.time}
              </Text>
            </View>
          </View>
          <View style={{ alignItems: 'center', borderRadius: 15, borderWidth: 0, borderColor: 'red', paddingTop: 20 }}>
            <View>
              <Text style={{ fontSize: 25, color: 'white', textAlign: 'center' }}>
                {data.item.special1}
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 25, color: 'white', textAlign: 'center' }}>
                {data.item.special2}
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 25, color: 'white', textAlign: 'center' }}>
                {data.item.special3}
             </Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 0.15, alignItems: 'center', paddingBottom: 20, paddingTop: 30 }}>
          <Text style={{ fontSize: 30, color: 'yellow', textDecorationLine: 'underline' }}>
            Kommende Veranstaltung
        </Text>
        </View>
        <View style={{ flex: 0.40, }}>
          <View style={{ paddingVertical: 20, paddingHorizontal: 10, flexDirection: "row", alignItems: 'flex-start', width: '100%' }}>
            <View style={{ flex: 0.8, alignself: 'flex-start' }} >
              <Text style={{ color: 'white', fontSize: 22 }}>
                Candy Party
        </Text>
            </View>
            <View style={{ flex: 0.2, alignself: 'flex-start' }}>
              <Text style={{ color: 'white', fontSize: 22 }}>
                01.06
        </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.info}>
        <Text style={{ color: 'yellow', fontSize: 6 }}>
          {Version}
        </Text>
      </View>
    </View>
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9" />
          <Text>{"\n\n"}Fehler 404: Netzwerkfehler{"\n"}

          Bitte überprüfen Sie ihre Internetverbindung.{"\n"}
          Dann versuchen Sie es bitter später erneut.

          </Text>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={item => this.renderItem(item)}
          keyExtractor={item => item.name.toString()}
        />
      </View>
    )
  }
}


module.exports.EventScreen = EventScreen;

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  info: {
    alignItems: 'flex-end',
    textAlign: 'center',
  }
});