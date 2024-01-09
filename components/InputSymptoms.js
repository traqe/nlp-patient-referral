import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function InputSymptoms() {

    const [symptoms, setSymptoms] = useState('');

    const changeHandler = (val) => {
        setSymptoms(val);
    }

    const submitButton = () => {
        if(symptoms != '' ) {
            console.log('this is where your NLP algorithm comes in');
        }
        else {
            Alert.alert('Empty Input', 'You cannot submit empty symptom input', [{text: 'Ok', onPress: () => console.log('user passed no input')}]);
        }
    }

    return (
        <View>
            <TextInput 
             placeholder="Input Patient's Symptoms"
             style={styles.input}
             onChangeText={changeHandler}
              />
            <View style={styles.br}></View>
            <Text style={styles.summary}>
                Summary: {symptoms}
            </Text>
            
            <View style={styles.button}>
                <Button 
                 title='Submit' 
                 color={'#fca'}
                 onPress={submitButton} /> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 20,
        borderWidth: 3,
        borderRadius: 15,
        borderColor: '#fca',
        padding: 10,
        marginTop: 80,
    },
    button: {
        margin: 55,
        marginTop: 80,
    },
    summary: {
        padding: 20,
        backgroundColor: '#fca',
        marginTop: 15,
        
      }
})