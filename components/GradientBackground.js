import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { GlobalStyles } from '../constants/styles';

const GradientBackground = ({ children }) => {
    return (
        <LinearGradient
            colors={GlobalStyles.linearGradient}
            style={styles.container}
        >
            {children}
            {/* <View style={styles.content}>
                {children}
            </View> */}
        </LinearGradient>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    content: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    }
})

export default GradientBackground;