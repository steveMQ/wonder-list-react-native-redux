import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  
} from 'react-native';
import Colors from '@constants/colors';
import Checkbox from '@components/checkbox';
/**
 * Goals
 * - Accepts a control element
 * - Accepts child content
 * 
 * <Row control={<Icon />}>
 *   <Text>This is the name of the todo</Text>
 * </Row>
 */

export default class Row extends Component {

  render() {
    console.log(this)
    return(
      <View style={[styles.row, this.props.style]}>
        <View style={styles.rowLeft}>
          {this.props.control}
        </View>
        <View style={styles.rowRight}>
          {this.props.children}
        </View>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  
  row: {
    padding:16,
    marginBottom:10,
    alignSelf: 'stretch',
    borderRadius:5,
    flexDirection: 'row'
  },
  rowLeft: {
    width:40,
  },
  rowRight: {
    flex:1,
  }
});
