import { View, Text, Image, ScrollView, KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import useFetchData from "../hooks/useFetchData";

import GradientBackground from "../components/GradientBackground";
import Greeting from "../components/Greeting";
import Search from "../components/Search";
import Thermometer from "../components/ThermometerShape";
import Error from "../components/Error";
import Carrot from "../components/Carrot";
import LoadingOverlay from "../components/LoadingOverlay";

import { capitalizeFirstLetter } from "../functions/capitalizeFirstLetter";

const thermometer = require('../assets/homePage/thermometer.png')

const Home = () => {
    const { onHandlePress, onErrorMessageHandle, temperatures, city, loading, error } = useFetchData();

    const cityCarrot = useSelector(state => (state.data.cityQuery).toLowerCase());

    return (
        <GradientBackground>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
            >
                {error && cityCarrot === 'carrot'
                    ?
                    <Carrot onErrorMessageHandle={onErrorMessageHandle} modalVisible={error} />
                    :
                    <Error onErrorMessageHandle={onErrorMessageHandle} modalVisible={error} />
                }

                <View style={styles.wrapper}>
                    <View style={styles.content}>
                        <Greeting />
                        <Search onHandlePress={onHandlePress} />
                    </View>
                    {!loading && <Text style={styles.query}>{capitalizeFirstLetter(city)}</Text>}
                    <ScrollView style={styles.dataWrapper}>
                        {loading ? <LoadingOverlay message={'Loading...'} color={'#ffffff'} />
                            :
                            <>
                                {temperatures ?
                                    <View style={styles.data}>
                                        <Thermometer name="°C" temperature={temperatures.celsiusTemp} inputRange={[0, 100]} color={'rgb(241,69,49)'} increaseNumber={2} />
                                        <Thermometer name="°F" temperature={temperatures.fahrenheitTemp} inputRange={[0, 212]} color={'rgb(126,217,86)'} increaseNumber={5} />
                                        <Thermometer name="K" temperature={temperatures.kelvinTemp} inputRange={[0, 375]} color={'rgb(56,182,255)'} increaseNumber={10} />
                                    </View>
                                    :
                                    <View style={styles.imageWrapper}>
                                        <Image source={thermometer} />
                                    </View>
                                }
                            </>
                        }
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </GradientBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 30,
    },
    wrapper: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
    },
    content: {
        gap: 10,
    },
    dataWrapper: {
        width: '100%',
        flex: 1,
        overflow: 'hidden',
    },
    data: {
        gap: 10,
    },
    imageWrapper: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        paddingTop: 100,
    },
    query: {
        fontSize: 23,
        fontWeight: '700',
        color: '#ffffff',
        textAlign: 'center',
    },
})

export default Home;