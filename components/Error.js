import { View, Text, TouchableOpacity, Modal, Image, Dimensions, StyleSheet } from "react-native";

const animation = require('../assets/homePage/error.gif')
const { width, height } = Dimensions.get('window');

const Error = ({ onErrorMessageHandle, modalVisible }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
            <View style={styles.centeredView}>
            <View style={styles.container}>
                <View style={styles.imageWraper}>
                    <Image source={animation} style={styles.animation} />
                </View>
                <View style={styles.textWrapper}>
                    <Text style={styles.text}>Opps!</Text>
                    <Text style={styles.text}>An error occured while loading!</Text>
                    <Text style={styles.text}>Please make sure the city is correct or try again!</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={onErrorMessageHandle}>
                    <Text style={styles.textButton}>OK</Text>
                </TouchableOpacity>
            </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(57, 52, 54, 0.8)',
    },
    container: {
        // position: 'absolute',
        // zIndex: 10,
        // width: 300,
        // height: 400,
        // top: height / 2 - 150, // Adjust the value based on element's height
        // left: width / 2 - 180, // Adjust the value based on element's width
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        paddingVertical: 15,
        borderRadius: 10
    },
    imageWraper: {
        textAlign: 'center',
        alignItems: 'center',
    },
    animation: {
        width: 150,
        height: 150,
    },
    textWrapper: {
        textAlign: 'center',
        alignItems: 'center',
        paddingTop: 30
    },
    text: {
        flexWrap: 'wrap',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600'
    },
    button: {
        marginTop: 30,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: '#ddb130'
        // borderWidth: 3,
        // borderColor: '#000000'
    },
    textButton: {
        fontSize: 15,
        fontWeight: '600'
    }
})

export default Error;