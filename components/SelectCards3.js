import React, { Component } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardHeader,
  Ripple,
  Tooltip,
  IconButton,
  Divider,
} from 'material-bread';
import { View, Text, Image } from 'react-native';
import { Entypo, AntDesign, Ionicons, Fontisto } from '@expo/vector-icons';
export default class SelectCards3 extends Component {
  render() {
    return (
      <View>
        <View style={{ paddingBottom: 50 }}>
          <Card>
            <View style={{ right: 20, marginTop: -50 }}>
              <CardHeader
                title={'𝒜𝓈𝓈𝑒𝓂𝒷𝓁𝒾𝓃𝑔'}
                titleStyles={{ fontSize: 25, fontWeigth: 'bold', right: 20 }}
                a
              />
            </View>
            <CardMedia
              image={
                <Image
                  style={{ flex: 1, width: '100%' }}
                  source={{
                    uri:
                      'https://img.freepik.com/free-vector/furniture-assembly-concept-illustration-workers-manufacture-with-professional-tools-help-from-furniture-store-professional-flat-cartoon-illustration_218639-33.jpg?size=626&ext=jpg',
                  }}
                  resizeMode="cover"
                />
              }
            />
          </Card>
        </View>
      </View>
    );
  }
}
