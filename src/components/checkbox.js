import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import Colors from '@constants/colors';

export default class Checkbox extends Component {

  render() {
    return(
      <TouchableHighlight
        onPress={() => {
          console.log('hello world!')
        }}
      >
        <View style={styles.checkbox}/>
      </TouchableHighlight>
      
    );
  }

}

const styles = StyleSheet.create({
  checkbox: {
    height:20,
    width:20,
    borderWidth: 2,
    borderColor: Colors.Gray.Border,
    borderRadius:4
  }
});
