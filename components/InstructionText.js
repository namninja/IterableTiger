import {Text, StyleSheet} from 'react-native';
import React from 'react';

function InstructionText({children, style}) {
  return <Text style={[styles.instructionText]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: '#ddb52f',
    fontSize: 24,
  },
});
