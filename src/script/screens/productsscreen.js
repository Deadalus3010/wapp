import React from "react";
import {StyleSheet, View, ActivityIndicator, FlatList, Text, TouchableOpacity} from "react-native";

export default class ProductsScreen extends React.Component {

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
      headerStyle: {backgroundColor: "#fff"},
      headerTitleStyle: {textAlign: "center",flex: 1}
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
      dataSource:[]
    };
  }

  /*****************  
  #
  #     [API]
  #
  #     Hier wird die API angegeben, mit der alle Inhalte abgefragt werden können
  #
  *****************/ 

  componentDidMount(){
    this._isMounted = true;
    fetch("https://waermiapi.platincore.de/api/drinks/list")
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
        loading: false,
        dataSource: responseJson
      })
    })
    .catch(error=>console.log(error)) //Fehler catching
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
        width:"100%",
        backgroundColor:"rgba(0,0,0,0.5)",  //  # Und hier kann man die Farbe des Trennstriches verändern
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
  *****************/ 

  renderItem=(data)=>
    <TouchableOpacity style={styles.list}>
      <Text style={styles.lightText}>{data.item.name}</Text>                              
      <Text style={styles.lightText}>{data.item.price}</Text>
      <Text style={styles.lightText}>{data.item.description}</Text></TouchableOpacity>    
    render(){
      if(this.state.loading){
      return( 
        <View style={styles.loader}> 
          <ActivityIndicator size="large" color="#0c9"/>
          <Text>{"\n\n"}Fehler 404: Netzwerkfehler{"\n"}

          Bitte überprüfen Sie ihre Internetverbindung.{"\n"}
          Dann versuchen Sie es bitter später erneut.

          </Text>
        </View>
      )}
      return(
        <View style={styles.container}>
          <FlatList
              data= {this.state.dataSource}
              ItemSeparatorComponent = {this.FlatListItemSeparator}
              renderItem= {item=> this.renderItem(item)}
              keyExtractor= {item=>item.name.toString()}
          />
        </View>
      )}
}

module.exports.ProductsScreen     = ProductsScreen;

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
  container: {
    flex: 0,
    backgroundColor: "#fff"
   },
  loader:{
    flex: 0,
    height: 850,
    margin: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
   },
  list:{
    paddingVertical: 4,
    margin: 5,
    backgroundColor: "#fff"
   }
});