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
import Routes from '@constants/routes';

export default class ListScreen extends Component {
  state = {
    // The text that is displayed in the "add todo" TextField
    newTodoText: "",

    // The list of todo items
    todos: [
      {title: 'hello there', completed: false},
      {title: 'howdy', completed: false}
    ]
  }

  /**
   * Handles a Todo list item checkbox being pressed.
   * This will toggle the todo model's `completed` field.
   * 
   * @param {Todo} todo The todo to toggle.
   */
  onTodoCheckboxPressed(todo) {
    // (Read) Find the position of the todo in the list of todos.
    // We will use this index to replace the old todo with the updated todo.
    var index = this.state.todos.indexOf(todo);

    // (Read) We create a copy of the todo list because we will be making changes to it.
    var updatedTodos = this.state.todos.slice();

    // (Read) We create a copy of the todo that will be toggled.
    var updatedTodoItem = {...todo};


    // (Modify) We modify our todo copy by toggling the `completed` value.
    updatedTodoItem.completed = !todo.completed;

    // (Modify) We modify the todo list copy by *replacing* the old todo (based on its index)
    // with the updated todo copy.
    updatedTodos[index] = updatedTodoItem;


    // (Write) We finally take our updated todo list, which contains the toggled Todo item,
    // and update the state to use this newly updated list.
    this.setState({todos: updatedTodos});
  }

  /**
   * Handles when the user types the title of a new Todo in the text field.
   * 
   * @param {String} text 
   */
  onNewTodoTextChange(text) {
    // (Write) We directly replace the old text with the updated text in the state.
    this.setState({newTodoText: text})
  }

  /**
   * Handles when the user taps on the right navigation element.
   * If there is text in the New Todo Input Field, a new Todo is added.
   * Otherwise we navigate to the Add Todo screen.
   */
  onRightButtonPressed() {
    if(this.state.newTodoText){
      // If the user has typed any text, create a new todo.
      this.addNewTodo(this.state.newTodoText)
    } 
    else {
      // Otherwise, we navigate to the Add Todo screen.
      console.log('nothing here')
    }
  }

  /**
   * Creates a new Todo and adds it to the list of todos.
   * 
   * @param {String} title 
   */
  addNewTodo(title) {
    // Create the new Todo
    var todo = {
      title: title,
      completed: false
    }

    // (Read) Create a copy of the list of todos from the state
    var updatedTodos = this.state.todos.slice();

    // (Modify) Add the new todo to the copy of the todos.
    updatedTodos.push(todo);

    // (Write) Update the state with the updated todo list and clear the text field.
    this.setState({
      todos: updatedTodos,
      newTodoText: ''
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require('../imgs/background.png')}
          style={styles.backgroundImage} 
        >
        </Image>

        <Header
          rightIconName="plus"
          onRightPressed={ () => this.onRightButtonPressed() }
        />

        {/* the area where the todo items will live */}
        <ScrollView>
          <View style={styles.viewArea}>
            <AddToDoItem 
              valueOfTextField={this.state.newTodoText}
              onNewTodoTextChange={
                (text) => this.onNewTodoTextChange(text)
              }
            />

            {this.state.todos.map((todo, index) => {
              return (
                <ToDoItem
                  key={index}
                  checked={todo.completed}
                  title={todo.title}
                  onCheckboxPressed={() => this.onTodoCheckboxPressed(todo)}
                />
              )
            })}
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


