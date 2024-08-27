import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';

function LoadingOverlay({ message, color }) {
    return (
        <View style={styles.rootContainer}>
            <Text style={[styles.message, { color: color }]}>{message}</Text>
            <ActivityIndicator size="large" />
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
        borderRadius: 10,
        zIndex: 10
    },
    message: {
        fontSize: 16,
        marginBottom: 12,
    },
});

export default LoadingOverlay;