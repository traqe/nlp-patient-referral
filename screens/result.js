import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Result({ route, navigation }) {

    const {symptom_stems} = route.params;

    return (
        <View style={styles.containers}>
            
            <Text>
                Symptoms: 
                {symptom_stems}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
        alignItems: "center"
    }
})