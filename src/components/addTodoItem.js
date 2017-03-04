import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
  
} from 'react-native';
import Colors from '@constants/colors';
import Row from '@components/row'; 
import Icon from 'react-native-vector-icons/FontAwesome';



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
        control={
          <Icon name="plus" size={16} color="white"/>
        }
        style={styles.row}
      >
        <TextInput 
          style={styles.addTodoItemText}
          value={this.props.valueOfTextField}
          onChangeText={
            (text) => this.props.onNewTodoTextChange(text)
          }
        >
          
        </TextInput> 
      </Row>
    );
  }


}

const styles = StyleSheet.create({
   
  addTodoItemText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'System',
    flex:1,
    
  },
  row: {
    backgroundColor: Colors.Green.OPAQUE,  
  },
  
});
