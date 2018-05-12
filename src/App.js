// @flow
import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Header text="Manager" />
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
