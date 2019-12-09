import React, { Component } from 'react';
import { Button  } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

const parent = this.props.navigation.dangerouslyGetParent();
const isDrawerOpen = parent && parent.state && parent.state.isDrawerOpen
this.props.navigation.dispatch(DrawerActions.openDrawer());
this.props.navigation.dispatch(DrawerActions.closeDrawer());
this.props.navigation.dispatch(DrawerActions.toggleDrawer());

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});

const MyApp = createAppContainer(MyDrawerNavigator);