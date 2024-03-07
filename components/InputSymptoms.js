import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function InputSymptoms({ navigation }) {

    const [symptoms, setSymptoms] = useState('');

    const changeHandler = (val) => {
        setSymptoms(val);
    }

    const submitButton = () => {
        if(symptoms != '' ) {
            console.log('this is where your NLP algorithm comes in');
            navigation.navigate('Results', {'beast': 'canny'});
        }
        else {
            Alert.alert('Empty Input', 'You cannot submit empty symptom input', [{text: 'Ok', onPress: () => console.log('user passed no input')}]);
        }
    }

    return (
        <View style={styles.body}>
            <TextInput 
             placeholder="Input Patient's Symptoms"
             style={styles.input}
             onChangeText={changeHandler}
              />
            <Text style={styles.summary}>
            <FontAwesome5 style={styles.diseaseIcon} name="disease" size={24} color="black" />
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
        marginTop: 10,
        marginBottom: 35
    },
    button: {
        margin: 55,
        marginTop: 120,
    },
    summary: {
        padding: 20,
        backgroundColor: '#fca',
        marginTop: 15,
        marginHorizontal: 7,
        borderRadius: 5,
        fontWeight: 'bold'      
      },
    body: {
        flex: 1,
        justifyContent: 'center'
    },
})