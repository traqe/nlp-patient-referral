import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Header from './components/Header';
import { useState } from 'react';
import InputSymptoms from './components/InputSymptoms';

export default function App() {

  return (
    <View style={styles.container}>
        <Header/>
        <View style={styles.body}>
          <InputSymptoms />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {
    paddingTop: 20,
  },
});
