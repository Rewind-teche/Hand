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
                title={'ππππππππ'}
                titleStyles={{ fontSize: 25, fontWeigth: 'bold', right: 20 }}
                subtitle={'π«πππΆππ π«ππππ ππ½π π·ππππ π·πππππ πΎπ» πππ πΆππ πΆ ππππππππ.'}
                subtitleStyles={{ fontSize: 16 }}
              />
            </View>
            <Ripple>
              <CardMedia
                image={
                  <Image
                    style={{ flex: 1, width: '100%' }}
                    source={{
                      uri:
                        'https://www.revechat.com/wp-content/uploads/2020/09/16-Different-Types-of-Customers-and-How-to-Handle-Them-1280x720.png',
                    }}
                    resizeMode="cover"
                  />
                }
              />
            </Ripple>
          </Card>
        </View>
      </View>
    );
  }
}
