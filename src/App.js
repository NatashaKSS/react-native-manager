// @flow
import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDgBkGnHStXo4QZIy9m-LMV8Lhs0WPcaZ4',
      authDomain: 'react-native-practice-manager.firebaseapp.com',
      databaseURL: 'https://react-native-practice-manager.firebaseio.com',
      projectId: 'react-native-practice-manager',
      storageBucket: 'react-native-practice-manager.appspot.com',
      messagingSenderId: '1032419586866',
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Header text="Manager" />
        </View>
      </Provider>
    );
  }
}

export default App;
