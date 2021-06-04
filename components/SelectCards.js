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
export default class SelectCards extends Component {
  render() {
    return (
      <View>
        <View style={{ paddingBottom: 50 }}>
          <Card>
            <View style={{ right: 20, marginTop: -50 }}>
              <CardHeader
                title={'𝒫𝓁𝓊𝓂𝒷𝒾𝓃𝑔'}
                titleStyles={{ fontSize: 25, fontWeigth: 'bold', right: 20 }}
              />
            </View>
            <CardMedia
              image={
                <Image
                  style={{ flex: 1, width: '100%' }}
                  source={{
                    uri:
                      'https://image.freepik.com/free-vector/plumber-occupation-flat-tiny-faucet-repair-persons-concept-construction-service-work-with-water-pipeline-tube-maintenance-leak-fix-abstract-house-sanitary-sink-mechanic-job_126608-1006.jpg',
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
