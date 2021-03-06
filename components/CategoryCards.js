import React from 'react';
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
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Entypo, AntDesign, Ionicons, Fontisto } from '@expo/vector-icons';
export default class CategoryCards extends React.Component {
  render() {
    return (
      <View>
        <View style={{ paddingBottom: 50 }}>
          <Card>
            <View style={{ right: 20, marginTop: -50 }}>
              <CardHeader
                title={'π»πΆππΉπ ππΆπ π²πππππ'}
                titleStyles={{ fontSize: 25, fontWeigth: 'bold', right: 20 }}
                subtitle={
                  'π«πππΆππ π«ππππ ππ½π π·ππππ π·πππππ πΎπ» πππ ππΆππ ππ πΏππΎπ πΆπ πΆ π»πΆππΉπ ππΆπ.'
                }
                subtitleStyles={{ fontSize: 16 }}
              />
            </View>
            <CardMedia
              image={
                <Image
                  style={{ flex: 1, width: '100%' }}
                  source={{
                    uri:
                      'https://img.freepik.com/free-vector/set-mix-race-professional-repairmen-uniform-making-house-renovation-home-maintenance-repair-service-concept-full-length-horizontal-isolated-vector-illustration_48369-33664.jpg?size=626&ext=jpg',
                  }}
                  resizeMode="cover"
                />
              }
            />
            <CardContent></CardContent>
          </Card>
        </View>
      </View>
    );
  }
}
