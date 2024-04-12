import {Linking} from 'react-native';
import React, {useEffect} from 'react';
import {
  IterableLogLevel,
  Iterable,
  IterableConfig,
  IterableInAppMessage,
  IterableInAppShowResponse,
} from '@iterable/react-native-sdk';
import MainScreen from './screens/MainScreen';
import PizzaScreen from './screens/PizzaScreen';
import {iterableAPIKey} from './iterableConfig';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './RootNavigation';
import * as RootNavigation from './RootNavigation';

const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  useEffect(() => {
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
    function urlHandler(url: string, _context: any) {
      console.log(`urlHandler, url: ${url}`);
      let match = url.match(/menu\/([^/]+)/i);
      console.log('match:' + match);
      console.log('if statement' + (match && match.length > 1));
      if (match && match.length > 1) {
        const id = match[1];
        console.log('id:' + id);
        RootNavigation.navigate('Pepperoni');
        return true;
      } else {
        console.log('opening external url');
        return false;
      }
    }
    // ITERABLE:
    const config = new IterableConfig();
    config.logLevel = IterableLogLevel.info;
    config.inAppHandler = (message: IterableInAppMessage) => {
      console.log(message);
      return IterableInAppShowResponse.show;
    };
    config.customActionHandler = (action, context) => {
      console.log('customActionHandler');
      console.log(action);
      console.log(context);
      if (action.type) {
        // For this action, update the app's styles

        return true;
      }
      return false;
    };
    config.urlHandler = urlHandler;
    config.logLevel = IterableLogLevel.debug;
    config.autoPushRegistration = true;
    Iterable.initialize(iterableAPIKey, config).then(success => {
      console.log('Initialization Complete');
    });
  });

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Pepperoni" component={PizzaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
