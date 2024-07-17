// Thermometer.js
import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

const Thermometer = ({ name, progress, duration, inputRange, backgroundColor }) => {
    const animatedValue = useRef(new Animated.Value(0)).current;
    const outputRange = ['0%', `${(progress / 100) * 100}%`]

    useEffect(() => {
        // Update the animated value based on progress changes
        Animated.timing(animatedValue, {
            toValue: progress,
            duration: duration, // Animation duration in milliseconds
            useNativeDriver: false, // 'false' is required for color animations
        }).start();
    }, [progress]);

    console.log('PROGRESS: ', progress)

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Animated.View
                    style={[
                        styles.progressBar,
                        { backgroundColor: backgroundColor },
                        
                        {
                            height: animatedValue.interpolate({
                                inputRange: inputRange,
                                outputRange: [0, 300],
                                // outputRange: ['0%', '70%'],
                                extrapolate: 'identify',
                            }),
                        },
                    ]}
                />
            </View>
            <View style={[styles.temperature, { borderColor: backgroundColor }]}>
                <Text style={styles.text}>{progress}</Text>
                <Text style={styles.text}>{name}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        gap: 10,

        // borderWidth: 1,
        // borderColor: '#ffffff'
    },
    wrapper: {
        position: 'relative',
        width: 30, // Width of the progress bar container
        height: 300, // Height of the progress bar container
        backgroundColor: 'rgba(71,121,120, 0.9)',
        borderRadius: 10,
        overflow: 'hidden', // Ensure overflow is hidden for the progress bar
    },
    progressBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        // backgroundColor: '#FF5733'
    },
    temperature: {
        width: 60,
        height: 60,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#ffffff',
        borderRadius: 10,
    },
    text: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: '700'
    }
});

export default Thermometer;



// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import ProgressBar from 'react-native-animated-progress';

// const Thermometer = ({ temperature }) => {
//     return (
//         <View style={styles.container}>
//             <ProgressBar progress={temperature} height={15} trackColor='red' backgroundColor="green" />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         width: 300,
//         padding: 10,
//         backgroundColor: 'white',
//         transform: [{ rotate: '270deg' }],
//     }
// })

// export default Thermometer;
