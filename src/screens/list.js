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
import Header from '@components/header';

export default class ListScreen extends Component {
  state = {
    newTodoText: "steve",
    todos: [
      {title: 'hello there', completed: false},
      {title: 'howdy', completed: false}
    ]
  }

  onTodoCheckboxPressed(todo) {
    var index = this.state.todos.indexOf(todo);
    var updatedTodos = this.state.todos.slice();
    var updatedTodoItem = {...todo, completed: !todo.completed};

    updatedTodos[index] = updatedTodoItem;
    this.setState({todos: updatedTodos});
  }

  onNewTodoTextChange(text) {
    this.setState({newTodoText: text})
  }

  render() {
    const todoOne = this.state.todos[0];
    const todoTwo = this.state.todos[1];

    return (
      <View style={styles.container}>
        <Image 
          source={require('../imgs/background.png')}
          style={styles.backgroundImage} 
        >
        </Image>

        <Header />

        {/* the area where the todo items will live */}
        <ScrollView>
          <View style={styles.viewArea}>
            <AddToDoItem 
              valueOfTextField={this.state.newTodoText}
              onNewTodoTextChange={
                (text) => this.onNewTodoTextChange(text)
              }
            />
            <ToDoItem 
              checked={todoOne.completed}
              title={todoOne.title}
              onCheckboxPressed={() => this.onTodoCheckboxPressed(todoOne)}
            />
            <ToDoItem 
              checked={todoTwo.completed}
              title={todoTwo.title}
              onCheckboxPressed={() => this.onTodoCheckboxPressed(todoTwo)}
            />
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


