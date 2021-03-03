import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import NumberFormat from "react-number-format";
import { styleBackButton, styleVersion, Version, stylescreen, styleError } from '../../../script/stylesheetcontainer.js';

export default class Monatsspecial extends Component {

  _isMounted = false;

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Source Listing",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { textAlign: "center", flex: 1 }
    };
  };

  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      loading: true,
      dataSource: [],
      //default value of the date time
      date: '',
    };
  }
  componentDidMount() {
    this._isMounted = true;
    fetch("https://waermiapi.platincore.de/api/specials/list")
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          loading: false,
          dataSource: responseJson
        })
      })
      .catch(error => console.log(error)) //Fehler catching

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

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
  }

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

  renderItem = (data) =>
    <View>
      {/*Position muss hier etwas geändert werden, deshalb ein eigenständiges Padding */}
      <View style={[styleBackButton.position, { paddingBottom: -10 }]}>
        <View style={styleBackButton.buttonSize}>
          <TouchableOpacity onPress={this.handleBackButtonClick} style={styleBackButton.optic} >
            <Icons name={'arrow-back'} size={30} color='yellow' />
            <Text style={styleBackButton.text}>
              Zurück
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.bot_scroll_special}>
        <View style={styles.topic_special}>
          <Text style={{ fontSize: 60, color: b_color_text, textAlignVertical: 'center' }}>
            {this.state.date}
          </Text>
        </View>
        <View style={{ paddingTop: 100, alignItems: 'center' }}>
          <Text style={{ color: b_color_text, fontSize: 40 }}>
            {data.item.name}
          </Text>
        </View>
        <View style={{ padding: 20, alignItems: 'center' }}>
          <Text style={{ color: b_color_text, fontSize: 30 }}>
            für
              </Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: 'red', fontSize: 50 }}>
            <NumberFormat
              value={data.item.price}
              suffix={'€'}
              fixedDecimalScale={true}
              displayType={'text'}
              renderText={text => <Text style={{ color: 'red', fontSize: 50 }}>{text}</Text>}
              decimalSeparator={','}
              decimalScale={2} />
          </Text>
        </View>
      </ScrollView>
    </View>
  render() {
    if (this.state.loading) {
      return (
        <View style={styleError.loader}>
          <ActivityIndicator size="large" color="#0c9" />
          <Text style={styleBackButton.text}>{"\n\n"}Fehler 404: Netzwerkfehler{"\n"}

          Bitte überprüfen Sie ihre Internetverbindung.{"\n"}
          Dann versuchen Sie es bitter später erneut.

          </Text>
        </View>
      )
    }
    return (
      <View style={stylescreen.all_background}>
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={item => this.renderItem(item)}
          keyExtractor={item => item.name.toString()}
        />
        <View style={styleVersion.info}>
          <Text style={{ color: 'yellow', fontSize: 6 }}>
            {Version}
          </Text>
        </View>
      </View>
    )

  }
}
module.exports.Monatsspecial = Monatsspecial;

const b_color_background = 'black'
const b_color_text = 'yellow'
const styles = StyleSheet.create({
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
    paddingTop: 20,
  },
});