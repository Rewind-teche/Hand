import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import SelectScreen from '../Screens/SelectScreen';

export const AppStackNavigator = createStackNavigator(
  {
    BookDonateList: {
      screen: SelectScreen,
      navigationOptions: {
        headerShown: false
      },
    },
    
  },
  {
    initialRouteName: 'BookDonateList',
  }
);
