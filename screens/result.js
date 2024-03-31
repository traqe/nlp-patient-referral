import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Card from "../shared/Card";

export default function Result({ route, navigation }) {

    // dataset of symptom-disease-doctor
    const dataset = [
        {disease: 'Tuberculosis', symptom: 'chills vomiting fatigue weight loss cough high fever breathlessness sweating loss of appetite mild fever yellowing of eyes swelled lymph nodes malaise phlegm chest pain blood in sputum', doctor_id: 1, probability: 0},
        {disease: 'Fungal infection', symptom: 'itching skin rash nodal skin eruptions dischromic  patches', doctor_id: 1, probability: 0},
        {disease: 'Peptic ulcer disease', symptom: 'vomiting indigestion loss of appetite abdominal pain passage of gases internal itching', doctor_id: 2, probability: 0},
        {disease: 'Diabetes', symptom: 'fatigue weight loss restlessness lethargy irregular sugar level blurred and distorted vision obesity excessive hunger increased appetite polyuria', doctor_id: 3, probability: 0},
        {disease: 'Bronchial Asthma', symptom: 'fatigue cough high fever breathlessness family history mucoid sputum', doctor_id: 4, probability: 0},
        {disease: 'Hypertension', symptom: 'headache chest pain dizziness loss of balance lack of concentration', doctor_id: 3, probability: 0},
        {disease: 'Jaundice', symptom: 'itching vomiting fatigue weight loss high fever yellowish skin dark urine abdominal pain', doctor_id: 5, probability: 0},
        {disease: 'Malaria', symptom: 'chills vomiting high fever sweating headache nausea diarrhoea muscle pain', doctor_id: 1, probability: 0},
        {disease: 'Chicken pox', symptom: 'itching skin rash fatigue lethargy high fever headache loss of appetite mild fever swelled lymph nodes malaise red spots over body', doctor_id: 1, probability: 0},
        {disease: 'Typhoid', symptom: 'chills vomiting fatigue high fever headache nausea constipation abdominal pain diarrhoea toxic look (typhos)', doctor_id: 1, probability: 0},
        {disease: 'Common Cold', symptom: 'continuous sneezing chills fatigue cough high fever headache swelled lymph nodes malaise phlegm throat irritation redness of eyes sinus pressure runny nose congestion chest pain loss of smell muscle pain', doctor_id: 4, probability: 0},
        {disease: 'Pneumonia', symptom: 'chills fatigue cough high fever breathlessness sweating malaise phlegm chest pain fast heart rate rusty sputum', doctor_id: 4, probability: 0},
        {disease: 'Migraine', symptom: 'acidity indigestion headache blurred and distorted vision excessive hunger stiff neck depression irritability visual disturbances', doctor_id: 6, probability: 0},
        {disease: 'AIDS', symptom: 'muscle wasting patches in throat high fever extra marital contacts', doctor_id: 1, probability: 0},
        {disease: 'Urinary tract infection', symptom: 'burning micturition bladder discomfort foul smell of urine continuous feel of urine', doctor_id: 8, probability: 0},
        {disease: 'Dengue', symptom: 'skin rash chills joint pain vomiting high fever headache nausea loss of appetite pain behind the eyes back pain malaise muscle pain red spots over body', doctor_id: 1, probability: 0},
        {disease: 'Acne', symptom: 'skin rash pus filled pimples blackheads scurring', doctor_id: 7, probability: 0},
    ]

    // doctor dataset
    const doctors = [
        {id: 1, name: 'Dr. Amani Nkosi', image: null, specialty: 'Infectious Disease Specialist'},
        {id: 2, name: 'Dr. Kwame Osei', image: null, specialty: 'Gastroenterologist'},
        {id: 3, name: 'Dr. Zara Abasi', image: null, specialty: 'Endocrinologist/Cardiologist'},
        {id: 4, name: 'Dr. Tendai Mbeki', image: null, specialty: 'Pulmonologist/Allegist'},
        {id: 5, name: 'Dr. Sanaa Juma', image: null, specialty: 'Hepatologist'},
        {id: 6, name: 'Dr. Jabari Sibanda', image: null, specialty: 'Neurologist'},
        {id: 7, name: 'Dr. Niazi Chikwamba', image: null, specialty: 'Dermatologist'},
        {id: 8, name: 'Dr. Avodele Nkrumah', image: null, specialty: 'Urologist'}
    ]

    // test
    function changeProbability() {
        dataset.forEach(element => {
            if (element.disease == 'Typhoid') {
                element.probability = 1;
            }
        });
        console.log(dataset);
    }

    changeProbability();

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