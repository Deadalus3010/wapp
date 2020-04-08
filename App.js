import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';

const { NewsScreen }      =   require('./src/script/screens/newsscreen.js');
const { EventScreen }     =   require('./src/script/screens/eventscreen.js');
const { ProductsScreen }  =   require('./src/script/screens/productsscreen.js'); 
const { ContactScreen }   =    require('./src/script/screens/contactscreen.js');

  /*****************  
  #
  #     [Nav]
  #
  #     Setzt Elemente auf den Bildschirm 
  #
  #    { key: 'home',      title: 'Home',            icon: 'alpha-h-box',    color: '#3F51B5' },
  #    { key: 'news',      title: 'News',            icon: 'alpha-n-box',    color: '#009688' },
  #    { key: 'products',  title: 'Produkte',        icon: 'alpha-p-box',    color: '#795548' },
  #    { key: 'settings',  title: 'Einstellungen',   icon: 'alpha-e-box',    color: '#607D8B' },   
  #
  *****************/ 

export default class Waermi extends React.Component {
  state = {
    index: 0,
    routes: [                                             
      { key: 'news',     title: 'News',      icon: 'alpha-n-box',    color: '#3F51B5' },
      { key: 'event',    title: 'Events',    icon: 'alpha-e-box',    color: '#009688' },
      { key: 'products', title: 'Produkte',  icon: 'alpha-p-box',    color: '#795548' },
      { key: 'contact',  title: 'Kontakt',   icon: 'alpha-k-box',    color: '#607D8B' },
    ]
  }

  _handleIndexChange = index => this.setState({ index });

  /*****************  
  #
  #     [Screen]
  #
  #     Definiert die Bottomnavbar    
  #
  #   _renderScene = BottomNavigation.SceneMap({
  #     news:      NewsRoute,
  #     event:     EventRoute,
  #     products:  ProductsRoute,
  #     contact:   ContactRoute,
  #   });
  *****************/ 

  _renderScene = BottomNavigation.SceneMap({
    news:      NewsScreen,
    event:     EventScreen,
    products:  ProductsScreen,
    contact:   ContactScreen,
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