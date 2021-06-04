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
export default class SelectCards4 extends Component {
  render() {
    return (
      <View>
        <View style={{ paddingBottom: 50 }}>
          <Card>
            <View style={{ right: 20, marginTop: -50 }}>
              <CardHeader
                title={'𝒞𝓁𝑒𝒶𝓃𝒾𝓃𝑔'}
                titleStyles={{ fontSize: 25, fontWeigth: 'bold', right: 20 }}
              />
            </View>
            <CardMedia
              image={
                <Image
                  style={{ flex: 1, width: '100%' }}
                  source={{
                    uri:
                      'https://image.freepik.com/free-vector/professional-janitors-working-office-isolated-flat-vector-illustration-cartoon-cleaning-team-washing-holding-stuff-removing-dust-using-vacuum-cleaner_74855-8544.jpg',
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
