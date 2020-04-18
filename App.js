import React from 'react';
import * as firebase from 'firebase';
import {firebaseConfig} from './src/constants/firebase';
import { Provider } from 'react-redux';
import storeConfig from './src/store/storeConfig';

import Start from './src/screens/Start'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const store = storeConfig();

export default class App extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <Start />
        </Provider>
      );
    }
  }