/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react'
import { Provider } from 'react-redux'

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import configureStore from './src/modules/store'
import StartupScreen from './src/modules/screens/StartupScreen/index.js'
import QaScreen from "./src/modules/screens/QaScreens/index.js";

const store = configureStore();

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store}>
        <StartupScreen />
      </Provider>
    )
  }
}