import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  
} from 'react-native';
import Colors from '@constants/colors';
import Row from '@components/row';
import Checkbox from '@components/checkbox';
/**
 * Goals
 * - Checkbox (boolean)
 * - Title (text)
 * - Press (function)
 * 
 * <TodoItem
 *  title="Hello World"
 *  completed={false}
 *  onPress={() => {...}}
 * />
 */

export default class ToDoItem extends Component {

  render() {
    return (
      <Row 
        control={<Checkbox/>}
        style={styles.row}
      >
        <Text style={styles.toDoItemText}>This is a test!</Text>
      </Row>
    );
    /*return(
      <View style={styles.toDoItem}>
        <Text style={styles.toDoItemText}>This is a test!</Text>
      </View>    
    );*/
  }


}

const styles = StyleSheet.create({
  toDoItemText: {
    fontSize: 16,
    fontFamily: 'System'
  },
  row: {
    backgroundColor: Colors.White.NORMAL
  }
});
