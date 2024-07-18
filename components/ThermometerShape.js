import { useState, useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const Thermometer = ({ name, progress, inputRange, color }) => {
  const temperature = progress;
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: temperature,
      duration: (1000 + progress), // Adjust animation speed as needed
      useNativeDriver: true,
    }).start();
  }, [temperature, animatedValue]);

  const radius = 75; // Adjust the radius of your ring
  const strokeWidth = 6; // Adjust the thickness of the ring
  const circumference = 2 * Math.PI * radius;

  const progressAnimation = animatedValue.interpolate({
    inputRange: inputRange,
    // inputRange: [0, 100],
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
            stroke='#ffffff'
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={progressAnimation}
            fill="transparent"
          />
        </G>
      </Svg>
      <Text style={styles.text}>{progress} {name}</Text>
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  minTemperature: {
    fontSize: 12,
    color: '#ffffff'
  }
});

export default Thermometer;