import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function DoctorItem() {
    return (
        <TouchableOpacity>
            <View>style={styles.item}
                <Text>
                    /* will contain doctor name, avatar image and speciality */
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10
    }
})