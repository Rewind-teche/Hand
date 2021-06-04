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
  Button,
} from 'material-bread';
import { View, Text, Image } from 'react-native';
import { Entypo, AntDesign, Ionicons, Fontisto } from '@expo/vector-icons';
export default class SelectCards2 extends Component {
  render() {
    return (
      <View>
        <View style={{ paddingBottom: 50 }}>
          <Card>
            <View style={{ right: 20, marginTop: -50 }}>
              <CardHeader
                title={'𝐸𝓁𝑒𝒸𝓉𝓇𝒾𝒸𝒶𝓁'}
                titleStyles={{ fontSize: 25, fontWeigth: 'bold', right: 20 }}
              />
            </View>
            <CardMedia
              image={
                <Image
                  style={{ flex: 1, width: '100%' }}
                  source={{
                    uri:
                      'https://media1.thehungryjpeg.com/thumbs2/ori_3749911_bx9lgf3meqg4k7sg3sg83mw6szc3djkox4w8hohx_electrician-vector-different-poses-working-process-flat-cartoon-illustration.jpg',
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
