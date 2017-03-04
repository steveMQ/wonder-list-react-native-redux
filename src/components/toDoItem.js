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

export default class ToDoItem extends Component {

  render() {
    return (
      <Row 
        control={
          <Checkbox
            checked={this.props.checked}
            onPress={this.props.onCheckboxPressed}
          />
        }
        style={styles.row}
      >
        <Text style={styles.toDoItemText}>{this.props.title}</Text>
      </Row>
    );
    
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
