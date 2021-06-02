import React from 'react';
import { Text, View, ScrollView} from 'react-native';
import { stylescreen, styleVersion, Version } from '../stylesheetcontainer.js';
import { FlatList } from 'react-native-gesture-handler';


//temporäre Daten bis aus der Datenbank gezogen wird. 
posts = [
    {
      id: "1",
      name: "Wärmi",
      text: "Willkommen in der App. Hier bekommt ihr exklusive Neuigkeiten rund um den Wärmi.",
      timestamp: "20032021",
    },
    {
      id: "2",
      name: "Getränke",
      text: "JETZT NEU! Der Schüttler. Blue Curacao triff Zitrone. Für 1,50 Euro",
      timestamp: "20032021",
    },
    {
      id: "3",
      name: "Snacks",
      text: "Wir haben Nachschub besorgt und es sind wieder Chips im Haus",
      timestamp: "20032021",
    },
    {
      id: "4",
      name: "Wärmi",
      text: "Wir haben jetzt neue Brettspiele. Probiert sie zum nächsten Öffnungstag gerne aus.",
      timestamp: "20032021",
    },
    {
      id: "5",
      name: "Mitglieder",
      text: "Jimmy hat seine Anwärterzeit hinter sich und ist jetzt ein vollwertiges Mitglied. Herzlichen Glückwunsch und Herzlich Willkommen im Team.",
      timestamp: "20032021",
    }
];



class NewsScreen extends React.Component {


  /*****************  
#
#     [Feed]
#
#     Erstellen der Posts
#     Laden des Namens, der Nachricht und des Zeitpunktes und verpacken in eine Box
#
*****************/ 
  renderPost = post => {
    return (
        <View style={{backgroundColor: 'gray', borderRadius: 5, padding: 8, flexDirection:"row", marginVertical:8}}> 
            <View style={{flex: 1}}>
                <View style={{flexDirection: "row", justifyContent: "space-between", alignItems:"center"}}>
                    <View>
                        <Text style={{color: 'yellow', fontSize: 20, padding: 5}}>{post.name}</Text>
                        <Text style={{color: 'yellow', fontSize: 15, padding: 5}}>{post.text}</Text>
                        <Text style={{color: 'black', fontSize: 10, padding: 5, marginTop: 3, textAlign: 'right' }}>{post.timestamp}</Text>
                    </View>
                </View>                  
            </View>            
        </View>
    )
  }


  /*****************  
  #
  #     [Ausgabe]
  #
  #     Die angeforderten API-Daten sollen hier gefiltert und dargestellt werden.
  #
  #     Mögliche API Calls:
  #
  #     name:         string  data.item.name
  #     text:         string  data.item.text
  #     timestamp:    string  data.item.timestamp
  #
  *****************/ 
    render() {
    return (
      <View style={stylescreen.all_background}>
        <ScrollView>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'yellow', fontSize: 30, padding: 20, textDecorationLine: 'underline' }}>
              News Ticker
              </Text>
          </View>
          <FlatList 
            style={stylescreen.feed} 
            data={posts} 
            renderItem={({item}) => this.renderPost(item)} 
            keyExtractor={item => item.id} 
            showsVerticalScrollIndicator={false}/>

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
