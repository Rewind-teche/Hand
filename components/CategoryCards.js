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
                title={'𝐻𝒶𝓃𝒹𝓎 𝑀𝒶𝓃 𝒲𝑜𝓇𝓀𝑒𝓇'}
                titleStyles={{ fontSize: 25, fontWeigth: 'bold', right: 20 }}
                subtitle={
                  '𝒫𝓁𝑒𝒶𝓈𝑒 𝒫𝓇𝑒𝓈𝓈 𝓉𝒽𝑒 𝒷𝑒𝓁𝑜𝓌 𝒷𝓊𝓉𝓉𝑜𝓃 𝒾𝒻 𝓎𝑜𝓊 𝓌𝒶𝓃𝓉 𝓉𝑜 𝒿𝑜𝒾𝓃 𝒶𝓈 𝒶 𝐻𝒶𝓃𝒹𝓎 𝑀𝒶𝓃.'
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
