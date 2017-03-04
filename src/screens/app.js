/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import ListScreen from '@screens/list';
import AddTodoScreen from '@screens/addTodoScreen';
import Routes from '@constants/routes';

export default class TaskListReactApp extends Component {
  
  renderScene(route, navigator) {
    switch (route.name) {
      case Routes.List.name:
        return <ListScreen navigator={navigator} />
      case Routes.Add.name:
        return <AddTodoScreen navigator={navigator} />
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Navigator
          initialRoute={Routes.List}
          renderScene={this.renderScene}
        >

        </Navigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});


