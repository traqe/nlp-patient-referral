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
            navigation.navigate('Results', {sympt_stems :preprocessor(symptoms)});
        }
        else {
            Alert.alert('Empty Input', 'You cannot submit empty symptom input', [{text: 'Ok', onPress: () => console.log('user passed no input')}]);
        }
    }

    function preprocessor(input) {

        // small letters
        const lowerCase = input.toLowerCase();

        // split words into array
        const splitWords = lowerCase.split(' ');

        var symptom_base = [];

        splitWords.forEach(element => {
            if (element == "i" 
            || element ==  "a"
            || element ==  "and"
            || element ==  "are"
            || element ==  "at"
            || element ==  "as"
            || element ==  "be"
            || element ==  "by"
            || element ==  "for"
            || element ==  "from"
            || element ==  "at"
            || element ==  "has"
            || element ==  "had"
            || element ==  "he"
            || element ==  "was"
            || element ==  "is"
            || element ==  "it"
            || element ==  "its"
            || element ==  "it's"
            || element ==  "of"
            || element ==  "that"
            || element ==  "the"
            || element ==  "to"
            || element ==  "was"
            || element ==  "were"
            || element ==  "will"
            || element ==  "with") {
                symptom_base.push("");
            }
            else {
                symptom_base.push(element);
            }
        });

        /*const removedStopWords = splitWords.filter(removeStopWords);
        function removeStopWords(word) {
                return (word != "i");
            }
        }*/
    
        console.log(symptom_base);
        return symptom_base;
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