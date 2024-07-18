import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { GlobalStyles } from '../constants/styles';

const GradientBackground = ({ children }) => {
    return (
        <LinearGradient
            colors={GlobalStyles.linearGradient}
            style={styles.container}
        >
            {children}
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
    }
})

export default GradientBackground;