import { Text, TouchableOpacity, StyleSheet } from "react-native"

const CustomButton = ({onHandlePress, text, fontSize}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onHandlePress}>
            <Text style={[styles.buttonText, {fontSize: fontSize}]}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        paddingHorizontal: 30,
        paddingVertical: 10,
        backgroundColor: '#ddb130',
        borderRadius: 10
    },
    buttonText: {
        color: '#362a84',
        fontWeight: '600',
    }
})

export default CustomButton;