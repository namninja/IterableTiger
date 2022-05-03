import {StyleSheet, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Iterable, IterableConfig} from '@iterable/react-native-sdk';
import MainScreen from './screens/MainScreen';
import Colors from './utils/constants/colors';
import {iterableAPIKey} from './assets/config/Config';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // ITERABLE:

    this.urlHandler = (url, context) => {
      console.log(`urlHandler, url: ${url}`);
    };
    // ITERABLE:
    const config = new IterableConfig();
    config.inAppDisplayInterval = 1.0; // Min gap between in-apps. No need to set this in production.
    config.urlHandler = this.urlHandler;
    config.autoPushRegistration = true;
    console.log(config);
    Iterable.initialize(iterableAPIKey, config).then(success => {
      console.log('here I am');
      Iterable.setEmail('nam.ngo+react3@iterable.com');
    });
    //
  }

  render() {
    let screen = <MainScreen />;
    return <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>;
  }
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
