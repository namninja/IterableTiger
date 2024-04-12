import {View, StyleSheet, KeyboardAvoidingView, ScrollView} from 'react-native';
import React from 'react';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import Card from '../components/Card';
import InstructionText from '../components/InstructionText';
import Colors from '../utils/constants/colors';
import {Iterable} from '@iterable/react-native-sdk';

function PizzaScreen({navigation}) {
  function orderedPizza() {
    console.log('custom_event');
    Iterable.trackEvent('orderedPizza', {
      likesToDance: true,
      likesToPaint: true,
    });
  }

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer]}>
          <Title>Pizza Screen</Title>

          <Card>
            <InstructionText style={styles.instructionText}>
              Push a Button
            </InstructionText>
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={orderedPizza}>
                  Order a Pizza
                </PrimaryButton>
              </View>
            </View>
          </Card>
          <PrimaryButton onPress={() => navigation.navigate('Main')}>
            Main
          </PrimaryButton>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default PizzaScreen;

//const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    // marginTop: deviceHeight < 380 ? 30 : 100,
    alignItems: 'center',
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 10,
    fontWeight: 'bold',
    width: 50,
    textAlign: 'center',
    padding: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
