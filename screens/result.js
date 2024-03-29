import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Card from "../shared/Card";

export default function Result({ route, navigation }) {

    // dataset
    const dataset = [
        {disease: 'Tuberculosis', symptom: 'chills vomiting fatigue weight loss cough high fever breathlessness sweating loss of appetite mild fever yellowing of eyes swelled lymph nodes malaise phlegm chest pain blood in sputum', doctor_id: '', probability: 0},
        {disease: 'Fungal infection', symptom: 'itching skin rash nodal skin eruptions dischromic  patches', doctor_id: '', probability: 0},
        {disease: 'Peptic ulcer disease', symptom: 'vomiting indigestion loss of appetite abdominal pain passage of gases internal itching', doctor_id: '', probability: 0},
        {disease: 'Diabetes', symptom: 'fatigue weight loss restlessness lethargy irregular sugar level blurred and distorted vision obesity excessive hunger increased appetite polyuria', doctor_id: '', probability: 0},
        {disease: 'Bronchial Asthma', symptom: 'fatigue cough high fever breathlessness family history mucoid sputum', doctor_id: '', probability: 0},
        {disease: 'Hypertension', symptom: 'headache chest pain dizziness loss of balance lack of concentration', doctor_id: '', probability: 0},
        {disease: 'Jaundice', symptom: 'itching vomiting fatigue weight loss high fever yellowish skin dark urine abdominal pain', doctor_id: '', probability: 0},
        {disease: 'Malaria', symptom: 'chills vomiting high fever sweating headache nausea diarrhoea muscle pain', doctor_id: '', probability: 0},
        {disease: 'Chicken pox', symptom: 'itching skin rash fatigue lethargy high fever headache loss of appetite mild fever swelled lymph nodes malaise red spots over body', doctor_id: '', probability: 0},
        {disease: 'Typhoid', symptom: 'chills vomiting fatigue high fever headache nausea constipation abdominal pain diarrhoea toxic look (typhos)', doctor_id: '', probability: 0},
        {disease: 'Common Cold', symptom: 'continuous sneezing chills fatigue cough high fever headache swelled lymph nodes malaise phlegm throat irritation redness of eyes sinus pressure runny nose congestion chest pain loss of smell muscle pain', doctor_id: '', probability: 0},
        {disease: 'Pneumonia', symptom: 'chills fatigue cough high fever breathlessness sweating malaise phlegm chest pain fast heart rate rusty sputum', doctor_id: '', probability: 0},
        {disease: 'Migraine', symptom: 'acidity indigestion headache blurred and distorted vision excessive hunger stiff neck depression irritability visual disturbances', doctor_id: '', probability: 0},
        {disease: 'AIDS', symptom: 'muscle wasting patches in throat high fever extra marital contacts', doctor_id: '', probability: 0},
        {disease: 'Urinary tract infection', symptom: 'burning micturition bladder discomfort foul smell of urine continuous feel of urine', doctor_id: '', probability: 0},
        {disease: 'Dengue', symptom: 'skin rash chills joint pain vomiting high fever headache nausea loss of appetite pain behind the eyes back pain malaise muscle pain red spots over body', doctor_id: '', probability: 0},
        {disease: 'Acne', symptom: 'skin rash pus filled pimples blackheads scurring', doctor_id: '', probability: 0},
    ]

    // information being read from first screen
    const {symptom_stems, doctor} = route.params;

    return (
        <View style={styles.containers}>
            <Text>
                <Card>
                    <Text>{symptom_stems}</Text>
                </Card>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
        alignItems: "center",
    }
})