import React from "react";
import { StyleSheet, View, ActivityIndicator, FlatList, Text, TouchableOpacity } from "react-native";
import Icons from 'react-native-vector-icons/MaterialIcons';
import { styleBackButton, Version, styleVersion, stylescreen } from '../../../script/stylesheetcontainer.js';
import NumberFormat from "react-number-format";

export default class getSnacks extends React.Component {

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
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this); //Wichtig!!!
    this.state = {
      loading: true,
      dataSource: []
    };
  }

  /*****************  
 #
 #     [OnPressBack]
 #
 #    das ist die augelagerte OnPress funktion, für den "Zurück Button"
 #
 *****************/

  handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
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
    fetch("https://waermiapi.platincore.de/api/snacks/list")
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
  #     price:        string  data.item.price
  #     description:  string  data.item.description
  #
  *****************/

  renderItem = (data) =>
    <View style={styles.list}>
      <TouchableOpacity style={{ flex: 2 }}>
        <Text style={{ color: 'yellow', fontSize: 20 }}>
          {data.item.name}
        </Text>
      </TouchableOpacity>
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <Text style={{ color: 'yellow', fontSize: 20 }}>
          {data.item.size}
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: "flex-end", paddingRight: 10 }}>
        <Text style={{ color: 'yellow', fontSize: 20 }}>
        <NumberFormat 
          value={data.item.price} 
          suffix={'€'} 
          fixedDecimalScale={true}
          displayType={'text'}
          renderText={text =><Text style={{color:'yellow',fontSize:20}}>{text}</Text>} 
          decimalSeparator={','} 
          decimalScale={2}/>  
        </Text>
      </View>
    </View>
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9" />
          <Text style={styleBackButton.text}>{"\n\n"}Fehler 404: Netzwerkfehler{"\n"}

          Bitte überprüfen Sie ihre Internetverbindung.{"\n"}
          Dann versuchen Sie es bitte später erneut.

          </Text>
        </View>
      )
    }
    return (
      <View style={stylescreen.all_background}>
        <View style={[styleBackButton.position, {backgroundcolor: 'white'}]}>
          <View style={styleBackButton.buttonSize}>
            <TouchableOpacity onPress={this.handleBackButtonClick} style={styleBackButton.optic} >
              <Icons name={'arrow-back'} size={30} color='yellow' />
              <Text style={styleBackButton.text}>
                Zurück
                </Text>
            </TouchableOpacity>
          </View>
        </View>
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

module.exports.getSnacks = getSnacks;

/*****************  
#
#     [css]
#
#     Hier geben wir eine Form (ein Style) an und definieren,
#     wie die Daten ausgegeben werden sollen.
#
*****************/

<View style={{ flex: 0, justifyContent: 'center', alignItems: 'center' }}></View>

const styles = StyleSheet.create({
  loader: {
    flex: 0,
    height: 850,
    margin: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  },
  list: {
    flexDirection: "row",
    paddingVertical: 4,
    margin: 5,
    backgroundColor: "black",
    height: 60,

  }
});