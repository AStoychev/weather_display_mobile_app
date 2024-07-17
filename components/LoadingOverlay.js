import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';

function LoadingOverlay({ message, color }) {
  return (
    <View style={styles.rootContainer}>
      <Text style={[styles.message, {color: color}]}>{message}</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  rootContainer: {
    // position: 'absolute',
    // flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    // backgroundColor: 'rgba(60, 52, 56, 0.5)',
    borderRadius: 10,
    zIndex: 10
  },
  message: {
    fontSize: 16,
    marginBottom: 12,
  },
});