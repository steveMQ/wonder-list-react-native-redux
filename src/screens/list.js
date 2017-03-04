/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import Colors from '@constants/colors';
import ToDoItem from '@components/toDoItem';
import AddToDoItem from '@components/addTodoItem';
import Row from '@components/row';

export default class ListScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require('../imgs/background.png')}
          style={styles.backgroundImage} 
        >
        </Image>

        <View style={styles.header}>
          <Text>Stuff</Text>
        </View>

        {/* the area where the todo items will live */}
        <ScrollView>
          <View style={styles.viewArea}>
            <AddToDoItem />
            <ToDoItem />
          
          </View>
        </ScrollView>
        

        {/* the dock at the bottom of the screen */}
        <View style={styles.bottomDock}>
          
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    backgroundColor: 'transparent',
    resizeMode: "cover",
    position: 'absolute',
    top:0,
    left:0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  header: {
    height:60, 
    backgroundColor: Colors.Green.NORMAL,
    paddingTop:30,
    alignItems: 'center',
  },
  viewArea: {
    flex: 1,
    backgroundColor: 'transparent',
    marginLeft:10,
    marginRight:10,
    marginTop:88,
    marginBottom:10,
    alignItems: 'center',
  },
 
  bottomDock: {
    height:50,
    backgroundColor: Colors.Green.NORMAL
  }
});


