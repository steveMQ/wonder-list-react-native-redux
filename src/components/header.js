import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import renderIf from 'render-if';

import Colors from '@constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Header extends Component {
  render() {
    return(
        <View style={styles.header}>
          <View>
            {this.props.leftIconName &&
              <Icon
                name={this.props.leftIconName} 
                size={16} 
                color='white' 
                onPress={this.props.onLeftPressed}
              />
            }
          </View>
          <Text 
            style={styles.headerText}>
              Title goes here
          </Text>
          <View>
            {this.props.rightIconName &&
              <Icon 
                name={this.props.rightIconName}
                size={16}
                color='white'
                onPress={this.props.onRightPressed}
              />
            }
          </View>
          
        </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    height:88, 
    backgroundColor: Colors.Green.NORMAL,
    paddingTop:30,
    paddingHorizontal:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText:{
    fontSize:16
  },

});
