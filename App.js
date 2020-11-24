import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
 
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons'
 
const { NewsScreen }      =   require('./src/script/screens/newsscreen.js');
const { EventScreen }     =   require('./src/script/screens/eventscreen.js');
const { ProductsScreen }  =   require('./src/script/screens/productsscreen.js'); 
const { ContactScreen }   =   require('./src/script/screens/contactscreen.js');
const { MemberScreen }    =   require('./src/script/screens/memberscreen.js');
 
/*Bestimmt nur welche Art von Tab Navigator wir wollen */
const Tab = createMaterialTopTabNavigator()
 
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarPosition='bottom'
        tabBarOptions={{
          activeTintColor: 'grey', 
          style: {backgroundColor: 'yellow'},
          inactiveTintColor: 'black', 
          inactiveBackgroundColor: 'black',
          showIcon: 'true', 
          labelStyle: {fontSize: 7},
          }}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let iconcolor_ind;
            let iconcolor_def = 'black';
 
            if (route.name === 'News') {
              iconName = focused
                  ? 'rebel'
                  : 'tree';
              iconcolor_ind = 'yellow';
            }
            else if (route.name === 'Events') {
              iconName = focused 
                  ? 'ra'
                  : 'ra';
              iconcolor_ind = 'blue';
            }
            return <Icon name={iconName} size={20} color={iconcolor_def} />;
          },
        })
        }>
          <Tab.Screen name="News"       component={NewsScreen} />
          <Tab.Screen name="Events"     component={EventScreen} />
          <Tab.Screen name="Produkte"   component={ProductsScreen} />
          <Tab.Screen name="Mitglieder" component={MemberScreen} />
          <Tab.Screen name="Kontakt"    component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}