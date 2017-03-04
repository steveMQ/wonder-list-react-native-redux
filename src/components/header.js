import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

import Colors from '@constants/colors';

export default class Header extends Component {
  render() {
    return(
      <View style={styles.header}>
          <Text>Stuff</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    header: {
    height:60, 
    backgroundColor: Colors.Green.NORMAL,
    paddingTop:30,
    alignItems: 'center',
  },
});
