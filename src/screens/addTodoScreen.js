
import React, {Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Colors from '@constants/colors';
import Header from '@components/header';
import Routes from '@constants/routes';

export default class AddTodoScreen extends Component {
  render() {
    return(
      
      <View>
        <Header 
          leftIconName="arrow-left" 
          onLeftPressed= {
            () => this.props.navigator.pop(Routes.List)
          }
        />
        <Text>We made it!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  
});
