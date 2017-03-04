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
    const style = [styles.checkbox];
    if (this.props.checked) {
      style.push(styles.isChecked);
    }

    return(
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={style}/>
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
  },
  isChecked: {
    borderColor: 'lime'
  }

});
