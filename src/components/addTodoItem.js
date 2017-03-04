import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  
} from 'react-native';
import Colors from '@constants/colors';
import Row from '@components/row'; 
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

export default class AddToDoItem extends Component {

  render() {
    return(
      <Row 
        
        style={styles.row}
      >
        <Text style={styles.addTodoItemText}>
          Add a to-do...
        </Text> 
      </Row>
    );
  }


}

const styles = StyleSheet.create({
   
  addTodoItemText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'System'
  },
  row: {
    backgroundColor: Colors.Green.OPAQUE,  
  },
});
