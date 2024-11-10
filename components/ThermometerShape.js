import { useState, useEffect, useRef } from 'react';
import useAnimateTemperature from '../hooks/useAnimateTemperature';
import { View, Text, Animated, StyleSheet } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const Thermometer = ({ name, temperature, inputRange, color, increaseNumber }) => {
    const animatedValue = useRef(new Animated.Value(0)).current;

    const { count } = useAnimateTemperature(temperature, increaseNumber);

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: temperature + 5,
            duration: (1000 + temperature * 5),
            useNativeDriver: true,
        }).start();
        
    }, [temperature, animatedValue]);

    const radius = 75;
    const strokeWidth = 6;
    const circumference = 2 * Math.PI * radius;

    const progressAnimation = animatedValue.interpolate({
        inputRange: inputRange,
        outputRange: [0, circumference],
    });

    return (
        <View style={styles.container}>
            <Svg width={radius * 2} height={radius * 2}>
                <G rotation="90" origin={`${radius},${radius}`}>
                    <Circle
                        cx={radius}
                        cy={radius}
                        r={radius - strokeWidth / 2}
                        stroke={color}
                        strokeWidth={strokeWidth}
                        fill="transparent"
                    />
                    <AnimatedCircle
                        cx={radius}
                        cy={radius}
                        r={radius - strokeWidth / 2}
                        stroke='rgba(118, 118, 118, 1)'
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={progressAnimation}
                        fill="transparent"
                    />
                </G>
            </Svg>
            <Text style={styles.text}>{count.toFixed(2)} {name}</Text>
            {/* <Text style={styles.text}>{temperature} {name}</Text> */}
            <Text style={styles.minTemperature}>{inputRange[0]} {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
        transform: [{ translateX: -35 }, { translateY: -20 }],
    },
    minTemperature: {
        fontSize: 12,
        color: '#ffffff'
    }
});

export default Thermometer;