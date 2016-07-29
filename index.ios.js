/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
var { NativeAppEventEmitter } = require('react-native');
var EventHelper = require('react-native').NativeModules.EventHelper;
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class EventTest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }

  componentWillMount()
  {
    console.log("123");
    var subscription = NativeAppEventEmitter.addListener(
        'EventReminder',
        (reminder) =>
        {
          console.log("总算收到!");
        }
    );

    EventHelper.test();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('EventTest', () => EventTest);
