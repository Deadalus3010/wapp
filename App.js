import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
 
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
 
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
        navigationOptions={{tabBarLabel: 'News'.toLowerCase(),}}
        tabBarOptions={{
          activeTintColor: 'black', 
          style: {backgroundColor: 'yellow'},
          inactiveTintColor: 'grey', 
          showIcon: 'true', 
          tabStyle:{alignItems:'center'},
          labelStyle: {fontSize: 11, 
            margin: 0, 
            padding: 0, 
            textTransform: 'none' /*ohne dies sind alle Buchstaben groß */ 
          },
          inactiveBackgroundColor: 'black',
          activeBackgroundColor: 'black',
          indicatorStyle:{backgroundColor: 'black'},
          upperCaseLabel: false,
          }}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let iconcolor_ind;
            let iconcolor_def = 'black';
            
            if (route.name === 'News') {
              iconName = focused
                  ? 'alpha-n-box'
                  : 'alpha-n-box-outline';
              iconcolor_ind = 'yellow';
            }
            else if (route.name === 'Events') {
              iconName = focused 
                  ? 'alpha-e-box'
                  : 'alpha-e-box-outline';
              iconcolor_ind = 'blue';
            }
            else if (route.name === 'Produkte') {
              iconName = focused 
                  ? 'alpha-p-box'
                  : 'alpha-p-box-outline';
              iconcolor_ind = 'blue';
            }
            else if (route.name === 'Mitglieder') {
              iconName = focused 
                  ? 'alpha-m-box'
                  : 'alpha-m-box-outline';
              iconcolor_ind = 'blue';
            }
            else if (route.name === 'Kontakt') {
              iconName = focused 
                  ? 'alpha-k-box'
                  : 'alpha-k-box-outline';
              iconcolor_ind = 'blue';
            }
            return <Icon name={iconName} size={22} color={iconcolor_def} />;
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