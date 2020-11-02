import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';

const { NewsScreen }      =   require('./src/script/screens/newsscreen.js');
const { EventScreen }     =   require('./src/script/screens/eventscreen.js');
const { ProductsScreen }  =   require('./src/script/screens/productsscreen.js'); 
const { ContactScreen }   =   require('./src/script/screens/contactscreen.js');
const { MemberScreen }    =   require('./src/script/screens/memberscreen.js');


export const Version = "Alpha 2 (Nicolas Krieg u. Lucas Oehler)";


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
      { key: 'news',     title: 'News',      icon: 'alpha-n-box',    color: 'orange',  },
      { key: 'event',    title: 'Events',    icon: 'alpha-e-box',    color: '#ff6666' },
      { key: 'products', title: 'Produkte',  icon: 'alpha-p-box',    color: '#D1D63B' },
      { key: 'member',   title: 'Mitglieder', icon: 'alpha-m-box',    color: 'blue'},
      { key: 'contact',  title: 'Kontakt',   icon: 'alpha-k-box',    color: 'grey' },
      
    ]
  }
  activeColor= 'yellow'

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
    member:    MemberScreen,
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