import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppNavigator } from './src/constants/routes';
import { createAppContainer } from 'react-navigation';
import * as firebase from 'firebase';
import {firebaseConfig} from './src/constants/firebase';
import { Provider } from 'react-redux';
import storeConfig from './src/store/storeConfig';
import reducer from './src/store/reducers/user';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const store = storeConfig();

let Navigation = createAppContainer(AppNavigator);

export default class App extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <Navigation />
        </Provider>
      );
    }
  }