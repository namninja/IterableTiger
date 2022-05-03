import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import Colors from '../utils/constants/colors';
import {Iterable, IterableConfig} from '@iterable/react-native-sdk';

function MainScreen() {
  function updateUser() {
    console.log('update_user');
    Iterable.updateUser(
      {
        firstName: 'Joan',
        lastName: 'Jett',
        favoriteDrink: 'latte',
        phoneNumber: '+18582294679',
        timeZone: 'America/Los_Angeles',
      },
      false,
    );
  }

  function triggerEvent() {
    console.log('custom_event');
    Iterable.trackEvent('atePizza', {
      likesToDance: true,
      likesToPaint: true,
    });
  }

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer]}>
          <Title>Guess My Number</Title>

          <Card>
            <InstructionText style={styles.instructionText}>
              Push a Button
            </InstructionText>
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={updateUser}>Update User</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={triggerEvent}>
                  Trigger an Event
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default MainScreen;

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
