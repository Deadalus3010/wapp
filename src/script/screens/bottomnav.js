import * as React from 'react';
import { View } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';

const { HomeScreen }      =   require('./src/javascript/screens/homescreen.js');
const { NewsScreen }      =   require('./src/javascript/screens/newsscreen.js');
const { ProductsScreen }  =   require('./src/javascript/screens/productsscreen'); 
const { SettingsScreen }  =   require('./src/javascript/screens/settingsscreen');


  /*****************  
  #
  #     [Variablen][Screen]
  #
  #     Hier werden Inhalte für die Hauptmenüs aus den dafür zuständigen Dateien geholt 
  #
  *****************/ 

const HomeRoute = ()      => <View><HomeScreen/></View>;

const NewsRoute = ()      => <View><NewsScreen/></View>;

const ProductsRoute = ()  => <View><ProductsScreen/></View>;

const SettingsRoute = ()  => <View><SettingsScreen/></View>;

  /*****************  
  #
  #     [Nav]
  #
  #     Setzt Elemente auf den Bildschirm     
  #
  *****************/ 

export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'home',      title: 'Home',            icon: 'queue-music',    color: '#3F51B5' },
      { key: 'news',      title: 'News',            icon: 'album',          color: '#009688' },
      { key: 'products',  title: 'Produkte',        icon: 'history',        color: '#795548' },
      { key: 'settings',  title: 'Einstellungen',   icon: 'shopping-cart',  color: '#607D8B' },
    ]
  }

  _handleIndexChange = index => this.setState({ index });

  /*****************  
  #
  #     [Screen]
  #
  #     Definiert die Bottomnavbar    
  #
  *****************/ 

  _renderScene = BottomNavigation.SceneMap({
    home:     HomeRoute,
    news:     NewsRoute,
    products: ProductsRoute,
    settings: SettingsRoute,
  });

  /*****************  
  #
  #     [Screen]
  #
  #     Rendert die Bottomnavbar    
  #
  *****************/ 

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}