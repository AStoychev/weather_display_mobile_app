import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GradientBackground from "../components/GradientBackground";

const weather = require('../assets/homePage/weather.png');

const StartPage = () => {
    const navigation = useNavigation();


    function onGetStartHandle() {
        navigation.navigate('Home')
    }

    return (
        <GradientBackground>
            <View style={styles.container}>
                <Image source={weather} />
                <View style={styles.textWrapper}>
                    <Text style={styles.textWeather}>Weather</Text>
                    <Text style={styles.textForecast}>ForeCasts</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={onGetStartHandle}>
                    <Text style={styles.buttonText}>Get Start</Text>
                </TouchableOpacity>
            </View>
        </GradientBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 50,
    },
    textWrapper: {
        alignItems: 'center',
    },
    textWeather: {
        fontSize: 50,
        color: '#ffffff',
        fontWeight: '800'
    },
    textForecast: {
        fontSize: 50,
        color: '#ddb130',
        fontWeight: '600'
    },
    button: {
        padding: 10,
        backgroundColor: '#ddb130',
        borderRadius: 10
    },
    buttonText: {
        color: '#362a84',
        fontSize: 20,
        fontWeight: '600',
    }
});


export default StartPage;