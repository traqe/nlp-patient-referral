import { StyleSheet, Text, View} from 'react-native';

export default function Header() {
    return (
    <View style={styles.header}>
        <Text style={styles.title}>Patient Referrals</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: '#fca',   
    },
    
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
    }

});