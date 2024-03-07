import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header';
import { useState } from 'react';
import InputSymptoms from './components/InputSymptoms';
import { FontAwesome6 } from '@expo/vector-icons';

export default function App() {

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
          <Header/>
          <View style={styles.body}>
            <InputSymptoms />
          </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {
    flex: 1,
    paddingTop: 20,
  },
});
