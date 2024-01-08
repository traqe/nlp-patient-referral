import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function InputSymptoms() {

    const [symptoms, setSymptoms] = useState();

    const changeHandler = (val) => {
        setSymptoms(val);
    }

    return (
        <View>
            <TextInput 
             placeholder='input symptoms'
             style={styles.input}
             onChangeText={changeHandler}
             multiline
              />
            <Text style={styles.summary}>
                Summary: {symptoms}
            </Text>
            <View style={styles.button}>
                <Button 
                 title='Submit' 
                 color={'#fca'}
                 onPress={() => {}} /> 
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
    },
    button: {
        margin: 55,
    },
    summary: {
        padding: 20,
      }
})