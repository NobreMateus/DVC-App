import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppNavigator } from './src/constants/routes';
import { createAppContainer } from 'react-navigation';

export default createAppContainer(AppNavigator);

