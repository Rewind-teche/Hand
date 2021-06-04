import React from 'react';
import { Header, Icon } from 'react-native-elements';
import { View, Text, Image } from 'react-native';
import { Ripple, Tooltip, IconButton, Badge } from 'material-bread';
import { Entypo, AntDesign } from '@expo/vector-icons';

export default class MyHeader extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Image
            source={require('../assets/header.png')}
            style={{ width: '100%', height: 180 }}
          />
        </View>
        <View style={{ top: -180 }}>
          <Tooltip content={'𝑀𝑒𝓃𝓊'} tooltipPosition={'right'}>
            <Ripple rippleColor={'#5FDAFB'}>
              <Entypo
                name="menu"
                size={30}
                color={'#5FDAFB'}
                onPress={() => {
                  this.props.navigation.navigate('SelectScreen');
                }}
              />
            </Ripple>
          </Tooltip>
        </View>
        <View style={{ top: -210, left: 290 }}>
          <Tooltip content={'𝒩𝑜𝓉𝒾𝒻𝒾𝒸𝒶𝓉𝒾𝑜𝓃𝓈'} tooltipPosition={'left'}>
            <Ripple rippleColor={'#5FDAFB'}>
              <Badge
                size={16}
                content={5}
                color={'#1BDDB1'}
                textColor={'black'}>
                <Entypo name="bell" size={25} color={'#5FDAFB'} />
              </Badge>
            </Ripple>
          </Tooltip>
        </View>
      </View>
    );
  }
}
