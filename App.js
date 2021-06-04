import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LoginScreen from './Screens/LoginScreen';
import CategoryScreen from './Screens/CategoryScreen';
import SelectScreen from './Screens/SelectScreen';
import Assembling from './Screens/Assembling';
import LoginScreen2 from './Screens/LoginScreen2';
import Plumbing from './Screens/Plumbing';
import Cleaning from './Screens/Cleaning';
import Electrical from './Screens/Electrical';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
export default function App() {
  return (
    <View>
      <Plumbing/>
    </View>
  );
}

const switchnavigator = createSwitchNavigator({
  CategoryScreen: { screen: CategoryScreen },
  LoginScreen: { screen: LoginScreen },
  LoginScreen2:{screen:LoginScreen2},
  SelectScreen:{screen:SelectScreen},
  Assembling:{screen:Assembling},
  Plumbing:{screen:Plumbing},
  Cleaning:{screen:Cleaning},
  Electrical:{screen:Electrical}
});

const AppContainer = createAppContainer(switchnavigator);
