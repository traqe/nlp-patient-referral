import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Card from "../shared/Card";

export default function Result({ route, navigation }) {

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