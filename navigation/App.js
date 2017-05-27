import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';

export default class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: "xxxxxxxxxx",
      authDomain: "xxxxxxxxxx",
      databaseURL: "xxxxxxxxxx",
      projectId: "xxxxxxxxxx",
      storageBucket: "xxxxxxxxxx",
      messagingSenderId: "xxxxxxxxxx"
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </Provider>
    );
  }
}
