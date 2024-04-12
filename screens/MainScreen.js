import {View, StyleSheet, KeyboardAvoidingView, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import Card from '../components/Card';
import InstructionText from '../components/InstructionText';
import Colors from '../utils/constants/colors';
import {Iterable} from '@iterable/react-native-sdk';
import {userEmail, phoneNumber} from '../iterableConfig';

function MainScreen({navigation}) {
  useEffect(() => {});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function updateUser() {
    if (isLoggedIn) {
      console.log('update_user');
      Iterable.updateUser(
        {
          userId: 'RN2222',
          firstName: 'Joan',
          lastName: 'Jett',
          favoriteDrink: 'latte',
          phoneNumber: phoneNumber,
          timeZone: 'America/Los_Angeles',
          email: userEmail,
        },
        false,
      );
    }
  }

  function triggerEvent() {
    console.log('custom_event');
    Iterable.getLastPushPayload().then(payload => console.log(payload));
    Iterable.trackEvent('atePizza', {
      likesToDance: true,
      likesToPaint: true,
    });
  }
  function userLogin() {
    console.log('user_login');
    Iterable.setEmail(userEmail);
    Iterable.getLastPushPayload().then(res => console.log(res));
    setIsLoggedIn(true);
  }
  function userLogout() {
    console.log('user_logout');
    Iterable.setEmail('');
    setIsLoggedIn(false);
  }

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer]}>
          <Title>Test App</Title>
          <Card>
            <InstructionText style={styles.instructionText}>
              User Login/Logout
            </InstructionText>
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={userLogin}>Login</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={userLogout}>Logout</PrimaryButton>
              </View>
            </View>
          </Card>
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
          <PrimaryButton onPress={() => navigation.navigate('Pepperoni')}>
            Menu
          </PrimaryButton>
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
