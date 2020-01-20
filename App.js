import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppNavigator } from './src/constants/routes';
import { createAppContainer } from 'react-navigation';
import * as firebase from 'firebase';
import {firebaseConfig} from './src/constants/firebase';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default createAppContainer(AppNavigator);

