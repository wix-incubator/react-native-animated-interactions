import _ from 'lodash';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, PanResponder, Animated
} from 'react-native';

import autoBind from 'auto-bind';

export default class playground extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      animatingValue: new Animated.Value(0)
    };
  }

  componentWillMount() {
    this.state.animatingValue.setValue(400);
    this.animation = Animated.spring(
      this.state.animatingValue,
      {
        toValue: 200,
        friction: 0.2,
        useNativeDriver: false
      }
    );
    this.animation.start();
    this.chokeTheBridge();
  }

  chokeTheBridge() {
    setInterval(() => {
      for (var index = 0; index < 1e8; index++) {
      }
    }, 500);
  }

  render() {
    return (
      <View style={styles.container}>
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
        <Animated.Image
          style={[styles.chatHead,
          {
            transform: [
              {
                translateY: this.state.animatingValue
              }
            ]
          }]}
          />
      </View>
    );
  }
}

const CIRCLE_SIZE = 80;

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
  chatHead: {
    backgroundColor: 'red',
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    position: 'absolute',
    left: 150,
    top: 200
  }
});

AppRegistry.registerComponent('playground', () => playground);
