import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SelectScreen from '../Screens/SelectScreen'
import {AppStackNavigator} from './AppStackNatvigation'

export const AppTabNavigator = createBottomTabNavigator({
  Home: {
    screen: AppStackNavigator,
    navigationOptions: {
      tabBarIcon: (
        <Image  
          style={{ width: 50, height: 40 }}
          source={{
            uri: 'https://dottech.org/wp-content/uploads/2013/08/cutegif.gif',
          }}
        />
      ),
      tabBarLabel: 'Home',
    },
  },
  
   
});
