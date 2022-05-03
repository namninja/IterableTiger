import {StyleSheet, SafeAreaView, Linking} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Iterable, IterableConfig} from '@iterable/react-native-sdk';
import MainScreen from './screens/MainScreen';
import Colors from './utils/constants/colors';
import {iterableAPIKey} from './Config';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    Linking.getInitialURL().then(url => {
      if (url != null) {
        Iterable.handleAppLink(url);
      }
    });
    Linking.addEventListener('url', event => {
      if (event.url != null) {
        Iterable.handleAppLink(event.url);
      }
    });
    // ITERABLE:
    this.urlHandler = (url, context) => {
      console.log(`urlHandler, url: ${url}`);
      let match = url.match(/menu\/([^\/]+)/i);
      if (match && match.length > 1) {
        this.myMatch = match[1];
        console.log(`match, match: ${this.myMatch}`);
        return true;
      } else {
        console.log('opening external url');
        return false;
      }
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
