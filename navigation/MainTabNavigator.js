import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ProjectsScreen from '../screens/ProjectsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Colors from '../constants/Colors';

const ProjectsStack = createStackNavigator({
  Projects: ProjectsScreen,
});

ProjectsStack.navigationOptions = {
  tabBarLabel: 'Expo',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const styles = StyleSheet.create({
  tabBarLabel: {
    fontSize: 10,
    marginBottom: 5,
  }
});

export default createBottomTabNavigator({ ProjectsStack, SettingsStack }, {
  tabBarOptions: {
    activeTintColor: Colors.tabIconSelected,
    inactiveTintColor: Colors.tabIconDefault,
    activeBackgroundColor: '#444444',
    inactiveBackgroundColor: '#444444',
  }
});
