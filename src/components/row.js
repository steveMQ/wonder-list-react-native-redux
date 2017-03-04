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
    height: 50,
    paddingHorizontal: 16,
    marginBottom: 10,
    borderRadius:5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  rowLeft: {
    width:30,
    justifyContent: 'center'
  },
  rowRight: {
    flex:1,
    justifyContent: 'center'
  }
});
