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
      scrollX: new Animated.Value(0)
    };
  }

  componentWillMount() {
    this.chokeTheBridge();
  }

  chokeTheBridge() {
    setInterval(() => {
      for (var index = 0; index < 1e8; index++) {
      }
    }, 500);
  }

  render() {
    const opacity = this.state.scrollX.interpolate({
      inputRange: [0, 200],
      outputRange: [1, 0],
    });

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

        <View>
          <Animated.View
            style={[
              {
                width: 50,
                height: 50,
                backgroundColor: 'blue',
              },
              {
                opacity,
              }
            ]}
            />
          <Animated.ScrollView
            horizontal
            style={{ height: 100, marginTop: 16 }}
            scrollEventThrottle={16}
            onScroll={
              Animated.event([{
                nativeEvent: { contentOffset: { x: this.state.scrollX } }
              }],
                {
                  useNativeDriver: true,
                })
            }
            >
            <View style={{ width: 600, backgroundColor: '#eee', justifyContent: 'center' }}>
              <Text>Scroll me!</Text>
            </View>
          </Animated.ScrollView>
        </View>

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
