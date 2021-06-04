import React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import {Button} from 'material-bread'
import { Entypo, AntDesign, Ionicons, Fontisto } from '@expo/vector-icons';
import CategoryCards from '../components/CategoryCards';
import CategoryCards2 from '../components/CategoryCards2'
export default class CategoryScreen extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Image
            source={require('../assets/header.png')}
            style={{ width: '100%', marginBottom: 50 }}
          />
        </View>
        <View>
        <View>
          <CategoryCards />
          <Button text={'Join as Worker'} textColor={'#009688'} icon={<AntDesign name="adduser" />}
          style = {{top:-40}}
           onPress = {()=>{this.props.navigation.navigate('LoginScreen2')}}
           />
           
           </View>
           <View>
            <CategoryCards2 />
          <Button text={'Join as Customer'} textColor={'#009688'} icon={<AntDesign name="adduser" />}
          style = {{top:-40}}
           onPress = {()=>{this.props.navigation.navigate('LoginScreen')}}
           />
          
           </View>
        </View>
      </View>
    );
  }
}
