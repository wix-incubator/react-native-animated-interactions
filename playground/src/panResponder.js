import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, PanResponder
} from 'react-native';

import autoBind from 'auto-bind';

export default class playground extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
      onPanResponderGrant: this._handlePanResponderGrant,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderTerminate: this._handlePanResponderEnd,
    });
    this._previousLeft = 20;
    this._previousTop = 84;
    this._circleStyles = {
      style: {
        left: this._previousLeft,
        top: this._previousTop,
        backgroundColor: 'green',
      }
    };
  }

  _updateNativeStyles() {
    this.circle && this.circle.setNativeProps(this._circleStyles);
  }

  componentDidMount() {
    this._updateNativeStyles();
    // this.chokeTheBridge();
  }

  chokeTheBridge() {
    setInterval(() => {
      for (var index = 0; index < 1e8; index++) {
      }
    }, 500);
  }

  _handleStartShouldSetPanResponder() {
    // Should we become active when the user presses down on the circle?
    return true;
  }

  _handleMoveShouldSetPanResponder() {
    // Should we become active when the user moves a touch over the circle?
    return true;
  }

  _handlePanResponderGrant() {
    this._highlight();
  }

  _handlePanResponderMove(e, gestureState) {
    this._circleStyles.style.left = this._previousLeft + gestureState.dx;
    this._circleStyles.style.top = this._previousTop + gestureState.dy;
    this._updateNativeStyles();
  }

  _handlePanResponderEnd(e, gestureState) {
    this._unHighlight();
    this._previousLeft += gestureState.dx;
    this._previousTop += gestureState.dy;
  }

  _highlight() {
    this._circleStyles.style.backgroundColor = 'blue';
    this._updateNativeStyles();
  }

  _unHighlight() {
    this._circleStyles.style.backgroundColor = 'green';
    this._updateNativeStyles();
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
        <View
          style={styles.chatHead}
          ref={(circle) => {
            this.circle = circle;
          } }
          {...this._panResponder.panHandlers}
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
    left: 0,
    top: 0
  }
});

AppRegistry.registerComponent('playground', () => playground);
