import {Text, StyleSheet} from 'react-native';
import React from 'react';

import Colors from '../../utils/constants/colors';

function InstructionText({children, style}) {
  return <Text style={[styles.instructionText]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
