import React from 'react';
import { View } from 'react-native';
import MyHeader from '../components/Header';
import { Searchfield } from 'material-bread';
import { Entypo, AntDesign, Ionicons, Fontisto } from '@expo/vector-icons';
import { SwipeNav, BottomNavigation } from 'material-bread';
import db from '../config';
import firebase from 'firebase'
export default class Assembling extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      value: '',
      search: "",
      name:'',
      contact:'',
      address:'',
      
    };
  }

  getDetails = () => {
    db.collection("workers").get()
    .then((snapshot)=>{
      snapshot.forEach((doc)=>{
        this.setState({})
      })
    })
  }
  render() {
    return (
      <View>
        <View>
          <MyHeader />
          <View>
            <Searchfield 
          color={'#E91E63'}
          value={this.state.search}
          onChangeText={(search) => this.setState({search})}
          onCloseIcon={() => this.setState({search: ''})}
          style = {{top:-60}}
        />
          </View>
          <View>
           
          </View>
        </View>
      </View>
    );
  }
}
