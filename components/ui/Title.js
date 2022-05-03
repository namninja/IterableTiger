import {Text, StyleSheet} from 'react-native';
import React from 'react';
//import Colors from '../../utils/constants/colors.js';

function Title({children}) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'yellow',
    textAlign: 'center',
    padding: 12,
    //borderWidth: Platform.OS === 'android' ? 2 : 0,
    // borderWidth: Platform.select({ios: 0, android: 2}),
    borderWidth: 0,
    borderColor: 'white',

    maxWidth: '80%',
  },
});
