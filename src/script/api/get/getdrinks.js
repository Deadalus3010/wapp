import React from "react";
import {StyleSheet, View, ActivityIndicator, FlatList, 
        Text, TouchableOpacity, Alert} from "react-native";
import Icons from 'react-native-vector-icons/MaterialIcons';
import NumberFormat from "react-number-format";
import { styleBackButton, Version, styleVersion, stylescreen } from '../../stylesheetcontainer'; 

export default class getDrinks extends React.Component {

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
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this); //Wichtig!!!
    this.state = {
      loading: true,
      dataSource:[]
    };
  }

   /*****************  
  #
  #     [OnPressBack]
  #
  #    das ist die augelagerte OnPress funktion, für den "Zurück Button"
  #
  *****************/ 
 
  handleBackButtonClick(){                    
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

  componentDidMount(){
    this._isMounted = true;
    const { navigation } = this.props;  
    const getAPI = navigation.getParam('getAPIcall', 'list');  
    fetch("https://waermiapi.platincore.de/api/drinks/" + getAPI)
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
        backgroundColor:"black",  //  # Und hier kann man die Farbe des Trennstriches verändern
        }}
      />
    );
  }

  /*****************  
  #
  #     [Alert]
  #
  #     Hier werden die Zutaten für jedes Getränk angezeigt
  #
  *****************/ 

  showAlert = (name, description) => {
    Alert.alert('Zutatenliste von: '+ name, description);  
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
  #     afg:          bool    data.item.afg
  #     beer:         bool    data.item.beer
  #     cocktail:     bool    data.item.cocktail
  #     longdrink:    bool    data.item.longdrink
  #     shot:         bool    data.item.shot
  #     description:  string  data.item.description
  #
  *****************/ 

  renderItem = (data) =>
    <View style={styles.list}>
      <TouchableOpacity style={{flex:3}} onPress={() => this.showAlert(data.item.name, data.item.description)}>
        <Text style={{color:'yellow',fontSize:20}}>
          {data.item.name}
        </Text>
      </TouchableOpacity>
      <View style={{flex:1,alignItems:"flex-end", paddingRight:10}}>
        <Text style={{color:'yellow',fontSize:20}}>
          {data.item.size}l
        </Text>
      </View>
      <View style={{flex:1,alignItems:"flex-end",paddingRight:10}}>
        <NumberFormat 
          value={data.item.price} 
          suffix={'€'} 
          fixedDecimalScale={true}
          displayType={'text'}
          renderText={text =><Text style={{color:'yellow',fontSize:20}}>{text}</Text>} 
          decimalSeparator={','} 
          decimalScale={2}/>    
      </View>
    </View>   
    render(){
      if(this.state.loading){
      return( 
        <View style={styles.loader}> 
          <ActivityIndicator size="large" color="#0c9"/>
          <Text style={styleBackButton.text}>{"\n\n"}Fehler 404: Netzwerkfehler{"\n"}

          Bitte überprüfen Sie ihre Internetverbindung.{"\n"}
          Dann versuchen Sie es bitte später erneut.

          </Text>
        </View>
      )}
      return(
        <View style={stylescreen.all_background}>
          <View style={styleBackButton.position}>
            <View style={styleBackButton.buttonSize}>
              <TouchableOpacity onPress={this.handleBackButtonClick} style={styleBackButton.optic} > 
                <Icons name={'arrow-back'} size={30} color='yellow'/>
                <Text style={styleBackButton.text}>
                  Zurück
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
              data= {this.state.dataSource}
              ItemSeparatorComponent = {this.FlatListItemSeparator}
              renderItem= {item=> this.renderItem(item)}
              keyExtractor= {item=>item.name.toString()}
            />
          <View style={styleVersion.info}>
             <Text style={{ color: 'yellow', fontSize: 6 }}>
               {Version}
             </Text>
          </View>
        </View>
      )}
}

module.exports.getDrinks     = getDrinks;

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
    flex: 1,
    backgroundColor: "black"
   },
  loader:{
    flex: 0,
    height: 850,
    margin: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
   },
  list:{
    flexDirection: "row",
    paddingVertical: 4,
    margin: 5,
    backgroundColor: "black",
    height:60,
   }
});