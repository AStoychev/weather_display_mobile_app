import { View, Text, Modal, Image, Dimensions, StyleSheet } from "react-native";

import CustomButton from "./CustomButton";

const animation = require('../assets/homePage/carrot.gif')

const Carrot = ({ onErrorMessageHandle, modalVisible }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
            <View style={styles.centeredView}>
                <View style={styles.container}>
                    <View style={styles.imageWraper}>
                        <Image source={animation} style={styles.animation} testID="error-image" />
                    </View>
                    <View style={styles.textWrapper}>
                        <Text style={styles.text}>Opps!</Text>
                        <Text style={styles.text}>An error occured while loading!</Text>
                        <Text style={styles.text}>Keep calm and <Text style={styles.carrot}>carrot</Text> on</Text>
                    </View>
                    <CustomButton onHandlePress={onErrorMessageHandle} text={'OK'} fontSize={15} testID="ok-button"/>
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#add8e6',
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
        paddingHorizontal: 30,
        paddingTop: 30
    },
    text: {
        flexWrap: 'wrap',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600'
    },
    carrot: {
        color: '#fe5c12',
        fontWeight: '800'
    }
})

export default Carrot;