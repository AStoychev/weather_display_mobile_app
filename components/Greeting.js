import { View, Text, StyleSheet } from "react-native";

const Greeting = () => {
    return (
        <View style={styles.textWrapper}>
            <Text style={styles.greeetingText}>Hello!</Text>
            <Text style={styles.text}>Check the weather by the city</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    greeetingText: {
        color: '#ffffff',
        fontSize: 30,
        fontWeight: '600'
    },
    text: {
        color: '#ffffff',
        fontSize: 15,
    },
})

export default Greeting